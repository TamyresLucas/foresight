declare module 'culori' {
  export interface Color {
    mode: string;
    [key: string]: any;
  }
  export function parse(color: string): Color | undefined;
  export function formatHsl(color: Color | string): string;
  export function formatHex(color: Color | string): string;
  export function wcagContrast(color1: Color | string, color2: Color | string): number;
  export function converter(mode: string): (color: Color | string) => Color;
}
