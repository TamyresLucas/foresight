import * as React from "react";
import { HexColorPicker } from "react-colorful";
import { Pipette } from "./icons";
import Color from "color";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// ============================================================================
// Types
// ============================================================================

export type ColorFormat = "hex" | "rgb" | "hsl" | "css";

export interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  onFormatChange?: (format: ColorFormat) => void;
  format?: ColorFormat;
  className?: string;
  disabled?: boolean;
}

// EyeDropper API is not yet in standard TS lib
interface EyeDropper {
  open: () => Promise<{ sRGBHex: string }>;
}

declare global {
  interface Window {
    EyeDropper: {
      new (): EyeDropper;
    };
  }
}

type ColorInstance = ReturnType<typeof Color>;

// ============================================================================
// Helpers
// ============================================================================

const formatColor = (color: ColorInstance, format: ColorFormat): string => {
  switch (format) {
    case "hex":
      return color.hex();
    case "rgb":
      return color.rgb().string();
    case "hsl":
      return color.hsl().string();
    case "css":
      return color.hex();
    default:
      return color.hex();
  }
};

// ============================================================================
// Main Component
// ============================================================================

export function ColorPicker({
  value = "#000000",
  onChange,
  className,
  format = "hex",
  disabled = false,
}: ColorPickerProps) {
  const [internalColor, setInternalColor] = React.useState<ColorInstance>(
    Color(value),
  );
  const [activeFormat, setActiveFormat] = React.useState<ColorFormat>(format);
  const [open, setOpen] = React.useState(false);

  // Sync internal state with prop changes
  React.useEffect(() => {
    try {
      setInternalColor(Color(value));
    } catch {
      // Ignore invalid colors from props, keep last valid
    }
  }, [value]);

  React.useEffect(() => {
    setActiveFormat(format);
  }, [format]);

  // Handle color changes from pickers
  const handleColorChange = (
    newColor:
      | string
      | { r: number; g: number; b: number; a: number }
      | { h: number; s: number; l: number; a: number },
  ) => {
    try {
      let c: ColorInstance;
      if (typeof newColor === "string") {
        c = Color(newColor);
      } else {
        c = Color(newColor);
      }
      setInternalColor(c);
      onChange?.(formatColor(c, activeFormat));
    } catch (e) {
      console.error("Invalid color update", e);
    }
  };

  // EyeDropper API
  const openEyeDropper = async () => {
    if (!window.EyeDropper) return;
    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const c = Color(result.sRGBHex);
      setInternalColor(c);
      onChange?.(formatColor(c, activeFormat));
    } catch (e) {
      console.error("EyeDropper failed", e);
    }
  };

  // Manual Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    try {
      const c = Color(val);
      setInternalColor(c);
      onChange?.(formatColor(c, activeFormat));
    } catch {
      // Allow typing (invalid state) but don't update color object yet
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal px-2 border-primary/40",
            !value && "text-muted-foreground",
            className,
          )}
        >
          <div className="flex w-full items-center gap-2">
            <div
              className="h-4 w-4 rounded-full border border-muted-foreground/20"
              style={{ backgroundColor: formatColor(internalColor, "hex") }}
            />
            <span className="truncate flex-1">{value}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 p-3 mb-2 border border-border-subtle bg-card shadow-lg"
        align="start"
      >
        <div className="space-y-3">
          {/* Picker Area */}
          <div className="custom-color-picker">
            <HexColorPicker
              color={internalColor.hex()}
              onChange={handleColorChange}
              className="!w-full !h-32"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-md border border-muted-foreground/20 shrink-0 transition-colors"
              style={{ backgroundColor: formatColor(internalColor, "hex") }}
            />
            <div className="flex-1">
              <Input
                value={
                  activeFormat === "hex"
                    ? internalColor.hex()
                    : activeFormat === "rgb"
                      ? internalColor.rgb().string()
                      : internalColor.hsl().string()
                }
                onChange={handleInputChange}
                className="h-8 text-xs font-mono"
              />
            </div>
            {/* EyeDropper */}
            {typeof window !== "undefined" && "EyeDropper" in window && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={openEyeDropper}
              >
                <Pipette className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
