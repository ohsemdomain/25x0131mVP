// hook.quotations.ts
import { useState, useEffect } from 'react';
import { QuotationItem } from './types.quotations';
import { StorageQuotationsService } from './service.storage.quotations';

export const useQuotations = () => {
  const [items, setItems] = useState<QuotationItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<QuotationItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulated loading
        const storedItems = StorageQuotationsService.getItems();
        setItems(storedItems);
        if (storedItems.length > 0) {
          setSelectedItem(storedItems[0]);
        }
      } catch (error) {
        console.error('Failed to load items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, []);

  const createItem = (title: string, amount: number) => {
    const newItem = {
      id: items.length + 1,
      title,
      amount
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    StorageQuotationsService.setItems(updatedItems);
    return newItem;
  };

  const updateItem = (id: number, title: string, amount: number) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, title, amount } : item
    );
    setItems(updatedItems);
    StorageQuotationsService.setItems(updatedItems);
    
    if (selectedItem?.id === id) {
      const updatedItem = { ...selectedItem, title, amount };
      setSelectedItem(updatedItem);
    }
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    StorageQuotationsService.setItems(updatedItems);
    if (selectedItem?.id === id) {
      setSelectedItem(updatedItems[0] || null);
    }
  };

  return {
    items,
    selectedItem,
    isLoading,
    setSelectedItem,
    createItem,
    updateItem,
    deleteItem
  };
};