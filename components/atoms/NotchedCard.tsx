import cx from "classnames";
import type { HTMLAttributes } from "react";

// up to the parent component to set bg color
export type NotchedCardProps = HTMLAttributes<HTMLDivElement>;

export default function NotchedCard(props: NotchedCardProps) {
  return (
    <div
      {...props}
      className={cx(
        "transition-colors ease-out duration-300",
        props?.className
      )}
      style={{
        ...props?.style,
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% calc(100% - min(25%, 100px)), calc(100% - min(25%, 100px)) 100%, 0 100%)",
      }}
    />
  );
}
