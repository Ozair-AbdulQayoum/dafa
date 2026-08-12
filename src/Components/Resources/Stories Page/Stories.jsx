import React from "react";
import PageTitle from "../../PageTitle";
import Hero from "./Hero";
import FeaturedStories from "./FeaturedStories";
export default function Stories() {
  return (
    <div>
      <PageTitle title="Stories from the Field" />
      <Hero />
      <FeaturedStories />
    </div>
  );
}
