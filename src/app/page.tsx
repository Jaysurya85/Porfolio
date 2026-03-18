import { ContactSection } from "@/components/ContactSection";
import { CodeforcesSection } from "@/components/CodeforcesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-20 pt-16 md:pt-24">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CodeforcesSection />
        <ContactSection />
      </main>
    </div>
  );
}
