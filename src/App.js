import React,{useMemo,Suspense} from "react";
import Header from "./components/Header";
import BentoGrid from "./components/bentoGrid";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const firstSpline = useMemo(
    () => <Spline scene="https://prod.spline.design/q6SNYex8J-pjFI1p/scene.splinecode" />,
    []
  );

  const secondSpline = useMemo(
    () => <Spline scene="https://prod.spline.design/UGac37ivWTRIbfox/scene.splinecode" />,
    []
  );
  return (
    <div>
      <CustomCursor />
      <Header />
      <Suspense>
      {firstSpline}
      </Suspense>
      <BentoGrid />
      <Suspense>
      {secondSpline}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
