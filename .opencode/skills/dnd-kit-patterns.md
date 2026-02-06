# Dnd Kit Patterns

## Descricao
Padroes para implementacao de drag and drop usando @dnd-kit no Survey Builder.

## Regras Obrigatorias

### DO
- ✅ Usar DndContext como provedor de contexto
- ✅ Implementar sensores (mouse, touch, keyboard)
- ✅ Usar useDraggable e useDroppable
- ✅ Adicionar visual feedback durante drag
- ✅ Implementar reordering com SortableContext
- ✅ Usar modifiers para restricoes de movimento

### DON'T
- ❌ Usar Dnd sem DndContext
- ❌ Esquecer de configurar sensores
- ❌ Ignorar acessibilidade (keyboard, screen reader)
- ❌ Permitir drop em locais invalidos
- ❌ Esquecer de cleanup no unmount

## Exemplos de Codigo

### Setup Basico
```tsx
// components/dnd/DragAndDropProvider.tsx
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { ReactNode, useState } from "react";

interface DragAndDropProviderProps {
  children: ReactNode;
  onDragEnd: (event: DragEndEvent) => void;
}

export function DragAndDropProvider({
  children,
  onDragEnd,
}: DragAndDropProviderProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    onDragEnd(event);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      {children}
      <DragOverlay>
        {activeId ? <DragOverlayItem id={activeId} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
```

### Draggable Item
```tsx
// components/dnd/DraggableQuestion.tsx
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface DraggableQuestionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function DraggableQuestion({
  id,
  children,
  className,
}: DraggableQuestionProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        type: "question",
        id,
      },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-2 group",
        isDragging && "opacity-50",
        className
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-muted"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
```

### Droppable Area
```tsx
// components/dnd/DroppableCanvas.tsx
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface DroppableCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function DroppableCanvas({ children, className }: DroppableCanvasProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "canvas",
    data: {
      type: "canvas",
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "min-h-[500px] p-4 transition-colors",
        isOver && "bg-primary/10 border-2 border-dashed border-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
```

### Sortable List (Reordering)
```tsx
// components/dnd/SortableQuestionList.tsx
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface Question {
  id: string;
  title: string;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-2 p-3 bg-white border rounded-lg shadow-sm",
        isDragging && "opacity-50 shadow-lg z-50"
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

interface SortableQuestionListProps {
  items: Question[];
  onReorder: (items: Question[]) => void;
  renderItem: (item: Question) => React.ReactNode;
}

export function SortableQuestionList({
  items,
  onReorder,
  renderItem,
}: SortableQuestionListProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      onReorder(arrayMove(items, oldIndex, newIndex));
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(e) => setActiveId(e.active.id as string)}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              {renderItem(item)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
```

### Drag from Sidebar to Canvas
```tsx
// components/dnd/DraggableComponent.tsx
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { ComponentType } from "lucide-react";

interface DraggableComponentProps {
  type: string;
  label: string;
  icon: React.ReactNode;
}

export function DraggableComponent({
  type,
  label,
  icon,
}: DraggableComponentProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `new-${type}`,
    data: {
      type: "new-component",
      componentType: type,
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border bg-white cursor-grab",
        "hover:border-primary hover:shadow-md transition-all",
        isDragging && "opacity-50"
      )}
    >
      <div className="p-2 rounded bg-muted">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
}

// Usage in Sidebar
export function ComponentSidebar() {
  const components = [
    { type: "text", label: "Text Question", icon: <TypeIcon /> },
    { type: "multiple_choice", label: "Multiple Choice", icon: <CircleIcon /> },
    { type: "checkbox", label: "Checkbox", icon: <SquareIcon /> },
  ];

  return (
    <div className="p-4 space-y-2">
      <h3 className="font-semibold mb-4">Components</h3>
      {components.map((component) => (
        <DraggableComponent key={component.type} {...component} />
      ))}
    </div>
  );
}
```

### Multiple Containers
```tsx
// components/dnd/MultipleContainers.tsx
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";

interface Container {
  id: string;
  title: string;
  items: string[];
}

export function MultipleContainers() {
  const [containers, setContainers] = useState<Container[]>([
    { id: "todo", title: "To Do", items: ["1", "2", "3"] },
    { id: "doing", title: "Doing", items: ["4"] },
    { id: "done", title: "Done", items: ["5"] },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    const overId = over?.id;

    if (!overId || active.id === overId) return;

    const activeContainer = findContainer(active.id as string);
    const overContainer = findContainer(overId as string);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    setContainers((prev) => {
      const activeItems = prev.find((c) => c.id === activeContainer)!.items;
      const overItems = prev.find((c) => c.id === overContainer)!.items;
      const activeIndex = activeItems.indexOf(active.id as string);
      const overIndex = overItems.indexOf(overId as string);

      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return prev.map((container) => {
        if (container.id === activeContainer) {
          return {
            ...container,
            items: container.items.filter((item) => item !== active.id),
          };
        }
        if (container.id === overContainer) {
          return {
            ...container,
            items: [
              ...container.items.slice(0, newIndex),
              active.id as string,
              ...container.items.slice(newIndex, container.items.length),
            ],
          };
        }
        return container;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeContainer = findContainer(active.id as string);
    const overContainer = findContainer(over?.id as string);

    if (
      activeContainer &&
      overContainer &&
      activeContainer === overContainer
    ) {
      const activeIndex = containers
        .find((c) => c.id === activeContainer)!
        .items.indexOf(active.id as string);
      const overIndex = containers
        .find((c) => c.id === overContainer)!
        .items.indexOf(over?.id as string);

      if (activeIndex !== overIndex) {
        setContainers((prev) =>
          prev.map((container) => {
            if (container.id === activeContainer) {
              return {
                ...container,
                items: arrayMove(container.items, activeIndex, overIndex),
              };
            }
            return container;
          })
        );
      }
    }
  };

  const findContainer = (id: string) => {
    if (containers.find((c) => c.id === id)) return id;
    return containers.find((c) => c.items.includes(id))?.id;
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {/* Render containers */}
    </DndContext>
  );
}
```

## Checklist de Verificacao
- [ ] DndContext configurado com sensores
- [ ] useDraggable em itens arrastaveis
- [ ] useDroppable em areas de drop
- [ ] SortableContext para listas ordenaveis
- [ ] Visual feedback durante drag
- [ ] Modifiers configurados (restricoes)
- [ ] DragOverlay para preview
- [ ] Keyboard navigation funcionando

## Referencias Uteis
- [@dnd-kit Documentation](https://docs.dndkit.com/)
[@dnd-kit Sortable](https://docs.dndkit.com/presets/sortable)
[@dnd-kit Examples](https://docs.dndkit.com/introduction/getting-started#examples)
