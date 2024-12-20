import * as React from 'react';

import { cn } from '@/lib/utils';

export const Seperator = ({ text, className }: { text?: string, className?: string }) => {
    return (
        <div className={cn("flex items-center w-full", className)}>
            <div className={`flex-grow h-px ${text ?
                'bg-gradient-to-r from-transparent via-black-300 to-black-600 dark:via-white-600 dark:to-white-300'
                : 'bg-gradient-to-r from-transparent via-black-300 to-black-600 dark:via-white-600 dark:to-white-300'}`} />
            {text && (
                <span className="px-4 text-black dark:text-white">
                    {text}
                </span>
            )}
            <div className={`flex-grow h-px ${text ? 'bg-gradient-to-r from-black-600 via-black-300 to-transparent dark:from-white-300 dark:via-white-600' : 'bg-gradient-to-r from-black-800 via-gray-400 to-transparent dark:via-white-600 dark:from-white-300'}`} />
        </div>
    );
};

export default Seperator;