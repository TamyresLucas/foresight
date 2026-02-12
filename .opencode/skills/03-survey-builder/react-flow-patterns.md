# React Flow Patterns

## Descricao
Padroes para uso do React Flow no Survey Builder, incluindo nodes personalizados, edges e manipulacao de fluxo.

## Regras Obrigatorias

### DO
- ✅ Usar ReactFlowProvider para contexto
- ✅ Criar nodes personalizados para cada tipo de questao
- ✅ Implementar edges condicionais (logica de salto)
- ✅ Adicionar mini-map para navegacao
- ✅ Usar controles de zoom/pan
- ✅ Persistir posicao dos nodes

### DON'T
- ❌ Renderizar sem ReactFlowProvider
- ❌ Esquecer de definir nodeTypes
- ❌ Ignorar performance com muitos nodes
- ❌ Usar onNodesChange sem applyNodeChanges
- ❌ Esquecer de tipar nodes e edges

## Exemplos de Codigo

### Setup Basico
```tsx
// components/flow/SurveyFlow.tsx
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
} from "reactflow";
import "reactflow/dist/style.css";
import { QuestionNode } from "./QuestionNode";
import { StartNode } from "./StartNode";
import { EndNode } from "./EndNode";
import { useCallback } from "react";

const nodeTypes: NodeTypes = {
  question: QuestionNode,
  start: StartNode,
  end: EndNode,
};

interface SurveyFlowProps {
  questions: Question[];
  onNodeClick?: (questionId: string) => void;
}

export function SurveyFlow({ questions, onNodeClick }: SurveyFlowProps) {
  const initialNodes: Node[] = [
    {
      id: "start",
      type: "start",
      position: { x: 250, y: 0 },
      data: { label: "Start" },
    },
    ...questions.map((q, index) => ({
      id: q.id,
      type: "question",
      position: { x: 250, y: (index + 1) * 150 },
      data: { question: q },
    })),
    {
      id: "end",
      type: "end",
      position: { x: 250, y: (questions.length + 1) * 150 },
      data: { label: "End" },
    },
  ];

  const initialEdges: Edge[] = questions.map((q, index) => ({
    id: `e-${index}`,
    source: index === 0 ? "start" : questions[index - 1].id,
    target: q.id,
    type: "smoothstep",
  }));

  if (questions.length > 0) {
    initialEdges.push({
      id: "e-end",
      source: questions[questions.length - 1].id,
      target: "end",
      type: "smoothstep",
    });
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) => addEdge({ ...connection, type: "smoothstep" }, eds)),
    [setEdges]
  );

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.type === "question" && onNodeClick) {
        onNodeClick(node.id);
      }
    },
    [onNodeClick]
  );

  return (
    <ReactFlowProvider>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="top-right"
        >
          <Background />
          <Controls />
          <MiniMap
            nodeStrokeWidth={3}
            zoomable
            pannable
          />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
```

### Node Personalizado
```tsx
// components/flow/QuestionNode.tsx
import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Type, CircleDot, CheckSquare, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const typeIcons = {
  text: Type,
  multiple_choice: CircleDot,
  checkbox: CheckSquare,
  rating: Star,
};

interface QuestionNodeData {
  question: {
    id: string;
    title: string;
    type: keyof typeof typeIcons;
    required: boolean;
  };
}

function QuestionNodeComponent({
  data,
  selected,
}: NodeProps<QuestionNodeData>) {
  const Icon = typeIcons[data.question.type] || Type;

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3"
      />
      
      <Card
        className={cn(
          "w-[280px] transition-all",
          selected && "ring-2 ring-primary"
        )}
      >
        <CardHeader className="p-3 pb-0">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium truncate">
              {data.question.title || "Untitled Question"}
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {data.question.type.replace("_", " ")}
            </Badge>
            {data.question.required && (
              <Badge variant="destructive" className="text-xs">
                Required
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3"
      />
    </>
  );
}

export const QuestionNode = memo(QuestionNodeComponent);
```

### Edges Condicionais
```tsx
// components/flow/ConditionalEdge.tsx
import { memo } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
} from "reactflow";
import { Badge } from "@/components/ui/badge";

export interface ConditionalEdgeData {
  condition?: string;
  value?: string;
}

function ConditionalEdgeComponent({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
}: EdgeProps<ConditionalEdgeData>) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke: data?.condition ? "#3b82f6" : "#94a3b8",
          strokeWidth: 2,
        }}
      />
      
      {data?.condition && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
          >
            <Badge variant="outline" className="text-xs bg-white">
              {data.condition}: {data.value}
            </Badge>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

export const ConditionalEdge = memo(ConditionalEdgeComponent);
```

### Logica de Salto (Jump Logic)
```tsx
// components/flow/JumpLogic.tsx
import { useCallback } from "react";
import {
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from "reactflow";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface JumpLogicConfig {
  sourceQuestionId: string;
  condition: {
    operator: "equals" | "not_equals" | "contains";
    value: string;
  };
  targetQuestionId: string;
}

export function useJumpLogic(questions: Question[]) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const addJump = useCallback(
    (config: JumpLogicConfig) => {
      const newEdge: Edge = {
        id: `jump-${config.sourceQuestionId}-${config.targetQuestionId}`,
        source: config.sourceQuestionId,
        target: config.targetQuestionId,
        type: "conditional",
        data: {
          condition: config.condition.operator,
          value: config.condition.value,
        },
        animated: true,
        style: { stroke: "#3b82f6", strokeWidth: 2 },
      };

      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  const removeJump = useCallback(
    (sourceId: string, targetId: string) => {
      setEdges((eds) =>
        eds.filter(
          (e) => !(e.source === sourceId && e.target === targetId)
        )
      );
    },
    [setEdges]
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    addJump,
    removeJump,
  };
}

// UI para configurar jump
export function JumpLogicEditor({
  question,
  questions,
  onSave,
}: {
  question: Question;
  questions: Question[];
  onSave: (config: JumpLogicConfig) => void;
}) {
  return (
    <div className="space-y-4">
      <h4 className="font-medium">Jump Logic</h4>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">If answer</span>
        
        <Select defaultValue="equals">
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="equals">equals</SelectItem>
            <SelectItem value="not_equals">not equals</SelectItem>
            <SelectItem value="contains">contains</SelectItem>
          </SelectContent>
        </Select>

        <input
          type="text"
          placeholder="Value"
          className="flex h-10 w-[140px] rounded-md border border-input bg-background px-3 py-2 text-sm"
        />

        <span className="text-sm text-muted-foreground">jump to</span>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select question" />
          </SelectTrigger>
          <SelectContent>
            {questions
              .filter((q) => q.id !== question.id)
              .map((q) => (
                <SelectItem key={q.id} value={q.id}>
                  {q.title || "Untitled"}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
```

## Checklist de Verificacao
- [ ] ReactFlowProvider envolvendo componente
- [ ] nodeTypes definido com todos os tipos
- [ ] Background, Controls e MiniMap adicionados
- [ ] Nodes personalizados criados
- [ ] Edges condicionais implementados
- [ ] Logica de salto configuravel
- [ ] Eventos onNodeClick e onConnect
- [ ] applyNodeChanges e applyEdgeChanges usados

## Referencias Uteis
- [React Flow Documentation](https://reactflow.dev/)
[React Flow Examples](https://reactflow.dev/docs/examples/overview/)
[Custom Nodes](https://reactflow.dev/docs/guides/custom-nodes/)
