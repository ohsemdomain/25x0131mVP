import React from 'react';
import { useMediaQuery } from './hook.media-query';
import { Card } from '@/components/ui/card';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { DotLoading } from '@/components/ui/dotloading';
import { QuotationList } from './_QuotationsList';
import { QuotationPreview } from './_QuotationsPreview';
import { ComQuotationSheet } from './com.quotation-sheet';
import { useQuotations } from './hook.quotations';

const Quotations = () => {
  const {
    items,
    selectedItem,
    isLoading,
    setSelectedItem,
    createItem,
    updateItem,
    deleteItem
  } = useQuotations();

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const [isCreateSheetOpen, setIsCreateSheetOpen] = React.useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = React.useState(false);
  const [isPreviewSheetOpen, setIsPreviewSheetOpen] = React.useState(false);

  // Handle item selection based on screen size
  const handleItemSelect = (item: QuotationItem) => {
    setSelectedItem(item);
    if (!isLargeScreen) {
      setIsPreviewSheetOpen(true);
    }
  };

  const renderPanel = (content: React.ReactNode) => (
    <DotLoading isLoading={isLoading}>
      {content}
    </DotLoading>
  );

  return (
    <BaseLayout>
      <div className="flex fixed top-16 inset-x-0 bottom-0">
        {/* Left Panel */}
        <div className="w-full lg:w-[40%] h-full">
          <Card variant="ghost" className="p-2 sm:p-6 relative h-full">
            {renderPanel(
              <QuotationList
                items={items}
                selectedItem={selectedItem}
                onSelect={handleItemSelect}
                onDelete={deleteItem}
                onCreate={() => setIsCreateSheetOpen(true)}
              />
            )}
          </Card>
        </div>

        {/* Right Panel - Only visible on large screens */}
        <div className="hidden lg:block w-[60%] pr-6 py-6 h-full">
          <Card withHoverEffect className="relative h-full">
            {renderPanel(
              <QuotationPreview
                item={selectedItem}
                onEdit={() => setIsEditSheetOpen(true)}
              />
            )}
          </Card>
        </div>
      </div>

      {/* Preview Sheet (Mobile) */}
      <ComQuotationSheet
        isOpen={!isLargeScreen && isPreviewSheetOpen}
        onClose={() => setIsPreviewSheetOpen(false)}
        mode="preview"
        item={selectedItem}
        onEdit={() => {
          setIsPreviewSheetOpen(false);
          setIsEditSheetOpen(true);
        }}
      />

      {/* Create Sheet */}
      <ComQuotationSheet
        isOpen={isCreateSheetOpen}
        onClose={() => setIsCreateSheetOpen(false)}
        onSubmit={createItem}
        title="Create New Quotation"
        mode="create"
      />

      {/* Edit Sheet */}
      <ComQuotationSheet
        isOpen={isEditSheetOpen}
        onClose={() => setIsEditSheetOpen(false)}
        onSubmit={(title, amount) => {
          if (selectedItem) {
            updateItem(selectedItem.id, title, amount);
          }
        }}
        title="Edit Quotation"
        mode="edit"
        initialValues={selectedItem || undefined}
      />
    </BaseLayout>
  );
};

export default Quotations;