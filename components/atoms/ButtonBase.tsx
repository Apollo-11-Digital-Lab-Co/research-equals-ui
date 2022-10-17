import cx from "classnames";
import type { HTMLAttributes } from "react";

export type ButtonBaseProps = {
  href?: string;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export default function ButtonBase({
  children,
  href,
  ...props
}: ButtonBaseProps) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      {...props}
      href={href}
      className={cx(
        // common classes
        "flex items-center justify-center transition-colors",
        // inherited classes
        props?.className
      )}
    >
      {children}
    </Tag>
  );
}
