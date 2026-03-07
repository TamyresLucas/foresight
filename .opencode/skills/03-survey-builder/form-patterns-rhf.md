# Form Patterns + React Hook Form

## Descrição
Padrões para criação de formulários usando React Hook Form, Zod para validação e componentes integrados do shadcn/ui.

## Regras Obrigatórias

### DO
- ✅ Usar React Hook Form para gerenciamento de estado de formulários
- ✅ Validar com Zod (schema-first validation)
- ✅ Integrar com componentes shadcn/ui (Form, Input, Label, etc.)
- ✅ Usar Controller para componentes customizados
- ✅ Implementar tratamento de erros com mensagens claras
- ✅ Adicionar submit handling com feedback ao usuário

### DON'T
- ❌ Gerenciar estado de formulário manualmente com useState
- ❌ Validar apenas no submit (validar onBlur/onChange quando apropriado)
- ❌ Ignorar acessibilidade em forms (labels, aria-invalid)
- ❌ Usar refs diretamente sem register
- ❌ Criar schemas Zod complexos demais sem reuso

## Exemplos de Código

### Setup Básico
```tsx
// Form básico com React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
```

### Componente Form Integrado (shadcn/ui)
```tsx
// Usando componentes Form do shadcn
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(160, "Bio must be less than 160 characters").optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about yourself"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief description for your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
```

### Campos Dinâmicos (Arrays)
```tsx
// Formulário com campos dinâmicos
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Plus, Trash } from "lucide-react";

const surveySchema = z.object({
  title: z.string().min(1, "Title is required"),
  questions: z.array(
    z.object({
      text: z.string().min(1, "Question text is required"),
      type: z.enum(["text", "multiple_choice", "rating"]),
    })
  ),
});

type SurveyFormData = z.infer<typeof surveySchema>;

export function SurveyForm() {
  const form = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      title: "",
      questions: [{ text: "", type: "text" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  function onSubmit(data: SurveyFormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Survey Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Questions</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-start">
              <FormField
                control={form.control}
                name={`questions.${index}.text`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder={`Question ${index + 1}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => remove(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={() => append({ text: "", type: "text" })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Question
          </Button>
        </div>

        <Button type="submit">Create Survey</Button>
      </form>
    </Form>
  );
}
```

### Controller para Componentes Customizados
```tsx
// Usando Controller com componentes customizados
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const settingsSchema = z.object({
  notifications: z.boolean(),
  volume: z.number().min(0).max(100),
  theme: z.enum(["light", "dark", "system"]),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

export function SettingsForm() {
  const { control, handleSubmit } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      notifications: true,
      volume: 50,
      theme: "system",
    },
  });

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center justify-between">
        <FormLabel>Enable Notifications</FormLabel>
        <Controller
          name="notifications"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
      </div>

      <div className="space-y-2">
        <FormLabel>Volume: {control._formValues.volume}%</FormLabel>
        <Controller
          name="volume"
          control={control}
          render={({ field }) => (
            <Slider
              value={[field.value]}
              onValueChange={(value) => field.onChange(value[0])}
              max={100}
              step={1}
            />
          )}
        />
      </div>

      <Button type="submit">Save Settings</Button>
    </form>
  );
}
```

### Validação Assíncrona
```tsx
// Validação assíncrona (ex: verificar se username está disponível)
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

async function checkUsernameAvailability(username: string): Promise<boolean> {
  // Simulação de API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return !["admin", "root", "user"].includes(username);
}

const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .refine(async (value) => {
      return await checkUsernameAvailability(value);
    }, "Username is already taken"),
});

export function AsyncValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          {...register("username")}
          aria-invalid={!!errors.username}
        />
        {isValidating && (
          <p className="text-sm text-muted-foreground">Checking availability...</p>
        )}
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Checklist de Verificação
- [ ] React Hook Form instalado e configurado
- [ ] Zod schema definido com tipagem
- [ ] Resolver zod configurado no useForm
- [ ] Componentes shadcn Form, FormField, FormItem usados
- [ ] Campos dinâmicos usando useFieldArray
- [ ] Componentes customizados usando Controller
- [ ] Tratamento de erros com FormMessage
- [ ] Estados de loading (isSubmitting) gerenciados
- [ ] Validação assíncrona implementada quando necessário

## Referências Úteis
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- [shadcn/ui Form](https://ui.shadcn.com/docs/components/form)
