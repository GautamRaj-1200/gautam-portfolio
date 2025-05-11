import "./App.css";
import Hero from "./components/sections/Hero.tsx";
import { Layout } from "./components/layout/Layout.tsx";
import { usePortfolioConfig } from "./hooks/usePortfolioConfig.tsx";
import Projects from "./components/sections/Projects.tsx";
import Skills from "./components/sections/Skills.tsx";
// import Experience from "./components/sections/Experience.tsx";
import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SpotifyDashboard from "./components/SpotifyDashboard.tsx";

function App() {
  const { personal } = usePortfolioConfig();

  useLayoutEffect(() => {
    document.title = `${personal.name} - ${personal.role}`;
  }, [personal]);

  return (
    <>
      {/* <Layout>
        <Hero />
        <Projects />
        <Skills />
      </Layout> */}
      <Routes>
        <Route path="/spotify" element={<SpotifyDashboard />} />
      </Routes>
    </>
  );
}

export default App;
