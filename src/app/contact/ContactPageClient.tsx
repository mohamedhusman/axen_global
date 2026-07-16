"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  XCircle,
} from "lucide-react";
import { company, services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label } from "@/components/ui/input";
import { Reveal } from "@/components/motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const channels = [
  {
    icon: Mail,
    label: "Email us",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "Replies within one business day",
  },
  {
    icon: Phone,
    label: "Call us",
    value: company.phone,
    href: `tel:${company.phoneHref}`,
    note: "Mon–Fri, 9:00–18:00 (IST)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with an engineer",
    href: company.whatsapp,
    note: "Fastest way to reach us",
  },
  {
    icon: CalendarClock,
    label: "Schedule a consultation",
    value: "Book a free 30-minute call",
    href: `mailto:${company.email}?subject=Consultation%20Request`,
    note: "No obligation, no sales script",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  honeypot: "",
};

export default function ContactPageClient() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and project details.",
      });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    if (!form.service) {
      setStatus({ type: "error", message: "Please select a service." });
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();
      Object.entries(form).forEach(([k, v]) => payload.append(k, v));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });
      if (!res.ok)
        throw new Error("Something went wrong sending your message.");

      setStatus({
        type: "success",
        message:
          "Thanks — we received your inquiry. We'll reply within one business day.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? `${err.message} You can also reach us directly at ${company.email}.`
            : "Something went wrong. Please email us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pb-14 pt-36 md:pt-44">
        <div className="glow -top-32 left-1/3 h-[420px] w-[420px] bg-[#4c9eff]/12" />
        <div
          className="dot-grid absolute inset-x-0 top-0 h-[420px]"
          aria-hidden
        />
        <div className="container-site relative">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display max-w-3xl text-5xl leading-[1.05] md:text-6xl"
          >
            Let&apos;s scope your{" "}
            <span className="text-gradient">next build</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Tell us what you&apos;re trying to achieve. You&apos;ll hear back
            from an engineer — not a salesperson — with an honest assessment and
            next steps.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          {/* Channels */}
          <div className="space-y-4 lg:col-span-5">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass card-hover group flex items-center gap-5 rounded-2xl p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4c9eff]/25 to-[#7b6cff]/25 text-sky-300">
                    <c.icon size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-faint">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block truncate font-medium text-foreground">
                      {c.value}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {c.note}
                    </span>
                  </span>
                  <ArrowRight
                    size={17}
                    className="ml-auto shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-300"
                  />
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex items-start gap-3 rounded-2xl border border-line px-6 py-5 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-faint" />
                {company.address}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal className="lg:col-span-7" delay={0.12}>
            <form
              onSubmit={submit}
              className="glass rounded-3xl p-8 md:p-10"
              noValidate
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm text-muted">
                A few details are enough to start — we&apos;ll dig into the
                specifics together.
              </p>

              {status && (
                <div
                  role="status"
                  className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                  ) : (
                    <XCircle size={17} className="mt-0.5 shrink-0" />
                  )}
                  {status.message}
                </div>
              )}

              <div className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Fernando"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Work email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+94 77 123 4567"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Business Ltd."
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">What do you need built? *</Label>
                  <Select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" className="bg-gray-900">
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option
                        key={s.slug}
                        value={s.title}
                        className="bg-gray-900"
                      >
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet" className="bg-gray-900">
                      Not sure yet — let&apos;s discuss
                    </option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What problem should it solve? Any timeline or budget context helps."
                    required
                  />
                </div>

                {/* honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send inquiry
                      <Send size={17} />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-faint">
                  We only use your details to respond to this inquiry. Nothing
                  else.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
