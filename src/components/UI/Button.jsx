import React from 'react';
import clsx from 'clsx';

export default function Button({
    children,
    variant = 'primary',
    className,
    icon,
    ...buttonProps
}) {
    return (
        <button
            // eslint-disable-next-line
            {...buttonProps}
            // eslint-disable-next-line react/button-has-type
            type={buttonProps.type || 'button'}
            className={clsx(
                'py-4 px-6 rounded-[8px] w-fit text-lg font-frank',
                {
                    'opacity-50 cursor-not-allowed': buttonProps.disabled,
                    'bg-themeColor hover:bg-hoverThemeColor text-white': variant === 'primary',
                    'bg-black hover:bg-[#101010] text-white': variant === 'black'
                },
                className
            )}
            onClick={buttonProps.onClick}
        >
            <div className="flex items-center gap-4">
                {children}
                {icon}
            </div>
        </button>
    );
}
