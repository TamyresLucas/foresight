import React from "react";

interface DynamicColorPaletteProps {
  showContrast?: boolean;
}

export const DynamicColorPalette: React.FC<DynamicColorPaletteProps> = () => {
  return (
    <div className="p-4 rounded-lg border border-border bg-muted/30 text-sm text-muted-foreground">
      Color palette visualization — coming soon.
    </div>
  );
};
