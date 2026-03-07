# Survey Builder Logic Patterns

## Descrição
Padrões para lógica de negócio do Survey Builder, incluindo stores Zustand, validação e operações CRUD.

## Regras Obrigatórias

### DO
- ✅ Usar Zustand para gerenciamento de estado global
- ✅ Implementar actions atomicas e previsiveis
- ✅ Adicionar persistencia de estado
- ✅ Validar dados antes de salvar
- ✅ Suportar undo/redo
- ✅ Usar Immer para atualizacoes imutaveis

### DON'T
- ❌ Usar useState para estado global
- ❌ Mutar estado diretamente
- ❌ Esquecer de validar dados
- ❌ Perder historico de alteracoes
- ❌ Acoplar logica com UI

## Exemplos de Codigo

### Zustand Store
```typescript
// stores/surveyStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Question {
  id: string;
  type: "text" | "multiple_choice" | "rating" | "checkbox" | "dropdown";
  title: string;
  description?: string;
  required: boolean;
  options?: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  settings?: {
    randomize?: boolean;
    allowMultiple?: boolean;
    maxChoices?: number;
  };
}

interface Survey {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  settings: {
    allowMultipleResponses: boolean;
    showProgressBar: boolean;
    shuffleQuestions: boolean;
  };
}

interface SurveyState {
  // State
  survey: Survey | null;
  selectedQuestionId: string | null;
  isLoading: boolean;
  error: string | null;
  
  // History for undo/redo
  history: Survey[];
  historyIndex: number;
  
  // Actions
  setSurvey: (survey: Survey) => void;
  createSurvey: (title: string) => void;
  updateSurvey: (updates: Partial<Survey>) => void;
  
  // Question actions
  addQuestion: (type: Question["type"]) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  duplicateQuestion: (id: string) => void;
  moveQuestion: (id: string, direction: "up" | "down") => void;
  reorderQuestions: (startIndex: number, endIndex: number) => void;
  selectQuestion: (id: string | null) => void;
  
  // History actions
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  // Validation
  validateSurvey: () => { valid: boolean; errors: string[] };
  validateQuestion: (id: string) => { valid: boolean; errors: string[] };
  
  // Export
  exportSurvey: () => string;
  importSurvey: (json: string) => void;
}

export const useSurveyStore = create<SurveyState>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          survey: null,
          selectedQuestionId: null,
          isLoading: false,
          error: null,
          history: [],
          historyIndex: -1,
          
          setSurvey: (survey) => {
            set((state) => {
              state.survey = survey;
              addToHistory(state);
            });
          },
          
          createSurvey: (title) => {
            const newSurvey: Survey = {
              id: generateId(),
              title,
              questions: [],
              settings: {
                allowMultipleResponses: false,
                showProgressBar: true,
                shuffleQuestions: false,
              },
            };
            
            set((state) => {
              state.survey = newSurvey;
              state.selectedQuestionId = null;
              addToHistory(state);
            });
          },
          
          updateSurvey: (updates) => {
            set((state) => {
              if (state.survey) {
                Object.assign(state.survey, updates);
                addToHistory(state);
              }
            });
          },
          
          addQuestion: (type) => {
            const newQuestion: Question = {
              id: generateId(),
              type,
              title: "",
              required: false,
              options:
                type === "multiple_choice" ||
                type === "checkbox" ||
                type === "dropdown"
                  ? [
                      { id: generateId(), label: "Option 1", value: "option_1" },
                      { id: generateId(), label: "Option 2", value: "option_2" },
                    ]
                  : undefined,
              settings: {},
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
                    title: `${question.title} (Copy)`,
                    options: question.options?.map((opt) => ({
                      ...opt,
                      id: generateId(),
                    })),
                  };
                  const index = state.survey.questions.findIndex(
                    (q) => q.id === id
                  );
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
                const newIndex = direction === "up" ? index - 1 : index + 1;
                
                if (newIndex >= 0 && newIndex < state.survey.questions.length) {
                  const [moved] = state.survey.questions.splice(index, 1);
                  state.survey.questions.splice(newIndex, 0, moved);
                  addToHistory(state);
                }
              }
            });
          },
          
          reorderQuestions: (startIndex, endIndex) => {
            set((state) => {
              if (state.survey) {
                const [moved] = state.survey.questions.splice(startIndex, 1);
                state.survey.questions.splice(endIndex, 0, moved);
                addToHistory(state);
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
                state.survey = JSON.parse(
                  JSON.stringify(state.history[state.historyIndex])
                );
              }
            });
          },
          
          redo: () => {
            set((state) => {
              if (state.historyIndex < state.history.length - 1) {
                state.historyIndex++;
                state.survey = JSON.parse(
                  JSON.stringify(state.history[state.historyIndex])
                );
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
          
          validateSurvey: () => {
            const state = get();
            const errors: string[] = [];
            
            if (!state.survey) {
              return { valid: false, errors: ["No survey loaded"] };
            }
            
            if (!state.survey.title.trim()) {
              errors.push("Survey title is required");
            }
            
            if (state.survey.questions.length === 0) {
              errors.push("At least one question is required");
            }
            
            state.survey.questions.forEach((q, index) => {
              if (!q.title.trim()) {
                errors.push(`Question ${index + 1} is missing a title`);
              }
              
              if (
                (q.type === "multiple_choice" ||
                  q.type === "checkbox" ||
                  q.type === "dropdown") &&
                (!q.options || q.options.length < 2)
              ) {
                errors.push(`Question ${index + 1} needs at least 2 options`);
              }
            });
            
            return { valid: errors.length === 0, errors };
          },
          
          validateQuestion: (id) => {
            const state = get();
            const errors: string[] = [];
            
            if (!state.survey) {
              return { valid: false, errors: ["No survey loaded"] };
            }
            
            const question = state.survey.questions.find((q) => q.id === id);
            if (!question) {
              return { valid: false, errors: ["Question not found"] };
            }
            
            if (!question.title.trim()) {
              errors.push("Question title is required");
            }
            
            if (
              (question.type === "multiple_choice" ||
                question.type === "checkbox" ||
                question.type === "dropdown") &&
              (!question.options || question.options.length < 2)
            ) {
              errors.push("At least 2 options are required");
            }
            
            question.options?.forEach((opt, index) => {
              if (!opt.label.trim()) {
                errors.push(`Option ${index + 1} label is required`);
              }
            });
            
            return { valid: errors.length === 0, errors };
          },
          
          exportSurvey: () => {
            const state = get();
            return JSON.stringify(state.survey, null, 2);
          },
          
          importSurvey: (json) => {
            try {
              const survey = JSON.parse(json) as Survey;
              set((state) => {
                state.survey = survey;
                state.selectedQuestionId = null;
                addToHistory(state);
              });
            } catch (error) {
              set((state) => {
                state.error = "Invalid survey JSON";
              });
            }
          },
        }),
        {
          name: "survey-store",
          partialize: (state) => ({ survey: state.survey }),
        }
      )
    )
  )
);

function addToHistory(state: SurveyState) {
  state.history = state.history.slice(0, state.historyIndex + 1);
  state.history.push(JSON.parse(JSON.stringify(state.survey)));
  state.historyIndex++;
  
  if (state.history.length > 50) {
    state.history.shift();
    state.historyIndex--;
  }
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
```

### Validacao
```typescript
// utils/validation.ts
import { z } from "zod";

export const optionSchema = z.object({
  id: z.string(),
  label: z.string().min(1, "Option label is required"),
  value: z.string(),
});

export const questionSchema = z.object({
  id: z.string(),
  type: z.enum(["text", "multiple_choice", "rating", "checkbox", "dropdown"]),
  title: z.string().min(1, "Question title is required"),
  description: z.string().optional(),
  required: z.boolean(),
  options: z.array(optionSchema).optional(),
  settings: z
    .object({
      randomize: z.boolean().optional(),
      allowMultiple: z.boolean().optional(),
      maxChoices: z.number().optional(),
    })
    .optional(),
});

export const surveySchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Survey title is required"),
  description: z.string().optional(),
  questions: z.array(questionSchema),
  settings: z.object({
    allowMultipleResponses: z.boolean(),
    showProgressBar: z.boolean(),
    shuffleQuestions: z.boolean(),
  }),
});

export type Option = z.infer<typeof optionSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Survey = z.infer<typeof surveySchema>;
```

### Hooks Customizados
```typescript
// hooks/useSurveyActions.ts
import { useSurveyStore } from "@/stores/surveyStore";
import { useCallback } from "react";

export function useSurveyActions() {
  const store = useSurveyStore();

  const addQuestionAndSelect = useCallback(
    (type: Parameters<typeof store.addQuestion>[0]) => {
      store.addQuestion(type);
    },
    [store]
  );

  const deleteQuestionWithConfirm = useCallback(
    (id: string) => {
      if (window.confirm("Are you sure you want to delete this question?")) {
        store.deleteQuestion(id);
      }
    },
    [store]
  );

  const saveSurvey = useCallback(() => {
    const { valid, errors } = store.validateSurvey();
    if (!valid) {
      alert(`Validation errors:\n${errors.join("\n")}`);
      return false;
    }
    
    const json = store.exportSurvey();
    // Save to API or localStorage
    localStorage.setItem("survey-draft", json);
    return true;
  }, [store]);

  return {
    addQuestionAndSelect,
    deleteQuestionWithConfirm,
    saveSurvey,
  };
}
```

## Checklist de Verificacao
- [ ] Zustand store com Immer
- [ ] Persistencia configurada
- [ ] Undo/redo implementado
- [ ] Validacao Zod
- [ ] Actions atomicas
- [ ] Historico limitado (50 estados)
- [ ] Export/import JSON
- [ ] Hooks customizados

## Referencias Uteis
- [Zustand](https://github.com/pmndrs/zustand)
[Immer](https://immerjs.github.io/immer/)
[Zod](https://zod.dev/)
