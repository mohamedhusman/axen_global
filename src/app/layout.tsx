import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    default: "Solution Wings — Innovative Solutions for Business Growth",
    template: "%s — Solution Wings",
  },
  description:
    "Solution Wings designs and develops custom software: web applications, mobile apps, AI-powered systems, and enterprise platforms engineered around your business goals.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "AI agent development",
    "SaaS development",
    "software company Sri Lanka",
  ],
  openGraph: {
    title: "Solution Wings — Custom Software Development Company",
    description:
      "We design and develop modern web applications, mobile apps, AI-powered systems, and enterprise software tailored to your business goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
