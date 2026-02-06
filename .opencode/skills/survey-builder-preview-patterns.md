# Survey Builder Preview Patterns

## Descricao
Padroes para implementacao do modo preview do Survey Builder, permitindo visualizar como o survey sera respondido.

## Regras Obrigatorias

### DO
- ✅ Renderizar questoes em modo "readonly"
- ✅ Simular navegacao entre paginas
- ✅ Validar respostas antes de avancar
- ✅ Mostrar barra de progresso
- ✅ Permitir tema light/dark
- ✅ Implementar navegacao por teclado

### DON'T
- ❌ Permitir edicao no preview
- ❌ Ignorar validacao de campos obrigatorios
- ❌ Mostrar elementos de edicao
- ❌ Esquecer responsividade
- ❌ Perder estado ao navegar

## Exemplos de Codigo

### Preview Container
```tsx
// components/preview/PreviewContainer.tsx
import { useSurveyStore } from "@/stores/surveyStore";
import { PreviewQuestion } from "./PreviewQuestion";
import { PreviewProgress } from "./PreviewProgress";
import { PreviewNavigation } from "./PreviewNavigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PreviewContainer() {
  const { survey } = useSurveyStore();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!survey) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No survey to preview
      </div>
    );
  }

  const questionsPerPage = 5;
  const totalPages = Math.ceil(survey.questions.length / questionsPerPage);
  const currentQuestions = survey.questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const validatePage = () => {
    const newErrors: Record<string, string> = {};
    
    currentQuestions.forEach((question) => {
      if (question.required && !answers[question.id]) {
        newErrors[question.id] = "This question is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validatePage() && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (errors[questionId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const progress = ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {survey.settings.showProgressBar && (
        <PreviewProgress progress={progress} />
      )}

      <div className="bg-card rounded-lg shadow-sm border p-6 mt-4">
        <h1 className="text-2xl font-bold mb-2">{survey.title}</h1>
        {survey.description && (
          <p className="text-muted-foreground mb-6">{survey.description}</p>
        )}

        <div className="space-y-6">
          {currentQuestions.map((question) => (
            <PreviewQuestion
              key={question.id}
              question={question}
              value={answers[question.id]}
              error={errors[question.id]}
              onChange={(value) => handleAnswer(question.id, value)}
            />
          ))}
        </div>

        <PreviewNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canProceed={Object.keys(errors).length === 0}
          isLastPage={currentPage === totalPages - 1}
        />
      </div>
    </div>
  );
}
```

### Preview Question
```tsx
// components/preview/PreviewQuestion.tsx
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { StarRating } from "./StarRating";

interface PreviewQuestionProps {
  question: {
    id: string;
    type: string;
    title: string;
    description?: string;
    required: boolean;
    options?: Array<{ id: string; label: string; value: string }>;
    settings?: {
      maxRating?: number;
    };
  };
  value: any;
  error?: string;
  onChange: (value: any) => void;
}

export function PreviewQuestion({
  question,
  value,
  error,
  onChange,
}: PreviewQuestionProps) {
  const renderInput = () => {
    switch (question.type) {
      case "text":
        return (
          <Input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your answer"
          />
        );

      case "paragraph":
        return (
          <textarea
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your answer"
          />
        );

      case "multiple_choice":
        return (
          <RadioGroup value={value} onValueChange={onChange}>
            {question.options?.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "checkbox":
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={value?.includes(option.value)}
                  onCheckedChange={(checked) => {
                    const currentValues = value || [];
                    if (checked) {
                      onChange([...currentValues, option.value]);
                    } else {
                      onChange(
                        currentValues.filter((v: string) => v !== option.value)
                      );
                    }
                  }}
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </div>
        );

      case "dropdown":
        return (
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select an option</option>
            {question.options?.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "rating":
        return (
          <StarRating
            value={value || 0}
            max={question.settings?.maxRating || 5}
            onChange={onChange}
          />
        );

      case "date":
        return (
          <Input
            type="date"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        );

      default:
        return <div>Unsupported question type: {question.type}</div>;
    }
  };

  return (
    <div className={cn("space-y-3", error && "border-l-2 border-red-500 pl-4")}>
      <div>
        <Label className="text-base font-semibold">
          {question.title}
          {question.required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </Label>
        {question.description && (
          <p className="text-sm text-muted-foreground mt-1">
            {question.description}
          </p>
        )}
      </div>

      {renderInput()}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
```

### Star Rating Component
```tsx
// components/preview/StarRating.tsx
import { Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  max?: number;
  onChange: (value: number) => void;
  readOnly?: boolean;
}

export function StarRating({
  value,
  max = 5,
  onChange,
  readOnly = false,
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          className={cn(
            "p-1 transition-colors",
            !readOnly && "hover:scale-110 cursor-pointer",
            readOnly && "cursor-default"
          )}
          onMouseEnter={() => !readOnly && setHoverValue(star)}
          onMouseLeave={() => !readOnly && setHoverValue(0)}
          onClick={() => !readOnly && onChange(star)}
        >
          <Star
            className={cn(
              "h-6 w-6",
              (hoverValue ? star <= hoverValue : star <= value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            )}
          />
        </button>
      ))}
    </div>
  );
}
```

### Progress Bar
```tsx
// components/preview/PreviewProgress.tsx
import { cn } from "@/lib/utils";

interface PreviewProgressProps {
  progress: number;
  className?: string;
}

export function PreviewProgress({ progress, className }: PreviewProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
```

### Navigation
```tsx
// components/preview/PreviewNavigation.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  canProceed: boolean;
  isLastPage: boolean;
  className?: string;
}

export function PreviewNavigation({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  canProceed,
  isLastPage,
  className,
}: PreviewNavigationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between mt-8 pt-6 border-t",
        className
      )}
    >
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <span className="text-sm text-muted-foreground">
        Page {currentPage + 1} of {totalPages}
      </span>

      {isLastPage ? (
        <Button onClick={onNext} disabled={!canProceed}>
          <Send className="mr-2 h-4 w-4" />
          Submit
        </Button>
      ) : (
        <Button onClick={onNext} disabled={!canProceed}>
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
```

### Device Preview
```tsx
// components/preview/DevicePreview.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { PreviewContainer } from "./PreviewContainer";

type Device = "mobile" | "tablet" | "desktop";

const deviceWidths: Record<Device, string> = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

export function DevicePreview() {
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <div className="h-full flex flex-col">
      {/* Device Toggle */}
      <div className="flex items-center justify-center gap-2 p-4 border-b">
        <Button
          variant={device === "mobile" ? "default" : "ghost"}
          size="icon"
          onClick={() => setDevice("mobile")}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
        <Button
          variant={device === "tablet" ? "default" : "ghost"}
          size="icon"
          onClick={() => setDevice("tablet")}
        >
          <Tablet className="h-4 w-4" />
        </Button>
        <Button
          variant={device === "desktop" ? "default" : "ghost"}
          size="icon"
          onClick={() => setDevice("desktop")}
        >
          <Monitor className="h-4 w-4" />
        </Button>
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-muted p-8 overflow-auto">
        <div
          className={cn(
            "mx-auto transition-all duration-300 bg-background",
            device !== "desktop" && "shadow-2xl rounded-lg overflow-hidden"
          )}
          style={{ width: deviceWidths[device], maxWidth: "100%" }}
        >
          <PreviewContainer />
        </div>
      </div>
    </div>
  );
}
```

## Checklist de Verificacao
- [ ] Questoes em modo readonly
- [ ] Validacao de campos obrigatorios
- [ ] Navegacao entre paginas
- [ ] Barra de progresso
- [ ] Respostas persistem
- [ ] Todos os tipos suportados
- [ ] Navegacao por teclado
- [ ] Device preview
- [ ] Responsivo

## Referencias Uteis
- [shadcn RadioGroup](https://ui.shadcn.com/docs/components/radio-group)
[shadcn Checkbox](https://ui.shadcn.com/docs/components/checkbox)
[React Forms](https://react.dev/reference/react-dom/components/form)
