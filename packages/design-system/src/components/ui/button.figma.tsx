import figma from "@figma/code-connect";
import { Button } from "./button";

// 🔴 REPLACE THIS URL with your actual Figma Button component URL
const FIGMA_BUTTON_URL =
  "https://www.figma.com/design/YOUR_FILE_KEY/Your-Design-System?node-id=YOUR_NODE_ID";

figma.connect(FIGMA_BUTTON_URL, {
  variant: {
    "Button": "Default",
    "Button#123:456": "Destructive", // Replace with actual node IDs for variants
  },
  props: {
    children: figma.string("content"),
    variant: figma.enum("Variant", {
      Primary: "default",
      Destructive: "destructive",
      Success: "success",
      Outline: "outline",
      Secondary: "secondary",
      Ghost: "ghost",
      Link: "link",
    }),
    size: figma.enum("Size", {
      Small: "sm",
      Default: "default",
      Large: "lg",
      Icon: "icon",
    }),
    disabled: figma.boolean("Disabled"),
    isLoading: figma.boolean("Loading"),
  },
  example: ({ children, variant, size, disabled, isLoading }) => (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </Button>
  ),
});
