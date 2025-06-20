import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { WorkingSection } from "../components/WorkingSection";
import { DownloadSection } from "../components/DownloadSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>

        {/* SEO content block */}
        <section className="text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            VOIS – Smart Voice Assistant for Laptops
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Control your laptop using just your voice. VOIS is an AI-powered voice assistant built with React and Vite that lets you open apps, run commands, and automate daily tasks effortlessly.
          </p>
        </section>

        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        {<WorkingSection /> }
        {<DownloadSection /> }
        {<ContactSection /> }
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
