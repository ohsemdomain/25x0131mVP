// service.storage.quotations.ts
import { QuotationItem } from './types.quotations';

export const StorageQuotationsService = {
    getItems: (): QuotationItem[] => {
        try {
            const items = localStorage.getItem('quotationItems');
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error('Failed to get items:', error);
            return [];
        }
    },
    setItems: (items: QuotationItem[]): void => {
        try {
            localStorage.setItem('quotationItems', JSON.stringify(items));
        } catch (error) {
            console.error('Failed to set items:', error);
        }
    }
};