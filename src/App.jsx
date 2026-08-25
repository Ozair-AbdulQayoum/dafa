import { BrowserRouter, Routes, Route } from "react-router-dom";

// =====================================================
// NAVBAR & FOOTER
// =====================================================

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// =====================================================
// HOME
// =====================================================

import Mainpage from "./Components/Home Page/Mainpage";

// =====================================================
// ABOUT
// =====================================================

import AboutPage from "./Components/About Page/AboutDAFA";
import DirectorBio from "./Components/Director Bio Page/DirectorBio";
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";

// =====================================================
// MEMBERS
// =====================================================

import Members from "./Components/Members Page/Members";
import MemberProfile from "./Components/Members Page/MemberProfile";

// =====================================================
// PROJECTS
// =====================================================

import Projects from "./Components/Projects Page/Projects";
import ProjectDetails from "./Components/Projects Page/ProjectDetails";

// =====================================================
// ACHIEVEMENTS
// =====================================================

import Achievements from "./Components/Achievements Page/Achievements";

// =====================================================
// KNOWLEDGE CENTER
// =====================================================

import KnowledgeCenter from "./Components/Knowledge Center/KnowledgeCenter";
import KnowledgeDetail from "./Components/Knowledge Center/KnowledgeDetail ";

// =====================================================
// RESOURCES
// =====================================================

// -------------------- Reports --------------------

import Reports from "./Components/Resources/Reports/Reports";
import ReportDetails from "./Components/Resources/Reports/ReportDetails";

// -------------------- Stories --------------------

import Stories from "./Components/Resources/Stories Page/Stories";
import StoriesDetails from "./Components/Resources/Stories Page/StoriesDetails";

// -------------------- News & Updates --------------------

import NewsUpdate from "./Components/Resources/News-Update Page/NewsUpdate";
import NewsUpdateDetails from "./Components/Resources/News-Update Page/NewsUpdateDetails";

// -------------------- Certificates --------------------

// Change this path if your actual certificate component
// is located somewhere else.

import Certificates from "./Components/Resources/Certificate/Certificates";

// =====================================================
// APP
// =====================================================

export default function App() {
  return (
    <BrowserRouter>
      {/* =================================================
          NAVBAR
      ================================================== */}

      <Navbar />

      {/* =================================================
          ROUTES
      ================================================== */}

      <Routes>
        {/* =================================================
            HOME
        ================================================== */}

        <Route path="/" element={<Mainpage />} />

        {/* =================================================
            ABOUT
        ================================================== */}

        <Route path="/about" element={<AboutPage />} />

        <Route path="/director-bio" element={<DirectorBio />} />

        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* =================================================
            MEMBERS
        ================================================== */}

        <Route path="/members" element={<Members />} />

        <Route path="/members/:slug" element={<MemberProfile />} />

        {/* =================================================
            PROJECTS
        ================================================== */}

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* =================================================
            ACHIEVEMENTS
        ================================================== */}

        <Route path="/achievements" element={<Achievements />} />

        {/* =================================================
            KNOWLEDGE CENTER
        ================================================== */}

        <Route path="/knowledge-center" element={<KnowledgeCenter />} />

        <Route path="/knowledge-center/:slug" element={<KnowledgeDetail />} />

        {/* =================================================
            RESOURCES
        ================================================== */}

        {/* =================================================
            REPORTS
        ================================================== */}

        <Route path="/resources/reports" element={<Reports />} />

        <Route path="/resources/reports/:slug" element={<ReportDetails />} />

        {/* =================================================
            STORIES
        ================================================== */}

        <Route path="/resources/stories" element={<Stories />} />

        <Route path="/resources/stories/:slug" element={<StoriesDetails />} />

        {/* =================================================
            NEWS & UPDATES
        ================================================== */}

        <Route path="/resources/news-updates" element={<NewsUpdate />} />

        <Route
          path="/resources/news-updates/:slug"
          element={<NewsUpdateDetails />}
        />

        {/* =================================================
            CERTIFICATES
        ================================================== */}

        <Route path="/resources/certificates" element={<Certificates />} />
      </Routes>

      {/* =================================================
          FOOTER
      ================================================== */}

      <Footer />
    </BrowserRouter>
  );
}
