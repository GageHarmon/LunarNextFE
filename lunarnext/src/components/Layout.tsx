import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  admin?: boolean; // Add the admin prop
}

export default function Layout({ children, admin }: LayoutProps) {
  return (
    <>
      <Navbar admin={admin} /> {/* Pass the admin prop to Navbar */}
      <main className="pt-20 w-full">{children}</main>
    </>
  );
}
