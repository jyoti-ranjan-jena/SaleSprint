import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturePage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Fallback route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
        <Chatbot />
      </Router>
    </div>
  );
}

export default App;
