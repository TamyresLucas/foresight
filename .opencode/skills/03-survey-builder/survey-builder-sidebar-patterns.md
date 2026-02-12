# Survey Builder Sidebar Patterns

## Descricao
Padroes para implementacao da sidebar do Survey Builder, incluindo navegacao, componentes de UI e organizacao.

## Regras Obrigatorias

### DO
- ✅ Usar layout fixo com width consistente
- ✅ Implementar secoes colapsaveis
- ✅ Adicionar draggables para componentes
- ✅ Usar iconografia consistente
- ✅ Implementar busca/filtro
- ✅ Responsivo (mobile drawer)

### DON'T
- ❌ Sidebar com scroll desnecessario
- ❌ Esquecer de espacamentos consistentes
- ❌ Misturar componentes com configuracoes
- ❌ Ignorar acessibilidade
- ❌ Deixar sem feedback visual

## Exemplos de Codigo

### Sidebar Principal
```tsx
// components/survey/Sidebar.tsx
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPalette } from "./ComponentPalette";
import { QuestionList } from "./QuestionList";
import { SurveySettings } from "./SurveySettings";
import { PanelLeft, Layers, Settings, Puzzle } from "lucide-react";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ className, collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-background border-r transition-all duration-300",
        collapsed ? "w-16" : "w-80",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <h2 className="font-semibold text-lg">Builder</h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("ml-auto", collapsed && "mx-auto")}
        >
          <PanelLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      {!collapsed && (
        <div className="flex-1 overflow-auto">
          <Accordion type="multiple" defaultValue={["components"]}>
            {/* Components Section */}
            <AccordionItem value="components">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Puzzle className="h-4 w-4" />
                  <span>Components</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <ComponentPalette />
              </AccordionContent>
            </AccordionItem>

            {/* Questions Section */}
            <AccordionItem value="questions">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>Questions</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <QuestionList />
              </AccordionContent>
            </AccordionItem>

            {/* Settings Section */}
            <AccordionItem value="settings">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <SurveySettings />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}

      {/* Collapsed Icons */}
      {collapsed && (
        <div className="flex flex-col items-center py-4 space-y-4">
          <Button variant="ghost" size="icon">
            <Puzzle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Layers className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      )}
    </aside>
  );
}
```

### Component Palette
```tsx
// components/survey/ComponentPalette.tsx
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import {
  Type,
  CircleDot,
  CheckSquare,
  List,
  Star,
  Calendar,
  Upload,
  AlignLeft,
} from "lucide-react";

const components = [
  { type: "text", label: "Text", icon: Type, description: "Single line text" },
  {
    type: "paragraph",
    label: "Paragraph",
    icon: AlignLeft,
    description: "Multi line text",
  },
  {
    type: "multiple_choice",
    label: "Multiple Choice",
    icon: CircleDot,
    description: "Select one option",
  },
  {
    type: "checkbox",
    label: "Checkboxes",
    icon: CheckSquare,
    description: "Select multiple",
  },
  {
    type: "dropdown",
    label: "Dropdown",
    icon: List,
    description: "Compact selection",
  },
  {
    type: "rating",
    label: "Rating",
    icon: Star,
    description: "Rate 1-5 stars",
  },
  {
    type: "date",
    label: "Date",
    icon: Calendar,
    description: "Date picker",
  },
  {
    type: "file",
    label: "File Upload",
    icon: Upload,
    description: "Upload files",
  },
];

function DraggableComponent({
  type,
  label,
  icon: Icon,
}: {
  type: string;
  label: string;
  icon: React.ElementType;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `component-${type}`,
    data: { type: "new-component", componentType: type },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border bg-card cursor-grab",
        "hover:border-primary hover:shadow-sm transition-all",
        isDragging && "opacity-50"
      )}
    >
      <div className="p-2 rounded-md bg-muted">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export function ComponentPalette() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {components.map((component) => (
        <DraggableComponent key={component.type} {...component} />
      ))}
    </div>
  );
}
```

### Question List
```tsx
// components/survey/QuestionList.tsx
import { useSurveyStore } from "@/stores/surveyStore";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Eye, GripVertical } from "lucide-react";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableQuestionItem({
  question,
  index,
  isSelected,
  onSelect,
}: {
  question: Question;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={onSelect}
      className={cn(
        "flex items-center gap-2 p-3 rounded-lg border cursor-pointer",
        "hover:bg-accent transition-colors",
        isSelected && "border-primary bg-primary/5",
        isDragging && "opacity-50 shadow-lg"
      )}
    >
      <div {...attributes} {...listeners} className="cursor-grab">
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">
          {index + 1}. {question.title || "Untitled"}
        </p>
        <p className="text-xs text-muted-foreground">{question.type}</p>
      </div>
      {question.required && (
        <Badge variant="secondary" className="text-xs">
          Required
        </Badge>
      )}
    </div>
  );
}

export function QuestionList() {
  const { questions, selectedQuestionId, selectQuestion } = useSurveyStore();

  if (questions.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Eye className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No questions yet</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px]">
      <SortableContext
        items={questions.map((q) => q.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2 pr-4">
          {questions.map((question, index) => (
            <SortableQuestionItem
              key={question.id}
              question={question}
              index={index}
              isSelected={question.id === selectedQuestionId}
              onSelect={() => selectQuestion(question.id)}
            />
          ))}
        </div>
      </SortableContext>
    </ScrollArea>
  );
}
```

### Survey Settings
```tsx
// components/survey/SurveySettings.tsx
import { useSurveyStore } from "@/stores/surveyStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SurveySettings() {
  const { survey, updateSurvey } = useSurveyStore();

  if (!survey) return null;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Survey Title</Label>
        <Input
          value={survey.title}
          onChange={(e) => updateSurvey({ title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={survey.description || ""}
          onChange={(e) => updateSurvey({ description: e.target.value })}
          placeholder="Survey description"
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Allow Multiple Responses</Label>
        <Switch
          checked={survey.settings.allowMultipleResponses}
          onCheckedChange={(checked) =>
            updateSurvey({
              settings: { ...survey.settings, allowMultipleResponses: checked },
            })
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Show Progress Bar</Label>
        <Switch
          checked={survey.settings.showProgressBar}
          onCheckedChange={(checked) =>
            updateSurvey({
              settings: { ...survey.settings, showProgressBar: checked },
            })
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Shuffle Questions</Label>
        <Switch
          checked={survey.settings.shuffleQuestions}
          onCheckedChange={(checked) =>
            updateSurvey({
              settings: { ...survey.settings, shuffleQuestions: checked },
            })
          }
        />
      </div>
    </div>
  );
}
```

## Mobile Drawer
```tsx
// components/survey/MobileSidebar.tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-80">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Survey Builder</SheetTitle>
        </SheetHeader>
        <div className="h-[calc(100vh-80px)]">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

## Checklist de Verificacao
- [ ] Layout fixo com width consistente
- [ ] Secoes colapsaveis
- [ ] Componentes draggable
- [ ] Question list sortable
- [ ] Survey settings form
- [ ] Toggle collapse
- [ ] Mobile drawer
- [ ] Iconografia consistente

## Referencias Uteis
- [shadcn Accordion](https://ui.shadcn.com/docs/components/accordion)
[shadcn Sheet](https://ui.shadcn.com/docs/components/sheet)
[@dnd-kit/core](https://docs.dndkit.com/)
