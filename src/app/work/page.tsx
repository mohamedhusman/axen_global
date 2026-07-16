import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Featured software projects by Solution Wings — dashboards, platforms, portals, and AI systems custom-built for real businesses.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
