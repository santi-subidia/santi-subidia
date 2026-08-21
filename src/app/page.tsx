import { InteractiveCanvas } from "@/components/canvas/InteractiveCanvas";
import { HeaderNav } from "@/components/navigation/HeaderNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsTelemetry } from "@/components/skills/SkillsTelemetry";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Interactive Particle Physics Canvas */}
      <InteractiveCanvas />

      {/* Background Subtle Radial Glow */}
      <div className="fixed inset-0 pointer-events-none bg-radial-glow z-0" />

      {/* Floating Header & Navigation Hub */}
      <HeaderNav />

      {/* Content Stream */}
      <div className="relative z-10 space-y-8">
        <HeroSection />
        <ProjectsSection />
        <SkillsTelemetry />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

