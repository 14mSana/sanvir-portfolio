import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanvir Kaur | Cybersecurity & Technology Portfolio",
  description: "Portfolio of Sanvir Kaur, a Cyber Security & Blockchain student building practical skills in cybersecurity, networking, Linux, programming, and security monitoring.",
  openGraph: {
    title: "Sanvir Kaur | Cybersecurity & Technology Portfolio",
    description: "Cyber Security & Blockchain student building practical skills through projects and hands-on learning.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
