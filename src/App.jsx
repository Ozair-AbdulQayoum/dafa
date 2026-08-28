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
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";

// =====================================================
// WHAT WE DO
// =====================================================

import WhatWeDo from "./Components/What We Do page/WhatWeDo";
import ActivityDetails from "./Components/What We Do page/ActivityDetails";

// =====================================================
// HUMANITARIAN SUPPORT
// =====================================================

import BeyondDemining from "./Components/What We Do page/BeyondDemining";
import BeyondDeminingDetails from "./Components/What We Do page/BeyondDeminingDetails";

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
// RESOURCES
// =====================================================

// -------------------- Reports --------------------

import Reports from "./Components/Resources/Reports/Reports";

// -------------------- Stories --------------------

import Stories from "./Components/Resources/Stories/Stories";
import StoriesDetails from "./Components/Resources/Stories/StoriesDetails";

// -------------------- News & Updates --------------------

import NewsUpdate from "./Components/Resources/News-Update Page/NewsUpdate";
import NewsUpdateDetails from "./Components/Resources/News-Update Page/NewsUpdateDetails";

// -------------------- Certificates --------------------

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

        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* =================================================
            WHAT WE DO
        ================================================== */}

        <Route path="/what-we-do" element={<WhatWeDo />} />

        <Route path="/what-we-do/:slug" element={<ActivityDetails />} />

        {/* =================================================
            HUMANITARIAN SUPPORT
        ================================================== */}

        <Route path="/beyond-demining" element={<BeyondDemining />} />

        <Route
          path="/beyond-demining/:slug"
          element={<BeyondDeminingDetails />}
        />

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
            RESOURCES
        ================================================= */}

        {/* -------------------- Reports -------------------- */}

        <Route path="/resources/reports" element={<Reports />} />

        {/* -------------------- Stories -------------------- */}

        <Route path="/resources/stories" element={<Stories />} />

        <Route path="/resources/stories/:slug" element={<StoriesDetails />} />

        {/* -------------------- News & Updates -------------------- */}

        <Route path="/resources/news-updates" element={<NewsUpdate />} />

        <Route
          path="/resources/news-updates/:slug"
          element={<NewsUpdateDetails />}
        />

        {/* -------------------- Certificates -------------------- */}

        <Route path="/resources/certificates" element={<Certificates />} />
      </Routes>

      {/* =================================================
          FOOTER
      ================================================== */}

      <Footer />
    </BrowserRouter>
  );
}
