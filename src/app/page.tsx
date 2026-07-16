import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Projects, { CTA } from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hairline" />
      <About />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <Projects />
      <CTA />
    </>
  );
}
