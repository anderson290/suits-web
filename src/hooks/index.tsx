import { useState } from "react";
import getLPTheme from "../styles/themes/default";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  PaletteMode,
  Box,
  Divider,
} from "@mui/material";
import AppAppBar from "../components/AppAppBarProps";
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const AppProvider = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const LPtheme = createTheme(getLPTheme(mode));
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Banner />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AppProvider;
