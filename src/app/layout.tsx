import type { Metadata } from "next";
import { Staatliches, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

const stackSansHeadline = Stack_Sans_Headline({
  weight: "400",
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
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
      className={`${staatliches.variable} ${stackSansHeadline.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
