import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { primarySiteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(primarySiteUrl),
  title: {
    default: "Eona | Digital Visual Art & Game Studio",
    template: "%s | Eona Studio",
  },
  description:
    "Eona is a creative technology studio specializing in game development, digital visual art, and real-time interactive experiences.",
  openGraph: {
    title: "Eona | Digital Visual Art & Game Studio",
    description:
      "Game development, digital visual art, and real-time interactive experiences.",
    url: primarySiteUrl,
    siteName: "Eona",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
