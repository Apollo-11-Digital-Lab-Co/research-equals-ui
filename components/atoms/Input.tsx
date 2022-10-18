import cx from "classnames";
import { ChangeEventHandler, HTMLAttributes, ReactNode } from "react";

export type InputProps = {
  inputProps?: HTMLAttributes<HTMLInputElement>;
  startIcon?: ReactNode;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & HTMLAttributes<HTMLDivElement>;

export default function Input({
  inputProps,
  startIcon,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <div
      {...props}
      className={cx(
        "rounded-[4px] border-2 border-indigo-200 inline-flex bg-indigo-50 items-center",
        // dark mode
        "dark:border-gray-700 dark:bg-gray-700",
        props?.className
      )}
    >
      {startIcon && (
        <div
          className={cx(
            "flex items-center ml-3 text-indigo-300",
            // dark mode
            "dark:text-indigo-400"
          )}
        >
          {startIcon}
        </div>
      )}
      <input
        {...inputProps}
        value={value}
        onChange={onChange}
        className={cx(
          "border-none bg-transparent py-[6px] px-3 outline-none w-full inline-block text-indigo-700",
          // dark mode
          "dark:text-white",
          inputProps?.className
        )}
      />
    </div>
  );
}
