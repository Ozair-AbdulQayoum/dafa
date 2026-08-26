import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import MissionVisionValues from "./MissionVisionValues";
import DirectorMessage from "./DirectorMessage";
import About from "./About";
export default function AboutPage() {
  return (
    <div>
      <PageTitle title="About" />

      <Hero />
      <About />
      <MissionVisionValues />
      <DirectorMessage />
    </div>
  );
}
