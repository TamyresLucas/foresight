'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownAnswerProps {
  label?: React.ReactNode
  required?: boolean
  options: DropdownOption[]
  placeholder?: string // default: "Select answer"
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  disabled?: boolean
  selected?: boolean // controle externo do estado "selected" (Storybook)
  focused?: boolean // simula foco para Storybook
  error?: string
  className?: string
}

const DropdownAnswer = React.forwardRef<HTMLButtonElement, DropdownAnswerProps>(
  (
    {
      label,
      required = false,
      options,
      placeholder = 'Select answer',
      value,
      defaultValue,
      onValueChange,
      disabled,
      selected,
      focused = false,
      error,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const isSelected = selected ?? internalSelected

    const handlePointerDown = () => {
      setInternalSelected(true)
    }

    return (
      <div
        className="flex flex-col w-fit group/survey-input"
        style={{ gap: 'var(--survey-margin)', marginBottom: 'var(--survey-margin)' }}
        onPointerDown={handlePointerDown}
        data-selected={isSelected}
      >
        {/* Label */}
        {label && (
          <label className="text-survey-body font-survey-regular font-survey text-survey-foreground w-full">
            {label}
            {required && <span className="text-survey-destructive ml-0.5">*</span>}
          </label>
        )}

        {/* 
          Multi-layered concentric focus frame.
          Activated by 'focused' prop (for Storybook) OR browser :focus-visible (tab navigation).
          Click triggers 'selected' state (blue border).
        */}
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-fit transition-all bg-transparent',
            'border-transparent', // Default state
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            focused && 'border-survey-border-interactive',
            focused && isSelected && 'border-survey-border-selected',
            error && 'border-transparent group-has-[:focus-visible]/survey-input:border-transparent',
          )}
        >
          <SelectPrimitive.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
            open={open}
            onOpenChange={setOpen}
          >
            <SelectPrimitive.Trigger
              ref={ref}
              className={cn(
                'flex w-fit min-w-[280px] box-border h-10 px-2 py-1.5 items-center justify-between gap-[10px] rounded-lg border bg-transparent transition-all outline-none',
                'border-survey-border-interactive', // Default
                'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
                'group-has-[:focus-visible]/survey-input:border',
                focused && 'border',
                error && 'border-2 border-survey-destructive',
                className,
              )}
              {...props}
            >
              <span className="flex-1 text-left truncate">
                <SelectPrimitive.Value placeholder={placeholder} />
              </span>
              <SelectPrimitive.Icon asChild>
                {open ? (
                  <ChevronUp size={18} className="text-survey-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-survey-foreground flex-shrink-0" />
                )}
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
              <SelectPrimitive.Content
                position="popper"
                sideOffset={4}
                className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-survey-md border border-survey-border-muted bg-survey-background font-survey shadow-sm"
              >
                <SelectPrimitive.Viewport className="p-1">
                  {options.map((option) => (
                    <SelectPrimitive.Item
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-3 text-survey-body font-survey-regular text-survey-foreground outline-none data-[highlighted]:bg-survey-muted-background data-[state=checked]:font-bold data-[state=checked]:text-survey-primary data-[disabled]:opacity-50 data-[disabled]:text-survey-muted-foreground data-[disabled]:cursor-not-allowed"
                    >
                      <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-xs font-survey font-survey-regular text-survey-destructive w-full">
            {error}
          </p>
        )}
      </div>
    )
  },
)

DropdownAnswer.displayName = 'DropdownAnswer'

export { DropdownAnswer }
