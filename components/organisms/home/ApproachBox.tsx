import cx from "classnames";
import Image from "next/image";
import type { HTMLAttributes, ReactNode } from "react";
import MaterialIcon from "../../atoms/MaterialIcon";

export type ApproachBoxProps = {
  data: {
    icon: string | ReactNode;
    color: "red" | "indigo";
    caption: string;
    title: string;
    image: string;
    imageDark?: string;
  };
} & HTMLAttributes<HTMLDivElement>;

export default function ApproachBox({
  data: { icon, color, caption, title, image, imageDark },
  ...props
}: ApproachBoxProps) {
  return (
    <div
      {...props}
      className={cx(
        "flex flex-col items-center px-4 rounded-2xl bg-indigo-50 dark:bg-gray-800 dark:text-white md:transition-transform md:scale-[0.967] md:hover:scale-100",
        props?.className
      )}
    >
      <div
        className={cx("flex flex-col gap-2 items-center pt-10 md:pt-14", {
          "text-rose-800": color === "red",
          "text-white": color === "indigo",
        })}
      >
        <span
          className={cx(
            "flex items-center justify-center rounded-full w-[54px] h-[54px]",
            {
              "bg-red-300": color === "red",
              "bg-indigo-600": color === "indigo",
            }
          )}
        >
          <MaterialIcon icon={icon} />
        </span>
        <span
          className={cx(
            "px-6 py-[10px] rounded-3xl text-sm font-bold uppercase",
            {
              "bg-red-300": color === "red",
              "bg-indigo-600": color === "indigo",
            }
          )}
        >
          {caption}
        </span>
      </div>
      <h3 className="my-2 md:mt-6 md:mb-10 text-2xl font-bold max-w-md">
        {title}
      </h3>
      <div className={cx({ "dark:hidden": imageDark })}>
        <Image
          src={image}
          alt="title"
          width={500}
          height={390}
          layout="intrinsic"
        />
      </div>
      {imageDark && (
        <div className="hidden dark:block">
          <Image
            src={imageDark}
            alt="title"
            width={500}
            height={390}
            layout="intrinsic"
          />
        </div>
      )}
    </div>
  );
}
