import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Mainpage from "./Components/Home Page/Mainpage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
