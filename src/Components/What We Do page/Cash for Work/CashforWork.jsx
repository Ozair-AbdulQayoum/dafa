import React from "react";
import PageTitle from "../../PageTitle";
import CashForWorkHero from "./CashForWorkHero";
import CashForWorkImpact from "./CashForWorkImpact";
import CashForWorkApproach from "./CashForWorkApproach";
import CashForWorkProject from "./CashForWorkProject";
export default function CashforWork() {
  return (
    <div>
      <PageTitle title="Cash for Work" />

      <CashForWorkHero />
      <CashForWorkImpact />
      <CashForWorkApproach />
      <CashForWorkProject />
    </div>
  );
}
