import React,{useMemo,Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BentoGrid from "./components/bentoGrid";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ProjectPage from "./components/ProjectPage";
import "./App.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const firstSpline = useMemo(
    () => <Spline scene="https://prod.spline.design/q6SNYex8J-pjFI1p/scene.splinecode" />,
    []
  );
  return (
   <Router>
    <CustomCursor />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Suspense>
      {firstSpline}
      </Suspense>
      <BentoGrid />
      <Footer />
   </Router>
  );
}

export default App;
