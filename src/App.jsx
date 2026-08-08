import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./Components/Home Page/Mainpage";
import AboutPage from "./Components/About Page/AboutDAFA";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Mainpage />} />

        {/* About DAFA */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
