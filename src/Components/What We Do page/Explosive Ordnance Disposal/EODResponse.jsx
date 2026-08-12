import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import WhatIsEOD from "./WhatIsEOD";
import EODProcess from "./EODProcess";
import OurApproach from "./OurApproach";
import ImpactStats from "./ImpactStats";
export default function EODResponse() {
  return (
    <div>
      <PageTitle title="Explosive Ordnase Disposal" />
      <Hero />
      <WhatIsEOD />
      <EODProcess />
      <OurApproach />
      <ImpactStats />
    </div>
  );
}
