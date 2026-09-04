import PageTitle from "../../Components/PageTitle";
import Hero from "./Hero";
import About from "./About";
import Programs from "./Programs";
import WhereWeWork from "./WhereWeWork";
import Projects from "./Projects";
import StoriesCards from "./StoriesCards";
import News from "./News";
import PartnersDonors from "./PartnersDonors";
import FinalCTA from "./FinalCTA.jsx";
export default function Mainpage() {
  return (
    <>
      <PageTitle title="DAFA" />
      <Hero />
      <About />
      <Programs />
      <WhereWeWork />
      <Projects />
      <StoriesCards />
      <News />
      <PartnersDonors />
      <FinalCTA />
    </>
  );
}
