import React from 'react';
import { QuotationItem } from './types.quotations';
import EmptyState from '@/components/elements/EmptyState';
import { ScrollArea } from '@/components/ui/scroll-area';
import { QuotationPreviewHeader } from './com.quotation-preview-header';

interface QuotationPreviewProps {
    item: QuotationItem | null;
    onEdit: () => void;
    className?: string;
}

export const QuotationPreview = ({
    item,
    onEdit,
    className = ""
}: QuotationPreviewProps) => {
    if (!item) {
        return (
            <EmptyState
                variant="preview"
                title="No preview available"
                description="Select a quotation to view details"
            />
        );
    }

    return (
        <div className={className}>
            <QuotationPreviewHeader
                onEdit={onEdit}
                onCopy={() => console.log('Copy clicked')}
                onShare={() => console.log('Share clicked')}
                onArchive={() => console.log('Archive clicked')}
            />
            <ScrollArea className="h-[calc(100vh-60px)] lg:h-[calc(100vh-175px)] overflow-y-auto">
                <div className="space-y-4 px-6 pt-8 pb-16 lg:pb-0">
                    <div className="space-y-4">
                        <p><span className="font-medium">Title:</span> {item.title}</p>
                        <p><span className="font-medium">Amount:</span> ${item.amount}</p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};