import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageUser from "./pages/PageUser";
import DetailUser from "./pages/DetailUser";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageUser />} />
          <Route path="/detail" element={<DetailUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
