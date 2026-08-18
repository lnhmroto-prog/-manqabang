import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import FooterBand from "./components/FooterBand";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StorySection />
      <FooterBand />
    </main>
  );
}
