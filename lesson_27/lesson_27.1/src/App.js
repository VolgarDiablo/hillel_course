import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import "./App.css";
import "./Theme.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Content />
      </Router>
    </div>
  );
}

export default App;
