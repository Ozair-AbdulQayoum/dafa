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
import EODResponse from "./Components/What We Do page/Explosive Ordnance Disposal/EODResponse";
import EORE from "./Components/What We Do page/Explosive Ordnance Risk Education/EORE";
import DisasterManagement from "./Components/What We Do page/Disaster Management/DisasterManagement";
import CashforWork from "./Components/What We Do page/Cash for Work/CashforWork";

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

// Stories
import Stories from "./Components/Resources/Stories Page/Stories";
import StoriesDetails from "./Components/Resources/Stories Page/StoriesDetails";

// News & Updates
import NewsUpdate from "./Components/Resources/News-Update Page/NewsUpdate";
import NewsUpdateDetails from "./Components/Resources/News-Update Page/NewsUpdateDetails";

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

        <Route path="/what-we-do/eod" element={<EODResponse />} />

        {/* Explosive Ordnance Risk Education */}
        <Route path="/what-we-do/risk-education" element={<EORE />} />

        {/* Backward-compatible EORE URL */}
        <Route path="/what-we-do/eore" element={<EORE />} />

        {/* Disaster Management */}
        <Route
          path="/what-we-do/disaster-management"
          element={<DisasterManagement />}
        />

        {/* Cash for Work */}
        <Route path="/what-we-do/cash-for-work" element={<CashforWork />} />

        {/* ================= PROJECTS ================= */}

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* ================= ACHIEVEMENTS ================= */}

        <Route path="/achievements" element={<Achievements />} />

        {/* ================= KNOWLEDGE CENTER ================= */}

        <Route path="/knowledge-center" element={<KnowledgeCenter />} />

        <Route path="/knowledge-center/:slug" element={<KnowledgeDetail />} />

        {/* ================= RESOURCES ================= */}

        {/* -------- Reports -------- */}

        <Route path="/resources/reports" element={<Reports />} />

        <Route path="/resources/reports/:slug" element={<ReportDetails />} />

        {/* -------- Stories -------- */}

        <Route path="/resources/stories" element={<Stories />} />

        <Route path="/resources/stories/:slug" element={<StoriesDetails />} />

        {/* -------- News & Updates -------- */}

        <Route path="/resources/news-updates" element={<NewsUpdate />} />

        <Route
          path="/resources/news-updates/:slug"
          element={<NewsUpdateDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
