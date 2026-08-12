import React from "react";
import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import KnowledgeCategories from "./KnowledgeCategories";
import Knowledgedetail from "./KnowledgeDetail ";
import SafetyGuidance from "./SafetyGuidance";
export default function KnowledgeCenter() {
  return (
    <div>
      <PageTitle title="Knowledge Center" />

      <Hero />
      <KnowledgeCategories />
      <Knowledgedetail />
      <SafetyGuidance />
    </div>
  );
}
