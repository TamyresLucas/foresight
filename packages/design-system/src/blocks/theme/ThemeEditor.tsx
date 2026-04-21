import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, RotateCcw, Trash2 } from 'lucide-react';

import { 
  Theme, 
  ThemeSchema, 
  applyTheme, 
  saveActiveTheme, 
  saveCustomTheme, 
  deleteCustomTheme,
  FORESIGHT_DEFAULT 
} from '../../lib/theme';

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
} from '../../components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';

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
  { value: '0.25rem', label: 'Soft (4px)' },
  { value: '0.5rem', label: 'Round (8px)' },
];

interface ThemeEditorProps {
  initialTheme?: Theme;
  onSave?: (theme: Theme) => void;
  onDelete?: (themeId: string) => void;
}

export function ThemeEditor({ 
  initialTheme = FORESIGHT_DEFAULT, 
  onSave,
  onDelete
}: ThemeEditorProps) {
  const { control, handleSubmit, watch, reset, setValue } = useForm<Theme>({
    resolver: zodResolver(ThemeSchema),
    defaultValues: initialTheme,
  });

  const values = watch();

  // Apply theme in real-time as values change
  React.useEffect(() => {
    applyTheme(values);
  }, [values]);

  const onFormSubmit = (data: Theme) => {
    saveActiveTheme(data);
    saveCustomTheme(data);
    onSave?.(data);
  };

  const handleReset = () => {
    reset(FORESIGHT_DEFAULT);
    applyTheme(FORESIGHT_DEFAULT);
  };

  const handleDelete = () => {
    if (values.id && !values.id.includes('default')) {
      deleteCustomTheme(values.id);
      onDelete?.(values.id);
    }
  };

  return (
    <Card className="w-full max-w-md border-border-decorative bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Theme Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label>Body Font</Label>
              <Controller
                name="fonts.body"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_OPTIONS.map(font => (
                        <SelectItem key={font} value={font}>{font}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>Heading Font</Label>
              <Controller
                name="fonts.heading"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_OPTIONS.map(font => (
                        <SelectItem key={font} value={font}>{font}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>Survey Font</Label>
              <Controller
                name="fonts.survey"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_OPTIONS.map(font => (
                        <SelectItem key={font} value={font}>{font}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Base Font Size</Label>
              <Controller
                name="fontSize"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_SIZE_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>Base Font Weight</Label>
              <Controller
                name="fontWeight"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-primary/40">
                      <SelectValue placeholder="Select weight" />
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

        {/* Corner Ratio */}
        <div className="space-y-2">
          <Label>Corner Ratio</Label>
          <Controller
            name="radius"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="border-primary/40">
                  <SelectValue placeholder="Select radius" />
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
        <Button onClick={handleSubmit(onFormSubmit)} className="flex-1 max-w-[120px]">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
