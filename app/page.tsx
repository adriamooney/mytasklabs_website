import {
  Hero,
  HowItWorks,
  // CaseStudyKnowledge,
  // CaseStudyLeadQualification,
  OurDifference,
  Verticals,
  BeforeAfter,
  Services,
  LeadMagnet,
  FinalCTA,
  Team
} from "@/components";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero calendlyUrl={CALENDLY_URL} />
      <HowItWorks tone="dark" />
      <OurDifference tone="light" />
      <Verticals tone="dark" />
      <BeforeAfter tone="light" />
      <Services tone="dark" />
      <LeadMagnet tone="light" />
      <Team tone="dark" />
      <FinalCTA calendlyUrl={CALENDLY_URL} tone="light" />
    </div>
  );
}
