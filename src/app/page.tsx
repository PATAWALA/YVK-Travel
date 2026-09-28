import { Navbar } from "@/components/sections/Navbar";
import { FrictionBanner } from "@/components/sections/FrictionBanner";
import { Hero } from "@/components/sections/Hero";
import { PreQualifier } from "@/components/sections/PreQualifier";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Destinations } from "@/components/sections/Destinations";
import { Guarantees } from "@/components/sections/Guarantees";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Navbar />
      <FrictionBanner />
      <Hero />
      <PreQualifier />
      <ComparisonTable />
      <Destinations />
      <Guarantees />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}