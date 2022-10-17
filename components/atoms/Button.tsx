import cx from "classnames";
import type { ButtonBaseProps } from "./ButtonBase";
import ButtonBase from "./ButtonBase";

export type ButtonProps = {
  variant?: "standard" | "outlined";
  color?: "inherit" | "primary";
} & ButtonBaseProps;

export default function Button({
  variant = "standard",
  color = "inherit",
  children,
  href,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      href={href}
      className={cx(
        // common classes
        "px-8 py-4 text-button rounded-[56px] font-bold",
        // variant classes
        variant === "standard" && "duration-300 ease-out",
        variant === "outlined" && "py-[13px] border-[3px] duration-75",
        // variant/color classes
        variant == "standard" &&
          color === "primary" &&
          "bg-indigo-600 text-white",
        variant == "outlined" &&
          color === "primary" &&
          "border-indigo-700 text-indigo-700 dark:border-indigo-200 dark:text-indigo-200",
        // hover classes
        "hover:border-indigo-800 hover:bg-indigo-800 hover:text-white",
        // inherited classes
        props?.className
      )}
    >
      {children}
    </ButtonBase>
  );
}
