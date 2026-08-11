import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";

import WhoWeAre from "./pages/about/WhoWeAre";
import MissionVision from "./pages/about/MissionVision";
import Leadership from "./pages/about/Leadership";
import Team from "./pages/about/Team";
import Partners from "./pages/about/Partners";
import Impact from "./pages/about/Impact";

export default function App() {
  return (
    <BrowserRouter>
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
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}