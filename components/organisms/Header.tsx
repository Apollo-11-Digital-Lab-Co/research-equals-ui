import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { useState } from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import IconButton from "../molecules/IconButton";
import SearchInput from "../molecules/SearchInput";

export default function Header(props: HTMLAttributes<HTMLElement>) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header {...props}>
      <Container className="flex items-center py-6 gap-6 md:gap-7">
        <div className="h-12 md:h-14 w-12 md:w-14">
          <Image
            src="/images/logo.svg"
            alt="ResearchEquals"
            width={56}
            height={56}
            layout="responsive"
          />
        </div>
        <div className="flex-1 text-right">
          {/* TODO control search input behaviour using value/onChange */}
          <SearchInput className="w-full xl:max-w-[640px]" />
        </div>
        {/* desktop nav */}
        <nav className="hidden md:flex items-center justify-end gap-4">
          {/* TODO recheck href */}
          <Link href="/login" passHref>
            <Button variant="outlined" color="primary">
              Log in
            </Button>
          </Link>
          {/* TODO recheck href */}
          <Link href="/signup" passHref>
            <Button color="primary">Try it FREE</Button>
          </Link>
        </nav>
        {/* mobile nav */}
        <IconButton
          className="relative md:hidden text-indigo-600 dark:text-indigo-300"
          icon={
            <>
              <span
                className={cx(
                  "transition-all ease-out absolute top-0 left-0",
                  isOpen ? "opacity-100 delay-75" : "opacity-0"
                )}
              >
                close
              </span>
              <span
                className={cx(
                  "transition-all ease-out absolute top-0 left-0",
                  !isOpen ? "opacity-100 delay-75" : "opacity-0"
                )}
              >
                menu
              </span>
            </>
          }
          onClick={() => setOpen(!isOpen)}
        />
      </Container>
    </header>
  );
}
