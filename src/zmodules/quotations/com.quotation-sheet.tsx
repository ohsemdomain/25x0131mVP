//src\zmodules\quotations\com.quotation-sheet.tsx
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QuotationPreview } from './_QuotationsPreview';
import { QuotationItem } from './types.quotations';
import { Plus, PenLine } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface QuotationSheetProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'create' | 'edit' | 'preview';
    title?: string;
    onSubmit?: (title: string, amount: number) => void;
    initialValues?: {
        title: string;
        amount: number;
    };
    item?: QuotationItem | null;
    onEdit?: () => void;
    className?: string;
}

interface FooterProps {
    mode: 'create' | 'edit' | 'preview';
    onClose: () => void;
    className?: string;
}

const SheetFooter = ({ mode, onClose, className }: FooterProps) => {
    const isPreview = mode === 'preview';

    return (
        <Card className={`sticky bottom-0 mt-auto rounded-b-none border-b-0 border-l-0 border-r-0 backdrop-blur-sm bg-white/30 p-4 ${className}`}>
            <div className="flex justify-end space-x-4">
                <Button
                    onClick={onClose}
                    variant="outline"
                    className="min-w-[150px]"
                >
                    Back
                </Button>
                {!isPreview && (
                    <Button type="submit" className="min-w-[150px] flex items-center gap-2">
                        {mode === 'create' ? (
                            <Plus className="w-4 h-4" />
                        ) : (
                            <PenLine className="w-4 h-4" />
                        )}
                        {mode === 'create' ? 'Create' : 'Update'}
                    </Button>
                )}
            </div>
        </Card>
    );
};

export const ComQuotationSheet = ({
    isOpen,
    onClose,
    mode,
    title,
    onSubmit,
    initialValues,
    item,
    onEdit,
    className = ''
}: QuotationSheetProps) => {
    const [newItemTitle, setNewItemTitle] = React.useState('');
    const [newItemAmount, setNewItemAmount] = React.useState<number>(0);

    React.useEffect(() => {
        if (initialValues) {
            setNewItemTitle(initialValues.title);
            setNewItemAmount(initialValues.amount);
        }
    }, [initialValues]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(newItemTitle, newItemAmount);
            onClose();
            // Reset form
            setNewItemTitle('');
            setNewItemAmount(0);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="right"
                size="lg"
                className={`p-0 ${className}`}
                hideCloseIcon
            >
                {mode === 'preview' ? (
                    <>
                        <QuotationPreview
                            item={item}
                            onEdit={onEdit}
                            className="h-full overflow-y-auto"
                        />
                        <SheetFooter mode={mode} onClose={onClose} />
                    </>
                ) : (
                    <>
                        <SheetHeader>
                            <SheetTitle>{title}</SheetTitle>
                        </SheetHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col h-full">
                            <div className="flex-1 overflow-y-auto pt-6 px-4 pb-[68px]">
                                <div className="space-y-4">
                                    <Input
                                        type="text"
                                        value={newItemTitle}
                                        onChange={(e) => setNewItemTitle(e.target.value)}
                                        placeholder="Enter title"
                                    />
                                    <Input
                                        type="number"
                                        value={newItemAmount}
                                        onChange={(e) => setNewItemAmount(Number(e.target.value))}
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>
                            <SheetFooter mode={mode} onClose={onClose} />
                        </form>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};