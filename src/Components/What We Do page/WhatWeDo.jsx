import React from "react";
import PageTitle from "../../Components/PageTitle";

import Hero from "./Hero";
import Activities from "./Activities";
import BeyondDemining from "./BeyondDemining";

export default function WhatWeDo() {
  return (
    <div>
      <PageTitle title="What We Do" />

      <Hero />
      <Activities />
      <BeyondDemining />
    </div>
  );
}
