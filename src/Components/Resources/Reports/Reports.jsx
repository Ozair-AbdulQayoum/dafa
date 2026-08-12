import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import FeaturedReport from "./FeaturedReport";
import ReportLibrary from "./ReportLibrary";
export default function Reports() {
  return (
    <div>
      <PageTitle title="Our Report" />
      <Hero />
      <FeaturedReport />
      <ReportLibrary />
    </div>
  );
}
