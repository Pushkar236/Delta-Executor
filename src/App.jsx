import "./App.css";
import { useState,useEffect } from "react";
import HomePage from "./components/home/home2/Homepage";
import Navbar from "./components/home/navbar/navbar";
import Footer from "./components/home/footer/footer";
import CollegeEvents from "./components/events_page/EventPage.jsx";
// import Gallery from "./components/gallery/gallery.jsx";
// import CosmicAnimation from "./components/gallery/back.jsx";
import TeamGrid from "./components/Team/team.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalenderPage from "./components/calender-page/calenderpage.jsx";
import Loader from "./components/Loader/Loader2.jsx";
import Gallery from "./components/GalleryPage/GalleryPage.jsx";

// Hello

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 6900);
  }, []);
  return (
    <>
      {loading?<Loader/>:<Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<CollegeEvents />} />
          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/team" element={<TeamGrid />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        {/* <Footer /> */}
      </Router>}
    </>
  );
}

export default App;
