import Header from "@/components/layout/header";
import "./globals.css";
import { Quicksand, Space_Mono } from "next/font/google";
import { GitHub, Linkedin, Youtube } from "react-feather";
import { SOCIAL } from "@/constants/profile";

export const metadata = {
  title: "Domenic Labbate",
  description: "Computer Engineer Portfolio",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-spacemono",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${spaceMono.variable} bg-primary font-sans text-dark`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mt-24 flex flex-1 flex-col items-center">
          {children}
        </main>
        <ul className="fixed bottom-4 left-4 hidden flex-col gap-2 lg:flex">
          <li className="cursor-pointer">
            <a href={SOCIAL.github}>
              <GitHub strokeWidth={1} size={30} />
            </a>
          </li>
          <li>
            <a href={SOCIAL.linkedin}>
              <Linkedin strokeWidth={1} size={30} />
            </a>
          </li>
          <li>
            <a href={SOCIAL.youtube}>
              <Youtube strokeWidth={1} size={30} />
            </a>
          </li>
        </ul>
      </body>
    </html>
  );
}
