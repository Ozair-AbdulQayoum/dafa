import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import MissionVisionValues from "./MissionVisionValues";
import History from "./History";
import HowWeWork from "./HowWeWork";
import Commitment from "./Commitment";
import Organization from "./Organization";
export default function AboutPage() {
  return (
    <div>
      <PageTitle title="About" />

      <Hero />
      <WhoWeAre />
      <MissionVisionValues />
      <History />
      <HowWeWork />
      <Commitment />
      <Organization />
    </div>
  );
}
