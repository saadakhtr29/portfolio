import React from "react";
import "./DesignGallery.css"; // Import the CSS file

const designs = [
  // {
  //   title: "E-commerce App UI",
  //   image: "/images/ecommerce-ui.jpg",
  //   link: "#",
  // },
  // {
  //   title: "Social Media Poster",
  //   image: "/images/social-media-poster.jpg",
  //   link: "#",
  // },
  // {
  //   title: "Portfolio Website UI",
  //   image: "/images/portfolio-ui.jpg",
  //   link: "#",
  // },
  // {
  //   title: "Branding Logo",
  //   image: "/images/branding-logo.jpg",
  //   link: "#",
  // },
];

const DesignGallery = () => {
  return (
    <section className="design-gallery">
      <h2>My Graphic & UI/UX Designs</h2>
      <div className="design-grid">
        {designs.map((design, index) => (
          <a href={design.link} key={index} className="design-card">
            <img src={design.image} alt={design.title} />
            <div className="overlay">
              <h3>{design.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DesignGallery;
