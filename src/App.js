import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Login from "./components/Admin/Login";
import Amarenga from "./components/Amarenga/Amarenga";
import Blog from "./components/Blog/Blog";
import Announcement from "./components/Announcement/Announcement";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import AnnouncementPage from "./components/Admin/Dashboard/AnnouncementPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


// import AnnouncementPage from './AnnouncementPage';
// import ImagePage from './ImagePage';
// import EventPage from './EventPage';
// import ProfilePage from './ProfilePage';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/amarenga" element={<Amarenga />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/announcement" element={ <Announcement /> } />
          <Route path="/announcements" element={ <AnnouncementPage /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route
  path="/learn-more"
  render={() => <Redirect to="https://en.wikipedia.org/wiki/Filippo_Smaldone" />}
/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
