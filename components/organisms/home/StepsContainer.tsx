import cx from "classnames";
import Image from "next/image";
import Container, { ContainerProps } from "../../atoms/Container";

export type StepsContainerProps = {
  data: {
    title: string;
    description: string;
    image: {
      src: string;
      srcDark?: string;
      width: number;
      height: number;
    };
  };
} & ContainerProps;

export default function StepsContainer({
  data: {
    title,
    description,
    image: { src, srcDark, width, height },
  },
  ...props
}: StepsContainerProps) {
  return (
    <Container
      {...props}
      className={cx(
        "flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:py-20",
        props?.className
      )}
    >
      <div className="flex flex-col gap-4 md:gap-6 md:max-w-[500px] text-left">
        <h3 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white">
          {title}
        </h3>
        <p className="md:text-lg text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <div className={cx("w-full md:w-[600px]", { "dark:hidden": srcDark })}>
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
      {srcDark && (
        <div className="w-full md:w-[600px] hidden dark:block">
          <Image
            src={srcDark}
            alt={title}
            width={width}
            height={height}
            layout="responsive"
          />
        </div>
      )}
    </Container>
  );
}
