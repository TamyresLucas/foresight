// React import not required with automatic JSX runtime in this environment

export function ColorPaletteEditor() {
  return (
    <div className="space-y-4 p-6 max-w-5xl bg-card rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight">
        Color Palette Editor (Static)
      </h2>
      <p className="text-sm text-muted-foreground">
        Este editor está desativado. Cores são aplicadas via tokens estáticos.
      </p>
    </div>
  );
}
