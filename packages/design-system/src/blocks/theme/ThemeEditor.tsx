import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, RotateCcw, Trash2, Plus, Monitor, Smartphone } from 'lucide-react';

import { 
  Theme, 
  ThemeSchema, 
  applyTheme, 
  saveActiveTheme, 
  saveCustomTheme, 
  deleteCustomTheme,
  getAllAvailableThemes,
  FORESIGHT_DEFAULT 
} from '../../lib/theme';

import { cn } from '../../lib/utils';
import { ColorPicker } from '../../components/ui/color-picker';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '../../components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';

const FONT_OPTIONS = [
  'Inter',
  'Outfit',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
];

const FONT_SIZE_OPTIONS = Array.from({ length: 11 }, (_, i) => ({
  value: `${12 + i * 2}px`,
  label: `${12 + i * 2}px`,
}));

const FONT_WEIGHT_OPTIONS = [
  { value: '400', label: 'Regular' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semi Bold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'Extra Bold' },
];

const RADIUS_OPTIONS = [
  { value: '0rem', label: 'Square (0)' },
  { value: '0.5rem', label: 'Soft (8px)' },
  { value: '1rem', label: 'Round (16px)' },
];

export const QUESTION_TYPE_OPTIONS: { id: string; label: string }[] = [
  { id: 'description',      label: 'Description' },
  { id: 'text-input',       label: 'Text Input' },
  { id: 'radio',            label: 'Radio Button' },
  { id: 'nps',              label: 'NPS' },
  { id: 'checkbox',         label: 'Checkbox' },
  { id: 'open-end',         label: 'Open End' },
  { id: 'choice-grid',      label: 'Choice Grid' },
  { id: 'hybrid-grid',      label: 'Hybrid Grid' },
  { id: 'date',             label: 'Date & Time' },
  { id: 'time',             label: 'Time Picker' },
  { id: 'dropdown',         label: 'Dropdown' },
  { id: 'card-sort',        label: 'Card Sort' },
  { id: 'running-total',    label: 'Running Total' },
  { id: 'drag-drop',        label: 'Drag and Drop' },
  { id: 'numeric-ranking',  label: 'Numeric Ranking' },
  { id: 'star-rating',      label: 'Star Rating' },
  { id: 'slider',           label: 'Slider' },
  { id: 'carousel-question', label: 'Carousel Question' },
  { id: 'lookup-table',     label: 'Lookup Table' },
  { id: 'text-highlighter', label: 'Text Highlighter' },
  { id: 'file-upload',      label: 'File Upload' },
  { id: 'image-selector',      label: 'Image Selector' },
  { id: 'image-choice-grid',   label: 'Image Choice Grid' },
  { id: 'image-area-selector', label: 'Image Area Selector' },
  { id: 'image-area-evaluator', label: 'Image Area Evaluator' },
];

const ALL_QUESTION_TYPE_IDS = QUESTION_TYPE_OPTIONS.map(q => q.id);

const MARGIN_OPTIONS = [
  { value: '8px', label: 'Tight (8px)' },
  { value: '12px', label: 'Compact (12px)' },
  { value: '16px', label: 'Cozy (16px)' },
];

interface ThemeEditorProps {
  initialTheme?: Theme;
  onSave?: (theme: Theme) => void;
  onDelete?: (themeId: string) => void;
  viewport?: 'desktop' | 'mobile';
  onViewportChange?: (viewport: 'desktop' | 'mobile') => void;
  /** Controlled list of question type ids shown in the preview. Defaults to all visible. */
  visibleQuestionTypes?: string[];
  onVisibleQuestionTypesChange?: (types: string[]) => void;
}

export function ThemeEditor({
  initialTheme = FORESIGHT_DEFAULT,
  onSave,
  onDelete,
  viewport = 'desktop',
  onViewportChange,
  visibleQuestionTypes: visibleProp,
  onVisibleQuestionTypesChange,
}: ThemeEditorProps) {
  const [availableThemes, setAvailableThemes] = React.useState<Theme[]>([]);
  const isVisibilityControlled = visibleProp !== undefined;
  const [internalVisible, setInternalVisible] = React.useState<string[]>(ALL_QUESTION_TYPE_IDS);
  const visibleQuestionTypes = isVisibilityControlled ? visibleProp : internalVisible;

  const toggleQuestionType = React.useCallback((id: string, checked: boolean) => {
    const next = checked
      ? [...visibleQuestionTypes, id]
      : visibleQuestionTypes.filter(t => t !== id);
    if (!isVisibilityControlled) setInternalVisible(next);
    onVisibleQuestionTypesChange?.(next);
  }, [visibleQuestionTypes, isVisibilityControlled, onVisibleQuestionTypesChange]);

  const toggleAll = React.useCallback((checked: boolean) => {
    const next = checked ? ALL_QUESTION_TYPE_IDS : [];
    if (!isVisibilityControlled) setInternalVisible(next);
    onVisibleQuestionTypesChange?.(next);
  }, [isVisibilityControlled, onVisibleQuestionTypesChange]);
  
  const { control, handleSubmit, watch, reset, setValue } = useForm<Theme>({
    resolver: zodResolver(ThemeSchema),
    defaultValues: initialTheme,
  });

  const values = watch();

  // Refresh available themes from storage
  const refreshThemes = React.useCallback(() => {
    setAvailableThemes(getAllAvailableThemes());
  }, []);

  React.useEffect(() => {
    refreshThemes();
  }, [refreshThemes]);

  // Apply theme in real-time as values change
  React.useEffect(() => {
    applyTheme(values);
  }, [values]);

  const onFormSubmit = (data: Theme) => {
    const themeId = data.id || `custom-${Date.now()}`;
    const themeToSave = {
      ...data,
      id: themeId
    };
    saveActiveTheme(themeToSave);
    saveCustomTheme(themeToSave);
    refreshThemes();
    reset(themeToSave);
    onSave?.(themeToSave);
  };

  const handleReset = () => {
    reset(FORESIGHT_DEFAULT);
    applyTheme(FORESIGHT_DEFAULT);
  };

  const handleDelete = () => {
    if (values.id && !values.id.includes('default')) {
      deleteCustomTheme(values.id);
      refreshThemes();
      reset(FORESIGHT_DEFAULT);
      onDelete?.(values.id);
    }
  };

  const handleThemeChange = (themeId: string) => {
    if (themeId === 'new') {
      const newTheme = {
        ...FORESIGHT_DEFAULT,
        id: undefined,
        name: 'New Theme',
      };
      reset(newTheme);
    } else {
      const theme = availableThemes.find(t => t.id === themeId);
      if (theme) {
        reset(theme);
      }
    }
  };

  const handleGlobalFontFamilyChange = (font: string) => {
    setValue('header.fontFamily', font);
    setValue('body.fontFamily', font);
    setValue('navigation.fontFamily', font);
  };

  return (
    <Card className="w-full max-w-md border-border-decorative bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Theme Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Preview Mode */}
        <div className="space-y-2">
          <Label>Preview Mode</Label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onViewportChange?.('desktop')}
              aria-pressed={viewport === 'desktop'}
              aria-label="Desktop view"
              className={cn(
                "flex-1 flex items-center justify-center gap-2 h-9 rounded-md border border-primary/40 transition-colors",
                viewport === 'desktop' ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"
              )}
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => onViewportChange?.('mobile')}
              aria-pressed={viewport === 'mobile'}
              aria-label="Mobile view"
              className={cn(
                "flex-1 flex items-center justify-center gap-2 h-9 rounded-md border border-primary/40 transition-colors",
                viewport === 'mobile' ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"
              )}
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </button>
          </div>
        </div>

        <SelectSeparator className="my-2" />

        {/* Theme Selector */}
        <div className="space-y-2">
          <Label>Selected Theme</Label>
          <Select onValueChange={handleThemeChange} value={values.id || 'new'}>
            <SelectTrigger className="w-[223px] border-primary/40 bg-muted/50">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent className="w-[223px]">
              <SelectItem value="new" className="font-semibold text-primary">
                <div className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Theme
                </div>
              </SelectItem>
              <SelectSeparator />
              {availableThemes.map((theme) => (
                <SelectItem key={theme.id} value={theme.id || ''}>
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <SelectSeparator className="my-2" />

        {/* Theme Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Theme Name</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="My Custom Theme" className="border-primary/40" />
            )}
          />
        </div>

        {/* Colors */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <Controller
              name="primary"
              control={control}
              render={({ field }) => (
                <ColorPicker value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <Controller
              name="secondary"
              control={control}
              render={({ field }) => (
                <ColorPicker value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
          <div className="space-y-2">
            <Label>Destructive Color</Label>
            <Controller
              name="destructive"
              control={control}
              render={({ field }) => (
                <ColorPicker value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Typography</h3>
          </div>

          {/* Global Font Family Selector */}
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-tight">Global Font Family</Label>
            <Select onValueChange={handleGlobalFontFamilyChange} value={values.body.fontFamily}>
              <SelectTrigger className="border-primary/40 h-9">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {FONT_OPTIONS.map(font => (
                  <SelectItem key={font} value={font}>{font}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Header Font */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">Header</Label>
            <div className="grid grid-cols-2 gap-2">
              <Controller
                name="header.fontSize"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40 h-8 text-xs">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_SIZE_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="header.fontWeight"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40 h-8 text-xs">
                      <SelectValue placeholder="Weight" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_WEIGHT_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Body Font */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">Body</Label>
            <div className="grid grid-cols-2 gap-2">
              <Controller
                name="body.fontSize"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40 h-8 text-xs">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_SIZE_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="body.fontWeight"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40 h-8 text-xs">
                      <SelectValue placeholder="Weight" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_WEIGHT_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </div>

        {/* Layout Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Layout</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Corner Ratio */}
            <div className="space-y-2">
              <Label>Corner Ratio</Label>
              <Controller
                name="radius"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Radius" />
                    </SelectTrigger>
                    <SelectContent>
                      {RADIUS_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Margin Setting */}
            <div className="space-y-2">
              <Label>Margin</Label>
              <Controller
                name="margin"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Margin" />
                    </SelectTrigger>
                    <SelectContent>
                      {MARGIN_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </div>
        <SelectSeparator className="my-2" />

        {/* Preview Questions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Preview Questions</h3>
            <button
              type="button"
              onClick={() => toggleAll(visibleQuestionTypes.length < ALL_QUESTION_TYPE_IDS.length)}
              className="text-survey-body text-primary hover:underline"
            >
              {visibleQuestionTypes.length < ALL_QUESTION_TYPE_IDS.length ? 'Select all' : 'Deselect all'}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {QUESTION_TYPE_OPTIONS.map(({ id, label }) => {
              const checked = visibleQuestionTypes.includes(id);
              return (
                <label key={id} className="flex items-center gap-2 cursor-pointer select-none">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(val) => toggleQuestionType(id, !!val)}
                    id={`qt-${id}`}
                  />
                  <span className="text-sm text-foreground leading-none">{label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 border-t border-border-decorative pt-6">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleReset} title="Reset to default">
            <RotateCcw className="h-4 w-4" />
          </Button>
          {values.id && !values.id.includes('default') && (
            <Button variant="outline" size="icon" onClick={handleDelete} className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button onClick={handleSubmit(onFormSubmit)} className="flex-1 max-w-[120px] text-survey-body">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
