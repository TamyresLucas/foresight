'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface DropdownOption {
  value: string
  label: string
  /** Optional swatch color; when set, a colored dot is shown before the label. */
  color?: string
}

export interface DropdownAnswerProps {
  options: DropdownOption[]
  placeholder?: string // default: "Select answer"
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  selected?: boolean // controle externo do estado "selected" (Storybook)
  focused?: boolean // simula foco para Storybook
  className?: string
  /** Fill the parent's width instead of sizing to the content (e.g. inside a grid cell). */
  fullWidth?: boolean
}

const DropdownAnswer = React.forwardRef<HTMLButtonElement, DropdownAnswerProps>(
  (
    {
      options,
      placeholder = 'Select answer',
      value,
      defaultValue,
      onValueChange,
      selected,
      focused = false,
      className,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const isSelected = selected ?? internalSelected
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    const handlePointerDown = () => {
      setInternalSelected(true)
    }

    // When uncontrolled, return to the default state once the user clicks away.
    // Clicks inside the trigger or the open option list (rendered in a Radix
    // portal) keep it selected; anything else resets it.
    React.useEffect(() => {
      if (selected !== undefined || !internalSelected) return
      const handlePointerDownOutside = (event: PointerEvent) => {
        const target = event.target as HTMLElement | null
        if (wrapperRef.current?.contains(target)) return
        if (target?.closest('[data-radix-popper-content-wrapper]')) return
        setInternalSelected(false)
      }
      document.addEventListener('pointerdown', handlePointerDownOutside)
      return () =>
        document.removeEventListener('pointerdown', handlePointerDownOutside)
    }, [internalSelected, selected])

    return (
      <div
        ref={wrapperRef}
        className={cn('flex flex-col group/survey-input', fullWidth ? 'w-full' : 'w-fit')}
        onPointerDown={handlePointerDown}
        data-selected={isSelected}
      >
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] transition-all bg-transparent',
            fullWidth ? 'w-full' : 'w-fit',
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:p-[2px]',
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-2',
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            focused && 'p-[2px] border-2 border-survey-border-interactive',
            focused && isSelected && 'border-survey-border-selected',
          )}
        >
          <SelectPrimitive.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            open={open}
            onOpenChange={setOpen}
          >
            <SelectPrimitive.Trigger
              ref={ref}
              className={cn(
                'flex box-border h-10 px-2 py-1.5 items-center justify-between gap-[10px] rounded-lg border bg-transparent transition-all outline-none',
                // Label + placeholder follow the survey body text token (size/weight/family).
                'text-survey-body font-survey-regular font-survey text-survey-foreground',
                fullWidth ? 'w-full min-w-0' : 'w-fit min-w-[280px]',
                'border-survey-border-interactive',
                'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
                'group-has-[:focus-visible]/survey-input:border',
                focused && 'border',
                className,
              )}
              {...props}
            >
              <span className="flex-1 text-left truncate">
                <SelectPrimitive.Value placeholder={placeholder} />
              </span>
              <SelectPrimitive.Icon asChild>
                {open ? (
                  <ChevronUp size={18} className="flex-shrink-0 text-survey-foreground" />
                ) : (
                  <ChevronDown size={18} className="flex-shrink-0 text-survey-foreground" />
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
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-3 text-survey-body font-survey-regular text-survey-foreground outline-none data-[highlighted]:bg-survey-muted-background data-[state=checked]:font-bold data-[state=checked]:text-survey-primary"
                    >
                      {option.color && (
                        <span
                          aria-hidden="true"
                          className="mr-2 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: option.color }}
                        />
                      )}
                      <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </div>
      </div>
    )
  },
)

DropdownAnswer.displayName = 'DropdownAnswer'

export { DropdownAnswer }
