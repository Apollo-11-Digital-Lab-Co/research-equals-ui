import cx from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import MaterialIcon from "../components/atoms/MaterialIcon";
import NotchedCard from "../components/atoms/NotchedCard";
import Layout from "../components/layouts/Default";
import ApproachBox from "../components/organisms/home/ApproachBox";
import StepsContainer from "../components/organisms/home/StepsContainer";
import TestimonialCard from "../components/organisms/home/TestimonialCard";

const APPROACH_DATA: {
  icon: string | ReactNode;
  color: "red" | "indigo";
  caption: string;
  title: string;
  image: string;
}[] = [
  {
    icon: "close",
    color: "red",
    caption: "THE OLD WAY OF DOING RESEARCH",
    title: "The hard work you put in research is invisible and undocumented",
    image: "/images/home/old-way.svg",
  },
  {
    icon: "done",
    color: "indigo",
    caption: "THE RESEARCHEQUALS PROCESS",
    title: "Get a clear picture of your research journey from start to finish",
    image: "/images/home/new-way.svg",
  },
];

const STEPS_DATA: {
  title: string;
  description: string;
  image: {
    src: string;
    srcDark?: string;
    width: number;
    height: number;
  };
}[] = [
  {
    title: "Create a module for all types of research.",
    description:
      "Publish all outputs of your resarch like text, data, code, media and anything else that you like. Each step gets a DOI.",
    image: {
      src: "/images/home/create-module.png",
      srcDark: "/images/home/create-module-dark.png",
      width: 750,
      height: 751,
    },
  },
  {
    title: "Add & link modules as your journey progresses",
    description:
      "Connect modules as you go along. You can link and fork paths as you decide the next step of the process.",
    image: {
      src: "/images/home/add-link.svg",
      width: 800,
      height: 447,
    },
  },
  {
    title: "Collaborate & keep everyone on the loop",
    description:
      "See all activity that is happening on your research. Get approvals from your co-authors before publishing.",
    image: {
      src: "/images/home/collaborate.png",
      srcDark: "/images/home/collaborate-dark.png",
      width: 800,
      height: 610,
    },
  },
];

const FREE_ACCESS_DATA: { label: string; href?: string }[] = [
  {
    label: "Publish research modules",
  },
  {
    label: "Create & share collections",
  },
  {
    label: "Collaborate with others",
  },
  {
    label: "CC0 Public Domain Dedication",
    href: "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
  },
  {
    label: "CC BY 4.0",
    href: "https://creativecommons.org/licenses/by/4.0/legalcode",
  },
];

const COPYRIGHT_DATA: { price: number; label: string; href?: string }[] = [
  {
    price: 149.99,
    label: "CC BY-SA 4.0",
    href: "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
  },
  {
    price: 194.99,
    label: "CC BY-NC 4.0",
    href: "https://creativecommons.org/licenses/by-nc/4.0/legalcode",
  },
  {
    price: 249.99,
    label: "CC BY-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nd/4.0/legalcode",
  },
  {
    price: 329.99,
    label: "CC BY-NC-SA 4.0",
    href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    price: 429.99,
    label: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode",
  },
  {
    price: 549.99,
    label: "All rights reserved",
    href: "https://en.wikipedia.org/wiki/All_rights_reserved",
  },
];

const DUMMY_TESTIMONIAL = {
  name: "Jane Doe",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, interdum amet velit ipsum feugiat nulla mattis ut.",
  position: "Researcher",
  image: "/images/home/avatar.png",
};
const TESTIMONIALS_DATA: {
  name: string;
  message: string;
  image?: string;
  position?: string;
  className?: string;
}[] = [
  { className: "md:hover:bg-indigo-700" },
  { className: "md:hover:bg-pink-700" },
  { className: "md:hover:bg-cyan-600" },
].map((data) => ({ ...data, ...DUMMY_TESTIMONIAL }));

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="py-10 md:py-28 bg-indigo-50 dark:bg-transparent md:text-center">
        <Container className="flex flex-col gap-4 items-center px-7">
          <h1 className="max-w-5xl text-4xl md:text-7xl font-bold md:font-extrabold text-slate-800 dark:text-white">
            Your research journey made visible &amp; accessible
          </h1>
          <p className="max-w-[800px] text-base md:text-xl text-slate-600 dark:text-slate-300">
            Join a community of researchers who are building a new movement of
            research: open access, collaborative, and free for all.
          </p>
          {/* TODO CTA_LINK */}
          {/* <Link href="<CTA_LINK>" passHref> */}
          <Button color="primary" className="mt-4 w-full md:w-auto">
            Give Research Equals a Try
          </Button>
          {/* </Link> */}
        </Container>
      </section>
      <section className="xl:py-20 py-10 px-6 bg-indigo-50 dark:bg-transparent">
        <Container>
          <Image
            src="/images/home/hero.png"
            alt="Resource Equals"
            layout="responsive"
            width={1280}
            height={881}
          />
        </Container>
      </section>
      <section className="py-10 md:py-28 text-center">
        <Container className="flex flex-col gap-10 md:gap-20 items-center ">
          <h2 className="max-w-[800px] text-3xl md:text-6xl font-bold text-slate-800 dark:text-white">
            A transparent approach to your research process
          </h2>
          <div className="flex flex-col items-center justify-center lg:flex-row gap-10 md:gap-16 w-full">
            {APPROACH_DATA.map((data, idx) => (
              <ApproachBox key={idx} data={data} className="w-full" />
            ))}
          </div>
          {/* TODO CTA_LINK */}
          {/* <Link href="<CTA_LINK>" passHref> */}
          <Button color="primary">Give Research Equals a Try</Button>
          {/* </Link> */}
        </Container>
      </section>
      <section className="text-center">
        <Container className="flex flex-col items-center gap-10 md:gap-0 py-10 md:py-0">
          <div className="flex flex-col items-center gap-6 md:py-20">
            <h2 className="max-w-[720px] text-3xl md:text-6xl font-bold text-slate-800 dark:text-white">
              Publish each step of your journey wherever your research takes you
            </h2>
            <p className="max-w-[640px] md:text-lg text-slate-600 dark:text-slate-300">
              See the whole picture from which your research findings arise. Be
              able to trace, link and see the connections between each step of
              your research.
            </p>
          </div>
          {STEPS_DATA.map((data, idx) => (
            <StepsContainer key={idx} data={data} className="w-full" />
          ))}
        </Container>
      </section>
      <section>
        <Container className="pt-10">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <h2 className="max-w-[800px] text-3xl md:text-6xl font-bold text-slate-800 dark:text-white">
              Open access by default
            </h2>
            <p className="max-w-[640px] text-base md:text-lg text-slate-600 dark:text-slate-300">
              Publish for free when you choose open access. If you need a more
              restrictive license, you can pay to close.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-center gap-10 py-10 lg:py-20 px-8 lg:px-16">
            <div className="w-full max-w-[500px] px-6 md:px-12 lg:px-16 py-10 md:pt-16 md:pb-28 rounded-2xl text-white bg-indigo-700 space-y-10">
              <span className="text-sm md:text-lg font-bold bg-amber-200 py-[10px] px-3 lg:px-12 rounded-lg -ml-14 lg:-ml-18 md:-ml-32 text-black">
                Free &amp; Open Access
              </span>
              <div className="flex items-center gap-4 md:pt-10">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    d="M25.6443 16.2393C25.1429 16.0753 24.593 16 24 16C21.062 16 19 18.2494 19 24C19 25.7934 19.2005 27.2462 19.5656 28.3966L25.6443 16.2393ZM28.4704 19.5313L22.3722 31.7276C22.8746 31.9124 23.4203 32 24 32C27.0825 32 29 29.9663 29 24C29 22.1519 28.816 20.6811 28.4704 19.5313ZM24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM24 12C29.346 12 33 15.8754 33 24C33 32.1246 29.346 36 24 36C18.7714 36 15 31.8858 15 24C15 16.1142 18.7714 12 24 12Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-3xl lg:text-4xl font-bold">Zero Cost</h3>
              </div>
              <ul className="list-none space-y-6">
                {FREE_ACCESS_DATA.map((data, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-base lg:text-lg"
                  >
                    <MaterialIcon icon="check_circle" className="text-xl" />

                    {data.href ? (
                      <a href={data.href} rel="nofollow noreferrer">
                        {data.label}
                      </a>
                    ) : (
                      <span>{data.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full max-w-[500px] px-6 md:px-12 lg:px-16 pt-10 pb-6 md:pt-14 md:pb-4 rounded-2xl text-white bg-slate-800 space-y-6">
              <div className="flex items-center gap-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.76 18.28C26.32 18.4 26.98 20.58 27.02 21.6H30.6C30.44 17.64 27.62 15.22 23.7 15.22C19.28 15.22 16 18 16 24.28C16 28.16 17.86 32.76 23.68 32.76C28.12 32.76 30.5 29.46 30.56 26.86H26.98C26.92 28.04 26.08 29.62 23.72 29.74C21.1 29.66 20 27.62 20 24.28C20 18.5 22.56 18.32 23.76 18.28ZM24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40Z"
                    fill="white"
                  />
                </svg>
                <h3 className="text-3xl lg:text-4xl font-bold">Pay to close</h3>
              </div>
              <table className="table-auto w-full">
                <tbody>
                  {COPYRIGHT_DATA.map((data, idx) => (
                    <tr key={idx}>
                      <td
                        className={cx(
                          "py-4 pr-4 text-base lg:text-xl font-semibold",
                          {
                            "border-t border-slate-700": idx > 0,
                          }
                        )}
                      >
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "EUR",
                        }).format(data.price)}
                      </td>
                      <td
                        className={cx("w-full py-4 pl-4 text-base lg:text-lg", {
                          "border-t border-slate-700": idx > 0,
                        })}
                      >
                        {data.href ? (
                          <a href={data.href} rel="nofollow noreferrer">
                            {data.label}
                          </a>
                        ) : (
                          data.label
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-amber-300 lg:bg-transparent">
        <Container className="md:px-10 md:pt-16 md:pb-24">
          <NotchedCard className="lg:bg-amber-300 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20 py-10 md:py-12 px-4 md:px-20">
            <div className="max-w-[500px] flex flex-col items-start gap-4 text-slate-800">
              <div className="bg-indigo-700 text-white inline-flex px-4 py-2 rounded-lg">
                ✨ New feature!
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Create collections
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                Curate &amp; share all types of research work and publication.
                Keep track of relevant and interesting work in your field.
              </p>
              {/* TODO CTA_LINK */}
              {/* <Link href="<CTA_LINK>"> */}
              <a href="">
                <span className="flex items-center font-bold text-lg">
                  Learn more
                  <MaterialIcon icon="arrow_forward" className="ml-2" />
                </span>
              </a>
              {/* </Link> */}
            </div>
            <div className="mr-[min(calc(25%-100px),20px)]">
              <Image
                src="/images/home/collections.png"
                alt="Collections"
                width={611}
                height={538}
                layout="intrinsic"
              />
            </div>
          </NotchedCard>
        </Container>
      </section>
      <section className="lg:bg-indigo-50 dark:lg:bg-transparent">
        <Container className="flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <h2 className="max-w-[800px] text-3xl md:text-6xl font-bold text-slate-800 dark:text-white">
              Freedom to publish your unique research process
            </h2>
            <p className="max-w-[640px] text-base md:text-lg text-slate-600 dark:text-slate-300">
              From students, researchers to published authors, ResearchEquals
              can help you publish your research in your own terms.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {TESTIMONIALS_DATA.map(({ className, ...data }, idx) => (
              <TestimonialCard
                key={idx}
                data={data}
                className={cx("md:hover:text-white cursor-pointer", className)}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-indigo-700 text-white ">
        <Container className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-6 py-20 md:py-24">
          <p className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            Join a community of people who are building open access research
          </p>
          {/* TODO CTA_LINK */}
          {/* <Link href="<CTA_LINK>" passHref> */}
          <Button
            variant="outlined"
            color="inherit"
            className="lg:min-w-[340px]"
          >
            Sign up for ResearchEquals
          </Button>
          {/* </Link> */}
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
