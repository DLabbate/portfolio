import Header from "@/components/layout/header";
import "./globals.css";
import { Quicksand, Space_Mono } from "next/font/google";
import { GitHub, Linkedin, Youtube } from "react-feather";
import { SOCIAL_MEDIA } from "@/constants/profile";
import SocialLink from "@/components/social-link";

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
        <div className="fixed bottom-4 left-4 hidden flex-col gap-2 lg:flex">
          {SOCIAL_MEDIA.map((item) => (
            <SocialLink key={item.platform} {...item} />
          ))}
        </div>
      </body>
    </html>
  );
}
