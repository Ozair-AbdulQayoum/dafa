import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import WhatIsManualDemining from "./WhatIsManualDemining";
import HowManualDeminingWorks from "./HowManualDeminingWorks";
import OurApproach from "./OurApproach";
export default function ManualDemining() {
  return (
    <div>
      <PageTitle title="Manual Demining" />
      <Hero />
      <WhatIsManualDemining />
      <HowManualDeminingWorks />
      <OurApproach />
    </div>
  );
}
