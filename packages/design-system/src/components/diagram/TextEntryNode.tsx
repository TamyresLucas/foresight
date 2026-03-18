import React, { memo } from 'react';
import { Type } from '../ui/icons';
import { InputHandle, OutputHandle } from './NodeHandles';
import type { TextEntryNodeProps } from './types';
import { cn } from '../../lib/utils';

/**
 * Text entry node component for survey diagrams.
 * Represents open-ended text questions.
 */
const TextEntryNode: React.FC<TextEntryNodeProps> = ({ data, selected }) => {
    return (
        <div
            className={cn(
                'relative w-80 bg-card border rounded-lg shadow-lg transition-all',
                selected ? 'border-primary shadow-2xl' : 'border-primary'
            )}
        >
            {/* Header */}
            <header className="p-3 border-b border-primary/20">
                <div className="flex items-center gap-2 min-w-0">
                    <Type className="w-4 h-4 text-foreground flex-shrink-0" />
                    <span className="font-bold text-sm text-foreground flex-shrink-0 mr-1">
                        {data.variableName}
                    </span>
                    <p className="text-sm text-foreground truncate">
                        {data.question}
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="p-3 relative">
                <InputHandle highlighted={data.highlightInputHandle} />
                <div className="bg-primary/5 rounded p-2 text-sm text-foreground italic border border-primary/20">
                    Respondent provides a text-based answer.
                </div>
                <OutputHandle highlighted={data.highlightSourceHandles} />
            </main>
        </div>
    );
};

export default memo(TextEntryNode);
