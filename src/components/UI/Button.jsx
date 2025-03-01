import React from "react";
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
        {...buttonProps}
      type={buttonProps.type || 'button'}
      className={clsx(
         "py-4 px-6 rounded-[8px] w-fit text-lg",
          {
              'opacity-50 cursor-not-allowed': buttonProps.disabled,
              "bg-themeColor text-white": variant === 'primary',
              "bg-black text-white": variant === 'black',
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
