import { ReactNode } from "react";
import { Sidebar } from "./Sidebar.tsx";
import {Footer} from "./Footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-primary-50 ">
      <Sidebar />
      <main className="flex-1">
        <div className="">{children}</div>
        <Footer />
      </main>
    </div>
  );
};
