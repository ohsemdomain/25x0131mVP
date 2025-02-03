import { Folder, Search, BarChart2, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
    variant?: 'default' | 'search' | 'chart' | 'inbox' | 'preview';
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

const EmptyState = ({
    variant = "default",
    title,
    description,
    actionLabel,
    onAction
}: EmptyStateProps) => {
    const variants = {
        default: {
            icon: Folder,
            title: "No items found",
            description: "Get started by creating your first item"
        },
        search: {
            icon: Search,
            title: "No results found",
            description: "Try adjusting your search terms or filters"
        },
        chart: {
            icon: BarChart2,
            title: "No data available",
            description: "Data will appear here once it's available"
        },
        inbox: {
            icon: Inbox,
            title: "Your inbox is empty",
            description: "New items will appear here"
        },
        preview: {
            title: "No preview available",
            description: "Preview will be available once data is created"
        }
    };

    const currentVariant = variants[variant] || variants.default;
    const Icon = currentVariant.icon;

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-secondary/5 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center space-y-6 max-w-md text-center animate-fade-in">
                {variant !== 'preview' && Icon && (
                    <div className="relative">
                        <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-16 h-16 text-accent" aria-hidden="true" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background rounded-full border-4 border-background flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-accent/40" />
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <h3 className="text-2xl font-heading text-foreground">
                        {title || currentVariant.title}
                    </h3>
                    <p className="text-body text-accent">
                        {description || currentVariant.description}
                    </p>
                </div>

                {variant !== 'preview' && actionLabel && onAction && (
                    <Button onClick={onAction}>
                        {actionLabel}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default EmptyState;