# Survey Builder Patterns

## Descrição
Padrões específicos para componentes do Survey Builder no Foresight, incluindo gerenciamento de estado, preview e validação.

## Regras Obrigatórias

### DO
- ✅ Criar componentes especializados: QuestionCard, Canvas
- ✅ Usar gerenciamento de estado centralizado (Zustand/Context)
- ✅ Implementar preview em tempo real
- ✅ Validar questões antes de salvar
- ✅ Implementar Undo/Redo
- ✅ Exportar dados em múltiplos formatos

### DON'T
- ❌ Acoplar lógica de survey com UI
- ❌ Perder estado durante navegação
- ❌ Validar apenas no backend
- ❌ Ignorar estados de erro
- ❌ Usar localStorage sem considerar limite de dados

## Exemplos de Código

### QuestionCard Component
```tsx
// components/survey/QuestionCard.tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Copy } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onMove: (direction: 'up' | 'down') => void;
}

export function QuestionCard({
  question,
  index,
  isActive,
  onSelect,
  onDelete,
  onDuplicate,
  onMove,
}: QuestionCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200",
        isActive ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
      )}
      onClick={onSelect}
    >
      <CardHeader className="flex flex-row items-center gap-2">
        <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
        <span className="text-sm font-medium text-muted-foreground">
          Q{index + 1}
        </span>
        <h4 className="flex-1 font-semibold">{question.title || 'Untitled Question'}</h4>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardBody>
        {question.type === 'multiple_choice' && (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <div
                key={option.id}
                className="flex items-center gap-2 p-2 rounded border"
              >
                <div className="h-4 w-4 rounded-full border-2" />
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        )}
        {question.type === 'text' && (
          <div className="p-2 border rounded text-muted-foreground">
            Text answer...
          </div>
        )}
      </CardBody>
      
      {isActive && (
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onMove('up');
            }}
            disabled={index === 0}
          >
            Move Up
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onMove('down');
            }}
          >
            Move Down
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
```

### Gerenciamento de Estado
```tsx
// stores/surveyStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface SurveyState {
  survey: Survey | null;
  selectedQuestionId: string | null;
  history: Survey[];
  historyIndex: number;
  
  // Actions
  setSurvey: (survey: Survey) => void;
  addQuestion: (type: QuestionType) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  duplicateQuestion: (id: string) => void;
  moveQuestion: (id: string, direction: 'up' | 'down') => void;
  selectQuestion: (id: string | null) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

export const useSurveyStore = create<SurveyState>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          survey: null,
          selectedQuestionId: null,
          history: [],
          historyIndex: -1,
          
          setSurvey: (survey) => {
            set((state) => {
              state.survey = survey;
              state.history = [survey];
              state.historyIndex = 0;
            });
          },
          
          addQuestion: (type) => {
            const newQuestion: Question = {
              id: generateId(),
              type,
              title: '',
              required: false,
              options: type === 'multiple_choice' ? [
                { id: generateId(), label: 'Option 1' },
              ] : undefined,
            };
            
            set((state) => {
              if (state.survey) {
                state.survey.questions.push(newQuestion);
                state.selectedQuestionId = newQuestion.id;
                addToHistory(state);
              }
            });
          },
          
          updateQuestion: (id, updates) => {
            set((state) => {
              if (state.survey) {
                const question = state.survey.questions.find((q) => q.id === id);
                if (question) {
                  Object.assign(question, updates);
                  addToHistory(state);
                }
              }
            });
          },
          
          deleteQuestion: (id) => {
            set((state) => {
              if (state.survey) {
                state.survey.questions = state.survey.questions.filter(
                  (q) => q.id !== id
                );
                if (state.selectedQuestionId === id) {
                  state.selectedQuestionId = null;
                }
                addToHistory(state);
              }
            });
          },
          
          duplicateQuestion: (id) => {
            set((state) => {
              if (state.survey) {
                const question = state.survey.questions.find((q) => q.id === id);
                if (question) {
                  const duplicate = {
                    ...question,
                    id: generateId(),
                    options: question.options?.map((opt) => ({
                      ...opt,
                      id: generateId(),
                    })),
                  };
                  const index = state.survey.questions.findIndex((q) => q.id === id);
                  state.survey.questions.splice(index + 1, 0, duplicate);
                  state.selectedQuestionId = duplicate.id;
                  addToHistory(state);
                }
              }
            });
          },
          
          moveQuestion: (id, direction) => {
            set((state) => {
              if (state.survey) {
                const index = state.survey.questions.findIndex((q) => q.id === id);
                const newIndex = direction === 'up' ? index - 1 : index + 1;
                
                if (newIndex >= 0 && newIndex < state.survey.questions.length) {
                  const [moved] = state.survey.questions.splice(index, 1);
                  state.survey.questions.splice(newIndex, 0, moved);
                  addToHistory(state);
                }
              }
            });
          },
          
          selectQuestion: (id) => {
            set((state) => {
              state.selectedQuestionId = id;
            });
          },
          
          undo: () => {
            set((state) => {
              if (state.historyIndex > 0) {
                state.historyIndex--;
                state.survey = state.history[state.historyIndex];
              }
            });
          },
          
          redo: () => {
            set((state) => {
              if (state.historyIndex < state.history.length - 1) {
                state.historyIndex++;
                state.survey = state.history[state.historyIndex];
              }
            });
          },
          
          canUndo: () => {
            const state = get();
            return state.historyIndex > 0;
          },
          
          canRedo: () => {
            const state = get();
            return state.historyIndex < state.history.length - 1;
          },
        }),
        {
          name: 'survey-store',
          partialize: (state) => ({ survey: state.survey }),
        }
      )
    )
  )
);

function addToHistory(state: SurveyState) {
  // Remove future history if we're not at the end
  state.history = state.history.slice(0, state.historyIndex + 1);
  state.history.push(JSON.parse(JSON.stringify(state.survey)));
  state.historyIndex++;
  
  // Limit history size
  if (state.history.length > 50) {
    state.history.shift();
    state.historyIndex--;
  }
}
```

### Canvas Component
```tsx
// components/survey/Canvas.tsx
import { useSurveyStore } from '@/stores/surveyStore';
import { QuestionCard } from './QuestionCard';
import { EmptyState } from './EmptyState';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Canvas() {
  const {
    survey,
    selectedQuestionId,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    duplicateQuestion,
    moveQuestion,
    selectQuestion,
  } = useSurveyStore();

  if (!survey) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">{survey.title || 'Untitled Survey'}</h2>
        <Button onClick={() => addQuestion('multiple_choice')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Question
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {survey.questions.length === 0 ? (
          <EmptyState
            title="No questions yet"
            description="Add your first question to get started"
            action={
              <Button onClick={() => addQuestion('multiple_choice')}>
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            }
          />
        ) : (
          survey.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              isActive={question.id === selectedQuestionId}
              onSelect={() => selectQuestion(question.id)}
              onDelete={() => deleteQuestion(question.id)}
              onDuplicate={() => duplicateQuestion(question.id)}
              onMove={(direction) => moveQuestion(question.id, direction)}
            />
          ))
        )}
      </div>
    </div>
  );
}
```

### Preview em Tempo Real
```tsx
// components/survey/Preview.tsx
import { useSurveyStore } from '@/stores/surveyStore';
import { PreviewQuestion } from './PreviewQuestion';

export function Preview() {
  const survey = useSurveyStore((state) => state.survey);
  
  if (!survey) return null;

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold mb-2">{survey.title}</h1>
        {survey.description && (
          <p className="text-muted-foreground mb-6">{survey.description}</p>
        )}
        
        <div className="space-y-6">
          {survey.questions.map((question, index) => (
            <PreviewQuestion
              key={question.id}
              question={question}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Validação de Questões
```tsx
// utils/validation.ts
export interface ValidationError {
  field: string;
  message: string;
}

export function validateQuestion(question: Question): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!question.title?.trim()) {
    errors.push({
      field: 'title',
      message: 'Question title is required',
    });
  }
  
  if (question.type === 'multiple_choice') {
    if (!question.options || question.options.length < 2) {
      errors.push({
        field: 'options',
        message: 'At least 2 options are required',
      });
    }
    
    question.options?.forEach((option, index) => {
      if (!option.label?.trim()) {
        errors.push({
          field: `options[${index}].label`,
          message: `Option ${index + 1} label is required`,
        });
      }
    });
  }
  
  if (question.type === 'rating') {
    if (!question.maxRating || question.maxRating < 2 || question.maxRating > 10) {
      errors.push({
        field: 'maxRating',
        message: 'Rating scale must be between 2 and 10',
      });
    }
  }
  
  return errors;
}

export function validateSurvey(survey: Survey): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!survey.title?.trim()) {
    errors.push({
      field: 'title',
      message: 'Survey title is required',
    });
  }
  
  if (survey.questions.length === 0) {
    errors.push({
      field: 'questions',
      message: 'At least one question is required',
    });
  }
  
  survey.questions.forEach((question, index) => {
    const questionErrors = validateQuestion(question);
    questionErrors.forEach((error) => {
      errors.push({
        field: `questions[${index}].${error.field}`,
        message: `Question ${index + 1}: ${error.message}`,
      });
    });
  });
  
  return errors;
}
```

## Checklist de Verificação
- [ ] QuestionCard componentizado e reutilizável
- [ ] Estado gerenciado com Zustand/Context
- [ ] Preview atualiza em tempo real
- [ ] Validação acontece no frontend
- [ ] Undo/Redo implementado
- [ ] Dados exportáveis em JSON/CSV
- [ ] Erros de validação são exibidos
- [ ] Estado persistido em localStorage

## Referências Úteis
- [Zustand](https://github.com/pmndrs/zustand)
[Immer](https://immerjs.github.io/immer/)
[Zod](https://zod.dev/) - Validação de schemas
[React DnD](https://react-dnd.github.io/react-dnd/) - Drag and drop
