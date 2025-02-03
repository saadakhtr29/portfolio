import React from 'react';
import Header from './components/Header';
import Spline from '@splinetool/react-spline';
import BentoGrid from './components/bentoGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Spline scene="https://prod.spline.design/q6SNYex8J-pjFI1p/scene.splinecode" />
      <BentoGrid />
      <Spline scene="https://prod.spline.design/UGac37ivWTRIbfox/scene.splinecode" />
      <Footer />
    </div>
  );
}

export default App;
