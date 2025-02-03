import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { QuotationItem } from './types.quotations';
import { ComQuotationItem } from './com.quotation-item';
import { QuotationListHeader } from './com.quotation-list-header';
import EmptyState from '@/components/elements/EmptyState';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuotationListProps {
    items: QuotationItem[];
    selectedItem: QuotationItem | null;
    onSelect: (item: QuotationItem) => void;
    onDelete: (id: number) => void;
    onCreate: () => void;
}

export const QuotationList = ({
    items,
    selectedItem,
    onSelect,
    onDelete,
    onCreate
}: QuotationListProps) => {
    const [showFade, setShowFade] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'createdDate' | 'modifiedDate' | 'status'>('createdDate');
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        setShowFade(scrollTop > 10);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        // Implement search logic here
    };

    const handleSortChange = (newSortBy: 'createdDate' | 'modifiedDate' | 'status') => {
        setSortBy(newSortBy);
        // Implement sort logic here
    };

    const handleArchiveSelected = () => {
        // Implement archive logic here
    };

    const handleDateRangeSelect = () => {
        // Implement date range selection logic here
    };

    if (items.length === 0) {
        return (
            <EmptyState
                variant="default"
                title="No quotations available"
                description="Create your first quotation to get started"
                actionLabel="Create Quotation"
                onAction={onCreate}
            />
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4 pt-6 px-4 relative z-10">
                <QuotationListHeader
                    onSearch={handleSearch}
                    onCreate={onCreate}
                    onArchiveSelected={handleArchiveSelected}
                    onSortChange={handleSortChange}
                    onDateRangeSelect={handleDateRangeSelect}
                />
            </div>

            <div className="flex-1 min-h-0 relative">
                {/* Fade overlay with dynamic opacity based on scroll */}
                <div
                    className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10 transition-opacity duration-200`}
                    style={{ opacity: showFade ? 1 : 0 }}
                />

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="h-[calc(100vh-225px)] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    <div className="space-y-2 px-4 pb-[38px] sm:pb-[64px]">
                        {items.map((item) => (
                            <ComQuotationItem
                                key={item.id}
                                item={item}
                                isSelected={selectedItem?.id === item.id}
                                onSelect={onSelect}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Card withHoverEffect className="p-4 backdrop-blur-sm bg-white/30">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Showing {items.length} of {items.length} item(s)
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};