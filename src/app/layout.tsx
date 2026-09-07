import type { Metadata } from "next";
import { Staatliches, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-stack-sans-headline",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Consistency-ai",
  description: "consistencyai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${staatliches.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
