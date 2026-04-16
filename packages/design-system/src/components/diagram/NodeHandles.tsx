import React from "react";
import { Handle, Position } from "@xyflow/react";
import { cn } from "../../lib/utils";

const baseHandleStyles = "!w-3 !h-3 !rounded-full !border-2 !bg-card";

interface HandleProps {
  highlighted?: boolean;
  className?: string;
}

/**
 * Input handle for diagram nodes (left side)
 */
export const InputHandle: React.FC<HandleProps> = ({
  highlighted: _highlighted,
  className,
}) => (
  <Handle
    type="target"
    position={Position.Left}
    id="input"
    className={cn(baseHandleStyles, "!border-primary", className)}
    style={{
      left: "-6px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  />
);

/**
 * Output handle for diagram nodes (right side)
 */
export const OutputHandle: React.FC<HandleProps> = ({
  highlighted: _highlighted,
  className,
}) => (
  <Handle
    type="source"
    position={Position.Right}
    id="output"
    className={cn(baseHandleStyles, "!border-primary", className)}
    style={{
      right: "-6px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  />
);

interface ChoiceHandleProps extends HandleProps {
  id: string;
}

/**
 * Choice-specific output handle for multiple choice nodes
 */
export const ChoiceOutputHandle: React.FC<ChoiceHandleProps> = ({
  id,
  highlighted: _highlighted,
  className,
}) => (
  <Handle
    type="source"
    position={Position.Right}
    id={id}
    className={cn(baseHandleStyles, "!border-primary", className)}
    style={{
      right: "-6px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  />
);
