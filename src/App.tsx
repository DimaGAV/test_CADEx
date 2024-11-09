import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
