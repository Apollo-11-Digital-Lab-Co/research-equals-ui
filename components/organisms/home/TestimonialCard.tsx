import cx from "classnames";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import NotchedCard from "../../atoms/NotchedCard";

export type TestimonialProp = {
  data: {
    name: string;
    message: string;
    position?: string;
    image?: string;
  };
} & HTMLAttributes<HTMLDivElement>;

export default function TestimonialCard({
  data: { name, message, position, image },
  ...props
}: TestimonialProp) {
  return (
    <NotchedCard
      {...props}
      className={cx(
        "flex flex-col items-start gap-6 px-10 pt-8 pb-20 dark:text-white",
        props?.className
      )}
    >
      {image && (
        <div className="border-2 border-slate-100 rounded-full w-20 h-20 overflow-hidden">
          <Image src={image} alt={name} width={80} height={80} layout="fixed" />
        </div>
      )}
      <p className="text-base md:text-lg">“{message}”</p>
      <div>
        <div className="font-bold">{name}</div>
        {position && <div>{position}</div>}
      </div>
    </NotchedCard>
  );
}
