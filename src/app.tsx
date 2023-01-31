import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import './app.css';
import Navbar from "./Navbar";
import Project1 from "./Project1";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
