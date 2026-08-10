import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import ProjectImpact from "./ProjectImpact";
import ProjectLocations from "./ProjectLocations";
import ProjectCTA from "./ProjectCTA";
export default function Projects() {
  return (
    <div>
      <PageTitle title="Projects" />
      <Hero />
      <FeaturedProjects />
      <ProjectImpact />
      <ProjectLocations />
      <ProjectCTA />
    </div>
  );
}
