import React from "react";
import PageTitle from "../../PageTitle";

import Hero from "./Hero";
import StoriesCards from "./StoriesCards";
import StoriesDetails from "./StoriesDetails";
export default function Stories() {
  return (
    <div>
      <PageTitle title="Lastest Stories Form Field" />

      <Hero />
      <StoriesCards />
      <StoriesDetails />
    </div>
  );
}
