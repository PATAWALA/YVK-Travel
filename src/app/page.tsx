import { FrictionBanner } from "@/components/sections/FrictionBanner";
import { Hero } from "@/components/sections/Hero";
import { PreQualifier } from "@/components/sections/PreQualifier";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Destinations } from "@/components/sections/Destinations";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <FrictionBanner />
      <Hero />
      <PreQualifier />
      <ComparisonTable />
      <Destinations />
      <Footer />
      <FloatingCTA />
    </main>
  );
}