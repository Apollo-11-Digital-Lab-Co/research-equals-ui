import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import AnnouncementBanner from "../organisms/AnnouncementBanner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function Default({ children }: PropsWithChildren) {
  // by default, annnouncement banner is open
  const [isAnnouncementBannerOpen, setAnnouncementBannerOpen] = useState(true);

  return (
    <div>
      {/* TODO can use Context API / Redux to manage banner open state and content */}
      <AnnouncementBanner
        open={isAnnouncementBannerOpen}
        onClose={() => setAnnouncementBannerOpen(false)}
      >
        Want to learn about &#123;Topic&#125; <br className="md:hidden" />
        <Link href="/">
          <a className="underline">👉 Join a Research Equals Cohort</a>
        </Link>
      </AnnouncementBanner>
      <Header className="bg-indigo-50 dark:bg-gray-900 border-b border-b-[#C9C6ED] border-opacity-30" />
      <main className="dark:bg-gray-900">{children}</main>
      <Footer />
    </div>
  );
}
