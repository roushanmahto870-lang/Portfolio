import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Designer & Developer",
  description: "A minimal portfolio inspired by sethlukin.com, featuring 3D interactions and smooth animations.",
  keywords: ["portfolio", "designer", "developer", "web design", "frontend", "react", "next.js", "3d", "spline"],
  authors: [{ name: "Ronny" }],
  openGraph: {
    title: "Portfolio | Designer & Developer",
    description: "A minimal portfolio inspired by sethlukin.com",
    type: "website",
    locale: "en_US",
    siteName: "Ronny's Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import SmoothScroll from "@/components/SmoothScroll";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} antialiased bg-background text-foreground md:cursor-none`}
      >
        <SmoothScroll>
          <MouseFollower />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
