import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
export default function Projects() {
  return (
    <div>
      <PageTitle title="Projects" />
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
