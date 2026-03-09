import {
  Hero,
  Team,
  TheRealProblem,
  WhatIBuild,
  HowItWorks,
  // CaseStudyKnowledge,
  // CaseStudyLeadQualification,
  Services,
  FinalCTA,
} from "@/components";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero calendlyUrl={CALENDLY_URL} />
      
      <TheRealProblem />
      <WhatIBuild />
      <HowItWorks />
      <Services />
      <Team />
      <FinalCTA calendlyUrl={CALENDLY_URL} />
    </div>
  );
}
