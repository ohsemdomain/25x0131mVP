// com.quotation-item.tsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import { QuotationItem } from './types.quotations';

interface QuotationItemProps {
    item: QuotationItem;
    isSelected: boolean;
    onSelect: (item: QuotationItem) => void;
    onDelete: (id: number) => void;
}

export const ComQuotationItem = ({
    item,
    isSelected,
    onSelect,
    onDelete
}: QuotationItemProps) => (
    <div
        onClick={() => onSelect(item)}
        className={`
      p-3 rounded-lg border cursor-pointer transition-all duration-200 
      hover:border-primary/50 hover:shadow-sm 
      ${isSelected ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'}      
    `}
    >
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <span className="font-medium text-foreground">{item.title}</span>
                <span className="text-sm text-muted-foreground">${item.amount}</span>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(item.id);
                    }}
                    className="p-2 hover:bg-destructive/10 rounded-md transition-colors group"
                >
                    <Trash2
                        className="h-4 w-4 text-muted-foreground group-hover:text-destructive transition-colors"
                        strokeWidth={1.5}
                    />
                </button>
            </div>
        </div>
    </div>
);