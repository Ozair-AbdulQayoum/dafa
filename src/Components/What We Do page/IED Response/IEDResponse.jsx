import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import WhatIsIEDResponse from "./WhatIsIEDResponse";
import IEDResponseProcess from "./IEDResponseProcess";
import OurApproach from "./OurApproach";
import ImpactStats from "./ImpactStats";
export default function IEDResponse() {
  return (
    <div>
      <PageTitle title="IED Response" />
      <Hero />
      <WhatIsIEDResponse />
      <IEDResponseProcess />
      <OurApproach />
      <ImpactStats />
    </div>
  );
}
