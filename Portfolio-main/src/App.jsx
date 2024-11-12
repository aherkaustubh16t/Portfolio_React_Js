import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
// import Header from "./Components/Header";
import Home from "./Components/Home/Home";
// import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
// import AboutUs from "./Components/AboutUs";
import LatestWork from "./Components/Home/LatestWork";
// import LatestWork from "./Components/LatestWork";
import Contact from "./Components/Home/Contact";
// import Contact from "./Components/Contact";
import SideBar from "./Components/SideBar";
import { useState } from "react";
// import SideBar from "./Components/SideBar";

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="h-full w-full">
      <Router>
        <div>
          <Header setSideBar={setSideBar} />
        </div>
        <div
          className={`${
            sideBar ? "visible h-[100vh]" : "h-0 w-0 invisible"
          } fixed z-50 top-0 right-0`}
        >
          <SideBar setSideBar={setSideBar} />
        </div>
        <div className="h-full w-full absolute top-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/latestwork" element={<LatestWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
