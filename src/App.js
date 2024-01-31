import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Support from "./components/Support/Surpport";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Album from "./components/Gallery/Album"
import Notice from "./components/Notice/Notice";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/support" element={<Support />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/gallery" element={<Album/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
