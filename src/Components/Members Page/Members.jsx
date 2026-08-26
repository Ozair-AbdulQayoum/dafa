import React from "react";
import PageTitle from "../../Components/PageTitle";
import DepartmentPersonnel from "./DepartmentPersonnel";
import Hero from "./Hero";
export default function Members() {
  return (
    <div>
      <PageTitle title="Our Members" />
      <Hero />
      <DepartmentPersonnel />
    </div>
  );
}
