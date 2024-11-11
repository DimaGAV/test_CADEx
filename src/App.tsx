import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: '"Times New Roman", Times, serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1.2rem",
          width: "200px",
          height: "36px",
          borderRadius: "10px",
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box
          sx={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
