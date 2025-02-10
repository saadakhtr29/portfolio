import React from "react";
import "./Services.css";

const ServiceSection = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Services</h1>
      <div className="pricing-wrapper">
        {/* Free Plan */}
        <div className="pricing-card">
          <h2>Free Plan</h2>
          <p className="price">Free</p>
          <ul>
            <li>✔ Send up to 2 transfers per month</li>
            <li>✔ Basic transaction history</li>
            <li>✔ Email support</li>
            <li>✔ Limited currency support (USD, EUR, GBP)</li>
            <li>✔ Basic security features</li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p className="price">$19.99/m</p>
          <ul>
            <li>✔ Unlimited transfers with priority processing</li>
            <li>✔ Comprehensive transaction analytics</li>
            <li>✔ 24/7 priority support</li>
            <li>✔ Full currency support</li>
            <li>✔ Enhanced security features</li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p className="price">$9.99/m</p>
          <ul>
            <li>✔ Unlimited transfers</li>
            <li>✔ Transaction history with export options</li>
            <li>✔ Priority email support</li>
            <li>✔ Expanded currency support</li>
            <li>✔ Advanced security features</li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
