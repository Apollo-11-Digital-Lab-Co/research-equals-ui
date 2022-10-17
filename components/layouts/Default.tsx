import { PropsWithChildren } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function Default({ children }: PropsWithChildren) {
  return (
    <div>
      <Header className="bg-indigo-50 dark:bg-gray-900 border-b border-b-[#C9C6ED] border-opacity-30" />
      <main className="dark:bg-gray-900">{children}</main>
      <Footer />
    </div>
  );
}
