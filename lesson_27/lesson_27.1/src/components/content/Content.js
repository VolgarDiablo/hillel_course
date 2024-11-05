import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";
import Main from "../../pages/Main/Main";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import NotFound from "../../pages/NotFound/NotFound";

const Content = () => {
  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default Content;
