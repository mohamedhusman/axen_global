"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Briefcase,
  Box,
  Paperclip,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    industry: "",
    systems: "",
    estimatedRecords: "",
    message: "",
    preferredContact: "email",
    preferredTime: "",
    honeypot: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero load animations
      gsap.fromTo(
        ".hero-elem",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      // Info Cards stagger
      gsap.fromTo(
        ".info-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.4,
        },
      );

      // Form wrapper reveal
      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.size > 10 * 1024 * 1024) {
      setStatus({ type: "error", message: "Attachment too large. Max 10MB." });
      toast.error("Attachment too large. Max 10MB.");
      e.target.value = "";
      return;
    }
    setFile(f || null);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.service) return "Please select a service.";
    if (!form.message.trim()) return "Please describe your needs.";
    if (form.honeypot) return "Spam detected.";
    return null;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      toast.error(err);
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();
      Object.keys(form).forEach((k) =>
        payload.append(k, form[k as keyof typeof form]),
      );
      if (file) payload.append("attachment", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error(
          "Submission failed. Ensure SMTP variables are configured properly in .env if testing local.",
        );
      }

      setStatus({
        type: "success",
        message:
          "Thanks — we received your request. We'll reply within 48 hours.",
      });
      toast.success(
        "Thanks we received your request. We'll reply within 48 hours.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        industry: "",
        systems: "",
        estimatedRecords: "",
        message: "",
        preferredContact: "email",
        preferredTime: "",
        honeypot: "",
      });
      setFile(null);
    } catch (err: any) {
      setStatus({ type: "error", message: err.message });
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-24 pb-20 relative overflow-hidden"
    >
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-400/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="hero-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-6">
            <MessageSquare size={16} />
            Let's Talk
          </div>
          <h1 className="hero-elem text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Conversation
            </span>
          </h1>
          <p className="hero-elem text-lg text-slate-600 leading-relaxed">
            Fill out the form below to detail your project needs, or reach us
            through our direct channels. We aim to respond with a tailored
            strategy within 48 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <h3 className="hero-elem text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="info-card flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Email Us
                </p>
                <a
                  href="mailto:info@axenglobal.lk"
                  className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  info@axenglobal.lk
                </a>
              </div>
            </div>

            <div className="info-card flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Call Us
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  +94 777 510 851
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  +94 722 436 712
                </p>
              </div>
            </div>

            <div className="info-card flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Visit Us
                </p>
                <p className="text-lg font-semibold text-slate-900 leading-snug text-balance">
                  136 kandy road,
                  <br />
                  madawala bazar,
                  <br />
                  Sri Lanka
                </p>
              </div>
            </div>

            {/* careers */}

            {/* <div className="info-card mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-slate-50 opacity-10 pointer-events-none">
                <Briefcase size={120} />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-2 relative z-10">
                Looking for careers?
              </h4>
              <p className="text-slate-600 text-sm mb-4 relative z-10">
                We're always looking for talented individuals to join our team.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors relative z-10 group/link"
              >
                View Open Positions{" "}
                <ChevronRight
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div> */}
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <form
              ref={formRef}
              onSubmit={submit}
              className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Proposal
                </h2>
                <p className="text-slate-500">
                  Provide as much detail as possible to help us understand your
                  baseline.
                </p>
              </div>

              {/* Status Banner */}
              {status && (
                <div
                  className={`mb-8 p-4 rounded-2xl flex items-start gap-3 border ${
                    status.type === "success"
                      ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                      : "bg-red-50 border-red-100 text-red-800"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {status.type === "success" ? (
                      <Send size={18} />
                    ) : (
                      <MessageSquare size={18} />
                    )}
                  </div>
                  <strong className="font-medium text-sm">
                    {status.message}
                  </strong>
                </div>
              )}

              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Company Name
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="Your Business Ltd."
                    />
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 my-8"></div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Service Required *
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none"
                      >
                        <option value="">Select a service focus</option>
                        <option value="accounting">Accounting & Audit</option>
                        <option value="software">
                          Software Solutions / Custom App
                        </option>
                        <option value="advisory">
                          Business Advisory & Strategy
                        </option>
                        <option value="other">Other / Mixed</option>
                      </select>
                      <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Industry
                    </label>
                    <input
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="e.g. Retail, Manufacturing"
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Data Size / Records Estimate
                    </label>
                    <input
                      name="estimatedRecords"
                      value={form.estimatedRecords}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="e.g. 50k transactions/mo"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Current Systems Used
                    </label>
                    <div className="relative flex items-center">
                      <Box className="absolute left-4 text-slate-400 w-5 h-5" />
                      <input
                        name="systems"
                        value={form.systems}
                        onChange={handleChange}
                        className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                        placeholder="e.g. Tally, Shopify, Excel"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements, timeline, and the business challenges you're trying to solve..."
                  />
                </div>

                {/* File Upload */}
                <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-white focus-within:border-blue-500 focus-within:bg-blue-50/30 transition-colors">
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-3">
                      <Paperclip size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 mb-1">
                      Attach a file (optional)
                    </span>
                    <span className="text-xs text-slate-500 text-center max-w-xs">
                      Upload RFP requirements, data samples, or wireframes (Max
                      10MB).
                    </span>
                    <input
                      type="file"
                      accept=".csv,.xlsx,.xls,.pdf,.zip,.txt,.docx"
                      onChange={handleFile}
                      className="hidden"
                    />
                    {file && (
                      <div className="mt-4 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                        {file.name}
                      </div>
                    )}
                  </label>
                </div>

                {/* Honeypot hidden */}
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={handleChange}
                />

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:bg-blue-600 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {loading
                        ? "Transmitting Requirements..."
                        : "Submit Project Inquiry"}
                      {!loading && (
                        <Send
                          size={20}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      )}
                    </span>
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                    Safe & Secure. We only use your data to answer your request.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// Simple custom chevron icon
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
