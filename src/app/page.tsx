import HeroSection from "../components/HeroSection";
import ProblemStatement from "../components/ProblemStatement";
import FeaturesSolutions from "../components/FeaturesSolutions";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <HeroSection />
        <ProblemStatement />
        <FeaturesSolutions />
        <HowItWorks />
        <Benefits />
      </main>
    </div>
  );
}
