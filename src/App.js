import React, { useMemo, Suspense, useRef } from "react";
import Header from "./components/Header";
import BentoGrid from "./components/bentoGrid";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ProjectPage from "./components/ProjectPage";
import ServiceSection from "./components/Services";
import MatrixBackground from "./components/ParticleBackground"; // Import the Matrix Background
import "./App.css";
import DesignGallery from "./components/DesignGallery";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const firstSpline = useMemo(
    () => (
      <Spline scene="https://prod.spline.design/q6SNYex8J-pjFI1p/scene.splinecode" />
    ),
    []
  );

  // Refs for sections
  const projectRef = useRef(null);
  const serviceRef = useRef(null);

  return (
    <div>
      <CustomCursor />
      <Header projectRef={projectRef} serviceRef={serviceRef} />{" "}
      {/* Pass refs to Header */}
      <Suspense fallback={<div>Loading...</div>}>{firstSpline}</Suspense>
      <BentoGrid />
      <DesignGallery />
      {/* Project Section with Matrix Background */}
      <div ref={projectRef} className="project-section">
        <MatrixBackground /> Ensures background is behind content
        <div className="project-content">
          <ProjectPage />
        </div>
      </div>
      {/* Service Section */}
      <div ref={serviceRef}>
        <ServiceSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
