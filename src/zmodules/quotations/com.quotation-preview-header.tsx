import React from 'react';
import { Button } from '@/components/ui/button';
import { MoreVertical, CopyIcon, MessageSquareShare, SquarePen } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface QuotationPreviewHeaderProps {
    onEdit: () => void;
    onCopy?: () => void;
    onShare?: () => void;
    onArchive?: () => void;
}

export const QuotationPreviewHeader: React.FC<QuotationPreviewHeaderProps> = ({
    onEdit,
    onCopy,
    onShare,
    onArchive
}) => {
    return (
        <div className="border-b">
            <div className='flex justify-between items-stretch border-none lg:m-0 lg:rounded-lg lg:border'>
                <div className='p-3 lg:p-4 w-full bg-primary/5 rounded-tl-md'>
                    <h3>Quotation Preview</h3>
                </div>
                <div className="flex items-stretch divide-x divide-slate-200">
                    <Button
                        onClick={onEdit}
                        variant="link"
                        className="h-auto p-3 sm:p-4 lg:px-6 lg:py-4 border-l border-slate-200 rounded-none text-slate-400 hover:bg-white/30 inline-flex items-center gap-2"
                    >
                        <SquarePen size={16} />
                        <span className="hidden lg:inline">Edit</span>
                    </Button>
                    <Button
                        onClick={onCopy}
                        variant="link"
                        className="h-auto p-3 sm:p-4 lg:px-6 lg:py-4 text-slate-400 rounded-none hover:bg-white/30 inline-flex items-center gap-2"
                    >
                        <CopyIcon size={16} />
                        <span className="hidden lg:inline">Copy Link</span>
                    </Button>
                    <Button
                        onClick={onShare}
                        variant="link"
                        className="h-auto p-3 sm:p-4 lg:px-6 lg:py-4 text-slate-400 rounded-none hover:bg-white/30 inline-flex items-center gap-2"
                    >
                        <MessageSquareShare size={16} />
                        <span className="hidden lg:inline">WhatsApp</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="link"
                                className="h-auto p-3 sm:p-4 lg:px-6 lg:py-4 rounded-none text-slate-400 hover:bg-white/30"
                            >
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[180px]">
                            <DropdownMenuItem onClick={onArchive}>
                                Archive Selected
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};