import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import TeamOverview from "./TeamOverview";
import LeadershipManagement from "./LeadershipManagement";
import PeopleExpertise from "./PeopleExpertise";
import ProfessionalValues from "./ProfessionalValues";
export default function Members() {
  return (
    <div>
      <PageTitle title="Our Members" />

      <Hero />
      <TeamOverview />
      <LeadershipManagement />
      <PeopleExpertise />
      <ProfessionalValues />
    </div>
  );
}
