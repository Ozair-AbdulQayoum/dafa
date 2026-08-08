import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import OrganizationStructure from "./OrganizationStructure";
import DepartmentsUnits from "./DepartmentsUnits";
import OrganizationalCoordination from "./OrganizationalCoordination";

export default function OrganizationChart() {
  return (
    <div>
      <PageTitle title="Organization Chart" />

      <Hero />
      <OrganizationStructure />
      <DepartmentsUnits />
      <OrganizationalCoordination />
    </div>
  );
}
