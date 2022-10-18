import cx from "classnames";
import { HTMLAttributes, MouseEventHandler } from "react";
import MaterialIcon from "../atoms/MaterialIcon";

export type AnnouncementBannerProps = {
  open?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
} & HTMLAttributes<HTMLDivElement>;

export default function AnnouncementBanner({
  open,
  onClose,
  children,
  ...props
}: AnnouncementBannerProps) {
  return (
    <div
      {...props}
      className={cx(
        "relative text-center bg-indigo-700 text-indigo-100 transition-all ease-out text-sm md:text-base leading-[1.4] md:leading-[1.6]",
        open && "min-h-[40px] px-4 py-2",
        !open && "h-0 opacity-0",
        props?.className
      )}
    >
      {children}
      <button
        onClick={onClose}
        className="absolute right-4 top-[calc(50%-12px)] "
      >
        <MaterialIcon icon="close" className="text-base text-indigo-200" />
      </button>
    </div>
  );
}

// TODO can use Context API / Redux to manage banner open state and content
