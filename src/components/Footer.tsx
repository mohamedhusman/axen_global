import Link from "next/link";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { company, services } from "@/lib/data";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.facebook.com/people/Solution-Wings/61579562647614/",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/solution-wings",
    label: "LinkedIn",
    icon: Linkedin,
  },
  // { href: "https://github.com/", label: "GitHub", icon: Github },
  {
    href: "https://www.instagram.com/solution_wings",
    label: "Instagram",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="">
                {/* wing mark */}
                <Image
                  src={"/solutionwings.webp"}
                  alt="Solution Wings"
                  width={32}
                  height={32}
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Solution<span className="text-muted">Wings</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A custom software development company. We engineer web, mobile,
              and AI-powered systems built specifically for your business — no
              templates, ever.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-[rgba(124,156,255,0.4)] hover:text-foreground"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-faint">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-faint">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-faint">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Mail size={15} /> {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Phone size={15} /> {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Solution Wings. All rights reserved.
          </p>
          <p className="font-mono text-xs text-faint">
            engineered, not templated
          </p>
        </div>
      </div>
    </footer>
  );
}
