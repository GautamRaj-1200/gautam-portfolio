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
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <Projects />
            <Skills />
            {/* <Experience /> */}
          </Layout>
        }
      />

      {/* Spotify Route */}
      <Route
        path="/spotify"
        element={
          // No layout wrapper here since you want raw JSON
          <SpotifyDashboard />
        }
      />
    </Routes>
  );
}

export default App;
