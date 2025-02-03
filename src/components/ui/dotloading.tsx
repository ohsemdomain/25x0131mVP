import React, { useState, useEffect } from 'react';

interface DotLoadingProps {
    isLoading: boolean;
    children: React.ReactNode;
    className?: string;
}

function DotLoadingSpinner() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="8" cy="24" r="4" fill="#2563eb">
                <animate
                    id="spinner_qFRN"
                    begin="0;spinner_OcgL.end+0.25s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="24;12;24"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                />
            </circle>
            <circle cx="24" cy="24" r="4" fill="#2563eb">
                <animate
                    begin="spinner_qFRN.begin+0.1s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="24;12;24"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                />
            </circle>
            <circle cx="40" cy="24" r="4" fill="#2563eb">
                <animate
                    id="spinner_OcgL"
                    begin="spinner_qFRN.begin+0.2s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="24;12;24"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                />
            </circle>
        </svg>
    );
}

export function DotLoading({
    isLoading,
    children,
    className = ''
}: DotLoadingProps) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 300); // Keeping exact same 300ms duration
            return () => clearTimeout(timer);
        } else {
            setShowLoader(true);
        }
    }, [isLoading]);

    return (
        <div className={`relative h-full ${className}`}>
            {showLoader && (
                <div className={`absolute inset-0 transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center h-full">
                        <DotLoadingSpinner />
                    </div>
                </div>
            )}
            <div className={`h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </div>
    );
}