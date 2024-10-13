import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Service from "./Page/Service";
import OurWork from "./Page/OurWork";
import About from "./Page/About";
import Insights from "./Page/Insights";
import Conatact from "./Page/Conatact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/insights" element={<Insights/>} />
        <Route path="/contact" element={<Conatact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
