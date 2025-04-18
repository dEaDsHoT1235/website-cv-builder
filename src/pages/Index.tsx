
import { AboutMe } from "@/components/AboutMe";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <SocialLinks />
    </div>
  );
};

export default Index;
