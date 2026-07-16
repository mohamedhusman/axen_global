import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solution Wings is a custom software development company. We partner with startups, SMEs, and enterprises to design, build, and maintain scalable digital products.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
