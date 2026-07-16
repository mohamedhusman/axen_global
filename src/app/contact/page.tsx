import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with Solution Wings. Tell us about your project and we'll respond with an honest assessment and a clear estimate.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
