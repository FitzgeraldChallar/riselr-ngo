import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";

import WhoWeAre from "./pages/About/WhoWeAre";
import MissionVision from "./pages/About/MissionVision";
import Leadership from "./pages/About/Leadership";
import Team from "./pages/About/Team";
import Partners from "./pages/About/Partners";
import Impact from "./pages/About/Impact";

import Programmes from "./pages/Programmes/Programmes";
import ProgrammeDetails from "./pages/Programmes/ProgrammeDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About RISE */}
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route
              path="/about/mission-vision"
              element={<MissionVision />}
            />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/impact" element={<Impact />} />

            {/* Programmes */}
            <Route path="/programmes" element={<Programmes />} />
            <Route
              path="/programmes/:slug"
              element={<ProgrammeDetails />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}