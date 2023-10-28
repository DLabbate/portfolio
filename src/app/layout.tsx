import "./globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { SOCIAL_MEDIA } from "@/constants/profile";
import { SocialLink } from "@/components/social";
import { ThemeProvider } from "@/components/theme";
import { Footer, Header } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Domenic Labbate",
  description: "Computer Engineer Portfolio",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
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
      className={`${workSans.variable} ${spaceMono.variable} scroll-smooth font-sans`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col items-center bg-primary-50 text-light dark:bg-primary-950 dark:text-dark">
        <ThemeProvider attribute="class">
          <Header />
          <main className="ml-auto mr-auto mt-24 flex w-[90%] max-w-7xl flex-1 flex-col items-center">
            {children}
          </main>
          <div className="fixed bottom-4 left-4 hidden flex-col gap-2 xl:flex">
            {SOCIAL_MEDIA.map((item) => (
              <SocialLink key={item.platform} {...item} />
            ))}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
