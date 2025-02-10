import React, { useMemo, Suspense, useRef } from "react";
import Header from "./components/Header";
import BentoGrid from "./components/bentoGrid";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ProjectPage from "./components/ProjectPage";
import ServiceSection from "./components/Services";
import "./App.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const firstSpline = useMemo(
    () => <Spline scene="https://prod.spline.design/q6SNYex8J-pjFI1p/scene.splinecode" />,
    []
  );

  // const secondSpline = useMemo(
  //   () => <Spline scene="https://prod.spline.design/UGac37ivWTRIbfox/scene.splinecode" />,
  //   []
  // );

  // Refs for sections
  const projectRef = useRef(null);
  const serviceRef = useRef(null);

  return (
    <div>
      <CustomCursor />
      <Header projectRef={projectRef} serviceRef={serviceRef} /> {/* Pass refs to Header */}
      <Suspense fallback={<div>Loading...</div>}>{firstSpline}</Suspense>

      <BentoGrid />
      {/* <Suspense fallback={<div>Loading...</div>}>{secondSpline}</Suspense> */}

      {/* Project Section */}
      <div ref={projectRef}>
        <ProjectPage />
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
