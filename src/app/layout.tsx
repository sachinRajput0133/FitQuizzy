import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Affiliate Quiz - Find Your Perfect Products",
    template: "%s | Affiliate Quiz",
  },
  description:
    "Take our interactive quizzes to discover the perfect products tailored to your needs with honest recommendations and reviews.",
  keywords: [
    "affiliate quiz",
    "product recommendations",
    "interactive quiz",
    "product finder",
  ],
  authors: [{ name: "Affiliate Quiz Team" }],
  creator: "Affiliate Quiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affiliate-quiz.com",
    title: "Affiliate Quiz - Find Your Perfect Products",
    description:
      "Take our interactive quizzes to discover the perfect products tailored to your needs with honest recommendations and reviews.",
    siteName: "Affiliate Quiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Quiz - Find Your Perfect Products",
    description:
      "Take our interactive quizzes to discover the perfect products tailored to your needs with honest recommendations and reviews.",
    creator: "@affiliatequiz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col justify-center items-center  border w-full">
            <div className="w-full border border-b flex justify-center items-center">
              <SiteHeader />
            </div>
            <main className="flex-1">{children}</main>
            <div className="w-full border flex justify-center items-center">
              <SiteFooter />
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
