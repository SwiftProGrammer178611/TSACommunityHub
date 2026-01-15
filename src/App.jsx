import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Directory from "./pages/Directory";
import ResourceDetails from "./pages/ResourceDetails";
import Events from "./pages/Events";
import About from "./pages/About";
import Highlights from "./pages/Highlights";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/resource/:id" element={<ResourceDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer will now appear on all pages */}
      <Footer />
    </>
  );
}
