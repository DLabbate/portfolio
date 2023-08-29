import Header from "@/components/layout/header";
import "./globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { SOCIAL_MEDIA } from "@/constants/profile";
import SocialLink from "@/components/social-link";
import Footer from "@/components/layout/footer";
import ThemeProvider from "@/components/theme/theme-provider";

export const metadata = {
  title: "Domenic Labbate",
  description: "Computer Engineer Portfolio",
};

const quicksand = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
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
      className={`${quicksand.variable} ${spaceMono.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col items-center bg-primary-50 text-light dark:bg-primary-950 dark:text-dark">
        <ThemeProvider attribute="class">
          <Header />
          <main className="ml-[5vw] mr-[5vw] mt-24 flex max-w-7xl flex-1 flex-col items-center">
            {children}
          </main>
          <div className="fixed bottom-4 left-4 hidden flex-col gap-2 xl:flex">
            {SOCIAL_MEDIA.map((item) => (
              <SocialLink key={item.platform} {...item} />
            ))}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
