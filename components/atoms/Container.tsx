import cx from "classnames";
import type { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container(props: ContainerProps) {
  return (
    <div
      {...props}
      className={cx("max-w-7xl px-4 xl:px-0 mx-auto", props?.className)}
    />
  );
}
