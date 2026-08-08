import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./Components/Home Page/Mainpage";
import AboutPage from "./Components/About Page/AboutDAFA";
import DirectorBio from "./Components/Director Bio Page/DirectorBio";
import OrganizationChart from "./Components/Organization Chart Page/OrganizationChart";
import Members from "./Components/Members Page/Members";
import MemberProfile from "./Components/Members Page/MemberProfile";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/director-bio" element={<DirectorBio />} />
        <Route path="/organization-chart" element={<OrganizationChart />} />

        {/* Members */}
        <Route path="/members" element={<Members />} />

        {/* Individual Member Profile */}
        <Route path="/members/:slug" element={<MemberProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
