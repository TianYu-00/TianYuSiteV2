import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";

// routes
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import FallbackRoute from "./pages/FallBackRoute";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Playground from "./pages/Playground";

//
import { GlowCapture, Glow } from "@codaworks/react-glow";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <BrowserRouter>
      {/* max-w-screen-xl */}
      <div className={theme}>
        <GlowCapture>
          <div className="flex flex-col min-h-screen mx-auto px-8 py-8 border border-black text-center">
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main className="flex-grow grid-background">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolios />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="*" element={<FallbackRoute />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </GlowCapture>
      </div>
    </BrowserRouter>
  );
}

export default App;

// rfc for quick snippet
