import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./EOREHero.jsx";
import WhatIsEORE from "./WhatIsEORE.jsx";
import EOREProcess from "./EOREProcess.jsx";
import EORETargetGroups from "./EORETargetGroups.jsx";
import EOREImpactStats from "./EOREImpactStats.jsx";
export default function EORE() {
  return (
    <div>
      <PageTitle title="Explosive Ordnance Risk Education" />
      <Hero />
      <WhatIsEORE />
      <EOREProcess />
      <EORETargetGroups />
      <EOREImpactStats />
    </div>
  );
}
