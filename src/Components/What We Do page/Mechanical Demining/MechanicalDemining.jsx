import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import WhatIsMechanicalDemining from "./WhatIsMechanicalDemining";
import MechanicalProcess from "./WhatIsMechanicalDemining";
import MechanicalApproach from "./MechanicalApproach";
import MechanicalImpact from "./MechanicalImpact";
export default function MechanicalDemining() {
  return (
    <div>
      <PageTitle title="Mechanical Demining" />

      <Hero />
      <WhatIsMechanicalDemining />
      <MechanicalProcess />
      <MechanicalApproach />
      <MechanicalImpact />
    </div>
  );
}
