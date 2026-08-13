import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import DisasterOverview from "./DisasterOverview";
import DisasterImpact from "./DisasterImpact";
import DisasterProcess from "./DisasterProcess";
import HowWeSupportCommunities from "./HowWeSupportCommunities";
import DisasterManagementActivities from "./DisasterManagementActivities";
import DisasterManagementApproach from "./DisasterManagementApproach";
export default function DisasterManagement() {
  return (
    <div>
      <PageTitle title="Emergency & Disaster Support" />
      <Hero />
      <DisasterOverview />
      <DisasterImpact />
      <DisasterProcess />
      <HowWeSupportCommunities />
      <DisasterManagementActivities />
      <DisasterManagementApproach />
    </div>
  );
}
