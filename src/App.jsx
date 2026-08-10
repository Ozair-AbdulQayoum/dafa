import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Mainpage from "./Components/Home Page/Mainpage";
import AboutPage from "./Components/About Page/AboutDAFA";
import DirectorBio from "./Components/Director Bio Page/DirectorBio";
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";

import Members from "./Components/Members Page/Members";
import MemberProfile from "./Components/Members Page/MemberProfile";

import ManualDemining from "./Components/What We Do page/Manual Demining/ManualDemining";
import MechanicalDemining from "./Components/What We Do page/Mechanical Demining/MechanicalDemining";
import IEDResponse from "./Components/What We Do page/IED Response/IEDResponse";

import Projects from "./Components/Projects Page/Projects";
import ProjectDetails from "./Components/Projects Page/ProjectDetails";

import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Mainpage />} />

        {/* ================= ABOUT ================= */}
        <Route path="/about" element={<AboutPage />} />

        {/* ================= LEADERSHIP ================= */}
        <Route path="/director-bio" element={<DirectorBio />} />
        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* ================= MEMBERS ================= */}
        <Route path="/members" element={<Members />} />
        <Route path="/members/:slug" element={<MemberProfile />} />

        {/* ================= WHAT WE DO ================= */}

        {/* Manual Demining */}
        <Route
          path="/what-we-do/manual-demining"
          element={<ManualDemining />}
        />

        {/* Mechanical Demining */}
        <Route
          path="/what-we-do/mechanical-demining"
          element={<MechanicalDemining />}
        />

        {/* IED Response */}
        <Route path="/what-we-do/ied-response" element={<IEDResponse />} />

        {/* ================= PROJECTS ================= */}

        {/* Projects Overview */}
        <Route path="/projects" element={<Projects />} />

        {/* Individual Project */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
