import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= NAVBAR & FOOTER =================
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// ================= HOME =================
import Mainpage from "./Components/Home Page/Mainpage";

// ================= ABOUT =================
import AboutPage from "./Components/About Page/AboutDAFA";
import DirectorBio from "./Components/Director Bio Page/DirectorBio";
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";

// ================= MEMBERS =================
import Members from "./Components/Members Page/Members";
import MemberProfile from "./Components/Members Page/MemberProfile";

// ================= WHAT WE DO =================
import ManualDemining from "./Components/What We Do page/Manual Demining/ManualDemining";
import MechanicalDemining from "./Components/What We Do page/Mechanical Demining/MechanicalDemining";
import IEDResponse from "./Components/What We Do page/IED Response/IEDResponse";

// ================= PROJECTS =================
import Projects from "./Components/Projects Page/Projects";
import ProjectDetails from "./Components/Projects Page/ProjectDetails";

// ================= ACHIEVEMENTS =================
import Achievements from "./Components/Achievements Page/Achievements";

// ================= KNOWLEDGE CENTER =================
import KnowledgeCenter from "./Components/Knowledge Center/KnowledgeCenter";
import KnowledgeDetail from "./Components/Knowledge Center/KnowledgeDetail ";

// ================= RESOURCES =================

// Reports
import Reports from "./Components/Resources/Reports/Reports";
import ReportDetails from "./Components/Resources/Reports/ReportDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}

        <Route path="/" element={<Mainpage />} />

        {/* ================= ABOUT ================= */}

        <Route path="/about" element={<AboutPage />} />

        <Route path="/director-bio" element={<DirectorBio />} />

        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* ================= MEMBERS ================= */}

        <Route path="/members" element={<Members />} />

        <Route path="/members/:slug" element={<MemberProfile />} />

        {/* ================= WHAT WE DO ================= */}

        <Route
          path="/what-we-do/manual-demining"
          element={<ManualDemining />}
        />

        <Route
          path="/what-we-do/mechanical-demining"
          element={<MechanicalDemining />}
        />

        <Route path="/what-we-do/ied-response" element={<IEDResponse />} />

        {/* ================= PROJECTS ================= */}

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* ================= ACHIEVEMENTS ================= */}

        <Route path="/achievements" element={<Achievements />} />

        {/* ================= KNOWLEDGE CENTER ================= */}

        <Route path="/knowledge-center" element={<KnowledgeCenter />} />

        <Route path="/knowledge-center/:slug" element={<KnowledgeDetail />} />

        {/* ================= RESOURCES ================= */}

        {/* Reports Overview */}
        <Route path="/resources/reports" element={<Reports />} />

        {/* Individual Report */}
        <Route path="/resources/reports/:slug" element={<ReportDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
