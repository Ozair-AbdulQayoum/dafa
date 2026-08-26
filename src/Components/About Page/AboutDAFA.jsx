import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import About from "./About";
import MissionVisionValues from "./MissionVisionValues";
import DirectorMessage from "./DirectorMessage";
import FundingFlow from "./FundingFlow";
export default function AboutPage() {
  return (
    <div>
      <PageTitle title="About" />

      <Hero />
      <About />
      <MissionVisionValues />
      <DirectorMessage />
      <FundingFlow />
    </div>
  );
}
