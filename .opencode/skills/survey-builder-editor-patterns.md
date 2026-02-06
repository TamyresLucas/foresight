# Survey Builder Editor Patterns

## Descrição
Padrões para o painel de edição de questões no Survey Builder, incluindo formulários dinâmicos, validação e preview.

## Regras Obrigatórias

### DO
- ✅ Usar formulários reativos com React Hook Form
- ✅ Atualizar preview em tempo real
- ✅ Validar campos obrigatórios
- ✅ Suportar todos os tipos de questão
- ✅ Implementar tabs para organização
- ✅ Auto-save automático

### DON'T
- ❌ Editar questão sem validação
- ❌ Perder dados ao trocar de questão
- ❌ Mostrar todos os campos de uma vez
- ❌ Ignorar estados de loading
- ❌ Duplicar lógica entre tipos

## Exemplos de Código

### Question Editor Container
```tsx
// components/survey/QuestionEditor.tsx
import { useSurveyStore } from "@/stores/surveyStore";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { QuestionTypeSelector } from "./QuestionTypeSelector";
import { OptionsEditor } from "./OptionsEditor";
import { useEffect } from "react";
import { debounce } from "lodash";

const questionSchema = z.object({
  title: z.string().min(1, "Question title is required"),
  description: z.string().optional(),
  type: z.enum(["text", "multiple_choice", "rating", "checkbox", "dropdown"]),
  required: z.boolean(),
  options: z.array(
    z.object({
      id: z.string(),
      label: z.string().min(1, "Option label is required"),
      value: z.string(),
    })
  ),
  settings: z.object({
    randomize: z.boolean(),
    allowMultiple: z.boolean(),
    maxChoices: z.number().optional(),
  }),
});

type QuestionFormData = z.infer<typeof questionSchema>;

export function QuestionEditor() {
  const { selectedQuestion, updateQuestion } = useSurveyStore();

  const form = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "text",
      required: false,
      options: [],
      settings: {
        randomize: false,
        allowMultiple: false,
      },
    },
  });

  // Sync form with selected question
  useEffect(() => {
    if (selectedQuestion) {
      form.reset({
        title: selectedQuestion.title,
        description: selectedQuestion.description || "",
        type: selectedQuestion.type,
        required: selectedQuestion.required,
        options: selectedQuestion.options || [],
        settings: selectedQuestion.settings || {
          randomize: false,
          allowMultiple: false,
        },
      });
    }
  }, [selectedQuestion, form]);

  // Auto-save on change
  const watchedValues = useWatch({ control: form.control });

  useEffect(() => {
    if (!selectedQuestion) return;

    const debouncedSave = debounce((data: QuestionFormData) => {
      updateQuestion(selectedQuestion.id, data);
    }, 500);

    const subscription = form.watch((data) => {
      if (data) {
        debouncedSave(data as QuestionFormData);
      }
    });

    return () => {
      subscription.unsubscribe();
      debouncedSave.flush();
    };
  }, [selectedQuestion, form, updateQuestion]);

  if (!selectedQuestion) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select a question to edit
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-6">
      <Form {...form}>
        <form className="space-y-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Type</FormLabel>
                    <FormControl>
                      <QuestionTypeSelector
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your question"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Add additional context"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="required"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Required</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="options" className="space-y-4 mt-4">
              {(form.watch("type") === "multiple_choice" ||
                form.watch("type") === "dropdown" ||
                form.watch("type") === "checkbox") && (
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer Options</FormLabel>
                      <FormControl>
                        <OptionsEditor
                          options={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="settings.randomize"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel>Randomize Options</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="settings.allowMultiple"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel>Allow Multiple Selections</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}
```

### Options Editor
```tsx
// components/survey/OptionsEditor.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GripVertical, Trash2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  label: string;
  value: string;
}

interface OptionsEditorProps {
  options: Option[];
  onChange: (options: Option[]) => void;
}

export function OptionsEditor({ options, onChange }: OptionsEditorProps) {
  const addOption = () => {
    const newOption: Option = {
      id: Math.random().toString(36).substr(2, 9),
      label: `Option ${options.length + 1}`,
      value: `option_${options.length + 1}`,
    };
    onChange([...options, newOption]);
  };

  const updateOption = (index: number, updates: Partial<Option>) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], ...updates };
    onChange(newOptions);
  };

  const removeOption = (index: number) => {
    onChange(options.filter((_, i) => i !== index));
  };

  const moveOption = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= options.length) return;

    const newOptions = [...options];
    [newOptions[index], newOptions[newIndex]] = [
      newOptions[newIndex],
      newOptions[index],
    ];
    onChange(newOptions);
  };

  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <div
          key={option.id}
          className="flex items-center gap-2 group"
        >
          <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />

          <Input
            value={option.label}
            onChange={(e) =>
              updateOption(index, { label: e.target.value })
            }
            placeholder={`Option ${index + 1}`}
            className="flex-1"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeOption(index)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={addOption}
        className="w-full mt-2"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Option
      </Button>
    </div>
  );
}
```

### Question Type Selector
```tsx
// components/survey/QuestionTypeSelector.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Type,
  CircleDot,
  CheckSquare,
  List,
  Star,
  AlignLeft,
  Calendar,
  Upload,
} from "lucide-react";

const questionTypes = [
  { value: "text", label: "Text Answer", icon: AlignLeft },
  { value: "multiple_choice", label: "Multiple Choice", icon: CircleDot },
  { value: "checkbox", label: "Checkboxes", icon: CheckSquare },
  { value: "dropdown", label: "Dropdown", icon: List },
  { value: "rating", label: "Rating Scale", icon: Star },
  { value: "date", label: "Date", icon: Calendar },
  { value: "file", label: "File Upload", icon: Upload },
];

interface QuestionTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function QuestionTypeSelector({
  value,
  onChange,
}: QuestionTypeSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select question type" />
      </SelectTrigger>
      <SelectContent>
        {questionTypes.map((type) => {
          const Icon = type.icon;
          return (
            <SelectItem key={type.value} value={type.value}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {type.label}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
```

## Checklist de Verificação
- [ ] Form reativo com React Hook Form
- [ ] Validação Zod implementada
- [ ] Auto-save com debounce
- [ ] Tabs organizando campos
- [ ] Preview em tempo real
- [ ] Suporte a todos os tipos
- [ ] Options editor dinâmico
- [ ] Type selector visual

## Referências Úteis
- [React Hook Form](https://react-hook-form.com/)
[Zod](https://zod.dev/)
[shadcn Tabs](https://ui.shadcn.com/docs/components/tabs)
[Lodash Debounce](https://lodash.com/docs/4.17.15#debounce)
