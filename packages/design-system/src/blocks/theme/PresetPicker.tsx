import * as React from 'react';
import { Check } from 'lucide-react';
import { 
  Theme, 
  getAllAvailableThemes, 
  applyTheme, 
  saveActiveTheme, 
  loadActiveTheme 
} from '../../lib/theme';
import { cn } from '../../lib/utils';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

interface PresetPickerProps {
  onSelect?: (theme: Theme) => void;
}

export function PresetPicker({ onSelect }: PresetPickerProps) {
  const [activeTheme, setActiveTheme] = React.useState<Theme | null>(null);
  const themes = getAllAvailableThemes();

  React.useEffect(() => {
    setActiveTheme(loadActiveTheme());
  }, []);

  const handleSelect = (theme: Theme) => {
    setActiveTheme(theme);
    applyTheme(theme);
    saveActiveTheme(theme);
    onSelect?.(theme);
  };

  return (
    <Card className="w-full max-w-md border-border-decorative bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Theme Presets</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3">
        {themes.map((theme) => {
          const isActive = activeTheme?.name === theme.name || (activeTheme?.id && activeTheme?.id === theme.id);
          return (
            <Button
              key={theme.id || theme.name}
              variant="outline"
              className={cn(
                "h-auto py-3 px-4 justify-between items-center border-primary/20 hover:border-primary/60 hover:bg-primary/5",
                isActive && "border-primary bg-primary/10"
              )}
              onClick={() => handleSelect(theme)}
            >
              <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-sm">{theme.name}</span>
                <div className="flex gap-2">
                  <div 
                    className="h-3 w-3 rounded-full border border-black/10" 
                    style={{ backgroundColor: theme.primary }} 
                    title="Primary"
                  />
                  <div 
                    className="h-3 w-3 rounded-full border border-black/10" 
                    style={{ backgroundColor: theme.secondary }} 
                    title="Secondary"
                  />
                  <div 
                    className="h-3 w-3 rounded-full border border-black/10" 
                    style={{ backgroundColor: theme.destructive }} 
                    title="Destructive"
                  />
                </div>
              </div>
              {isActive && <Check className="h-5 w-5 text-primary" />}
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
