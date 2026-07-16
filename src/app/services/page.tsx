import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web and mobile applications, AI agents, SaaS products, cloud deployment, and more — every solution designed for your business.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
