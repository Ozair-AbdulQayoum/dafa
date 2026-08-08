import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import DepartmentPersonnel from "./DepartmentPersonnel";
export default function Members() {
  return (
    <div>
      <PageTitle title="Our Members" />
      <Hero />
      <DepartmentPersonnel />
    </div>
  );
}
