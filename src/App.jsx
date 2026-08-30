import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar & Footer
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Home
import Mainpage from "./Components/Home Page/Mainpage";

// About
import AboutPage from "./Components/About Page/AboutDAFA";
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";

// What We Do
import WhatWeDo from "./Components/What We Do page/WhatWeDo";
import ActivityDetails from "./Components/What We Do page/ActivityDetails";

// Humanitarian Support
import BeyondDemining from "./Components/What We Do page/BeyondDemining";
import BeyondDeminingDetails from "./Components/What We Do page/BeyondDeminingDetails";

// Members
import Members from "./Components/Members Page/Members";
import MemberProfile from "./Components/Members Page/MemberProfile";

// Projects
import Projects from "./Components/Projects Page/Projects";
import ProjectDetails from "./Components/Projects Page/ProjectDetails";

// Achievements
import Achievements from "./Components/Achievements Page/Achievements";

// Resources
import Reports from "./Components/Resources/Reports/Reports";
import Stories from "./Components/Resources/Stories/Stories";
import StoriesDetails from "./Components/Resources/Stories/StoriesDetails";
import NewsUpdate from "./Components/Resources/News-Update Page/NewsUpdate";
import NewsUpdateDetails from "./Components/Resources/News-Update Page/NewsUpdateDetails";
import Certificates from "./Components/Resources/Certificate/Certificates";

// Contact
import Contact from "./Components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Mainpage />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* WHAT WE DO */}
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-do/:slug" element={<ActivityDetails />} />

        {/* HUMANITARIAN SUPPORT */}
        <Route path="/beyond-demining" element={<BeyondDemining />} />
        <Route
          path="/beyond-demining/:slug"
          element={<BeyondDeminingDetails />}
        />

        {/* MEMBERS */}
        <Route path="/members" element={<Members />} />
        <Route path="/members/:slug" element={<MemberProfile />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* ACHIEVEMENTS */}
        <Route path="/achievements" element={<Achievements />} />

        {/* RESOURCES */}
        <Route path="/resources/reports" element={<Reports />} />

        <Route path="/resources/stories" element={<Stories />} />

        <Route path="/resources/stories/:slug" element={<StoriesDetails />} />

        <Route path="/resources/news-updates" element={<NewsUpdate />} />

        <Route
          path="/resources/news-updates/:slug"
          element={<NewsUpdateDetails />}
        />

        <Route path="/resources/certificates" element={<Certificates />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
