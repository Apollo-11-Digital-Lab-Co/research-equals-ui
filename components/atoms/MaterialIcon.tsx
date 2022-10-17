import cx from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

export type MaterialIconProps = {
  icon: string | ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export default function MaterialIcon({ icon, ...props }: MaterialIconProps) {
  return (
    <span {...props} className={cx("material-icons", props?.className)}>
      {icon}
    </span>
  );
}
