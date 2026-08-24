import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import About from "./About";
import Programs from "./Programs";
import Projects from "./Projects";
import WhereWeWork from "./WhereWeWork";
import SuccessStories from "./SuccessStories";
import PartnersDonors from "./PartnersDonors";
import Reports from "./Reports";
import News from "./News";
import CommunityVoices from "./CommunityVoices";
export default function Mainpage() {
  return (
    <>
      <PageTitle title="DAFA" />
      <Hero />
      <About />
      <Programs />
      <Projects />
      <WhereWeWork />
      <SuccessStories />
      <PartnersDonors />
      <Reports />
      <News />
      <CommunityVoices />
    </>
  );
}
