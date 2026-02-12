# Survey Builder Canvas Patterns

## Descrição
Padrões e implementação do Canvas (área de trabalho) do Survey Builder, incluindo layout, scroll, zoom e interações.

## Regras Obrigatórias

### DO
- ✅ Implementar canvas centralizado com scroll infinito
- ✅ Adicionar zoom in/out (25% - 200%)
- ✅ Suportar pan (arrastar) quando zoomed
- ✅ Usar grid/fundo padrão para orientação visual
- ✅ Permitir drop de componentes no canvas
- ✅ Implementar seleção de questões

### DON'T
- ❌ Limitar tamanho do canvas a viewport
- ❌ Esquecer de persistir zoom/pan
- ❌ Bloquear scroll nativo sem alternativa
- ❌ Usar overflow hidden sem necessidade
- ❌ Perder contexto visual ao navegar

## Exemplos de Código

### Canvas Container
```tsx
// components/survey/Canvas.tsx
import { useSurveyStore } from "@/stores/surveyStore";
import { QuestionCard } from "./QuestionCard";
import { CanvasToolbar } from "./CanvasToolbar";
import { EmptyState } from "./EmptyState";
import { cn } from "@/lib/utils";
import { useRef, useState, useCallback } from "react";

interface CanvasProps {
  className?: string;
}

export function Canvas({ className }: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const { survey, selectedQuestionId, selectQuestion, questions } = useSurveyStore();

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 25, 200));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - 25, 25));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(100);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      setIsPanning(true);
      setLastMousePos({ x: e.clientX, y: e.clientY });
      e.preventDefault();
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    
    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;
    
    setPan((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
    
    setLastMousePos({ x: e.clientX, y: e.clientY });
  }, [isPanning, lastMousePos]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  if (!survey) {
    return <EmptyState />;
  }

  return (
    <div className={cn("flex flex-col h-full bg-muted/30", className)}>
      <CanvasToolbar
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleResetZoom}
      />
      
      <div
        ref={canvasRef}
        className="flex-1 overflow-auto relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="min-h-[2000px] min-w-[2000px] p-8"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom / 100})`,
            transformOrigin: "top left",
          }}
        >
          <div className="max-w-3xl mx-auto space-y-4">
            {questions.length === 0 ? (
              <EmptyState
                title="No questions yet"
                description="Drag components here or click Add Question"
              />
            ) : (
              questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  isSelected={question.id === selectedQuestionId}
                  onSelect={() => selectQuestion(question.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Canvas Toolbar
```tsx
// components/survey/CanvasToolbar.tsx
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CanvasToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  className?: string;
}

export function CanvasToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  className,
}: CanvasToolbarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 border-b bg-background",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Canvas</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomOut}
          disabled={zoom <= 25}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="sm" onClick={onReset}>
          {zoom}%
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomIn}
          disabled={zoom >= 200}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        <div className="w-px h-4 bg-border mx-2" />

        <Button variant="ghost" size="icon">
          <Grid3X3 className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" onClick={onReset}>
          <Maximize className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
```

### Background Grid Pattern
```tsx
// components/survey/CanvasGrid.tsx
import { cn } from "@/lib/utils";

interface CanvasGridProps {
  showGrid?: boolean;
  className?: string;
}

export function CanvasGrid({ showGrid = true, className }: CanvasGridProps) {
  if (!showGrid) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-30",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    />
  );
}
```

### Empty State
```tsx
// components/survey/EmptyState.tsx
import { Plus, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onAddQuestion?: () => void;
}

export function EmptyState({
  title = "Start building your survey",
  description = "Add your first question to get started",
  onAddQuestion,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <MousePointer2 className="h-8 w-8 text-muted-foreground" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm">{description}</p>
      
      {onAddQuestion && (
        <Button onClick={onAddQuestion}>
          <Plus className="mr-2 h-4 w-4" />
          Add Question
        </Button>
      )}
    </div>
  );
}
```

### Drag and Drop no Canvas
```tsx
// components/survey/DroppableCanvas.tsx
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface DroppableCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function DroppableCanvas({ children, className }: DroppableCanvasProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "canvas-droppable",
    data: {
      type: "canvas",
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "min-h-[2000px] min-w-[2000px] p-8 transition-colors",
        isOver && "bg-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
}
```

## Checklist de Verificação
- [ ] Canvas com scroll infinito
- [ ] Zoom controls funcionando
- [ ] Pan com mouse funciona
- [ ] Grid/background visual
- [ ] Droppable area configurada
- [ ] Empty state implementado
- [ ] Toolbar com controles
- [ ] Estados de zoom persistidos

## Referências Úteis
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
[@dnd-kit/core](https://docs.dndkit.com/)
[Canvas Patterns](https://refactoringui.com/)
