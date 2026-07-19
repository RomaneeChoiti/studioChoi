import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Works from "./pages/Works.js";
import Navbar from "./components/Navbar.js";
import ProjectDetail from "./pages/ProjectDetailPage.js";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import ArtistStatement from "./pages/ArtistStatement.js";
import ScrollToTop from "./utils/ScrollToTop.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artist-statement" element={<ArtistStatement />} />
          </Routes>
        </div>
      </div>
      <footer>
        <p>© 2024 STUDIO CHOI. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
