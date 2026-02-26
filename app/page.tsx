import {
  Header,
  Hero,
  About,
  TheRealProblem,
  WhatIBuild,
  HowItWorks,
  // CaseStudyKnowledge,
  // CaseStudyLeadQualification,
  Services,
  FinalCTA,
  Footer,
} from "@/components";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero calendlyUrl={CALENDLY_URL} />
      <About />
      <TheRealProblem />
      <WhatIBuild />
      <HowItWorks />
      {/* <CaseStudyKnowledge />
      <CaseStudyLeadQualification /> */}
      <Services />
      <FinalCTA calendlyUrl={CALENDLY_URL} />
      <Footer />
    </div>
  );
}
