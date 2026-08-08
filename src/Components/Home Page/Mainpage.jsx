import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import Achievements from "./Achievements";
import About from "./About";
import Programs from "./Programs";
import Projects from "./Projects";
import Impact from "./Impact";
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
      <Achievements />
      <About />
      <Programs />
      <Projects />
      <Impact />
      <SuccessStories />
      <PartnersDonors />
      <Reports />
      <News />
      <CommunityVoices />
    </>
  );
}
