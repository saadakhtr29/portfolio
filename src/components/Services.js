import React from "react";
import "./Services.css";

const ServiceSection = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Services</h1>
      <div className="pricing-wrapper">
        {/* Free Plan */}
        <div className="pricing-card">
          <h2>Base Plan</h2>
          <p className="price">$5.99/hr</p>
          {/* <p>For those who need stunning visuals and engaging user experiences.</p> */}
          <ul>
            <li>✔ GCustom logos & branding.</li>
            <li>✔ Responsive & interactive UI/UX</li>
            <li>✔ Smooth animations & transitions</li>
            <li>✔ User-friendly navigation</li>
            <li>✔ Design system & style guide</li>
          </ul>
          {/* <button className="pricing-button">Get Started</button> */}
        </div>

        {/* Standard Plan */}
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p className="price">$19.99/hr</p>
          <ul>
            <li>✔ Everything in Base & Standard Plan</li>
            <li>✔ End-to-end project handling</li>
            <li>✔ Advanced animations & interactions</li>
            <li>✔ Custom features & functionalities</li>
            <li>✔ Post-launch support & updates</li>
          </ul>
          {/* <button className="pricing-button">Get Started</button> */}
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p className="price">$9.99/hr</p>
          <ul>
            <li>✔ Custom website development</li>
            <li>✔ MERN stack expertise</li>
            <li>✔ SEO & performance optimization</li>
            <li>✔ API integrations</li>
            <li>✔ Secure & scalable solutions</li>
          </ul>
          {/* <button className="pricing-button">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
