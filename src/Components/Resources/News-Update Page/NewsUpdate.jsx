import React from "react";
import PageTitle from "../../PageTitle";
import NewsHero from "./NewsHero";
import LatestNews from "./LatestNews";
export default function NewsUpdate() {
  return (
    <div>
      <PageTitle title="News & Updates" />
      <NewsHero />
      <LatestNews />
    </div>
  );
}
