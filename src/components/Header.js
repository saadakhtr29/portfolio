import React, { useCallback, useEffect, useState } from "react";
import "./Header.css";

const Header = React.memo(({ projectRef, serviceRef }) => {
  const resumeUrl = "./assets/Saad Akhtar-resume.pdf";
  const [fileReady, setFileReady] = useState(false);

  useEffect(() => {
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setFileReady(true);
        }
      })
      .catch(() => setFileReady(false));
  }, [resumeUrl]);

  const handleDownload = useCallback(() => {
    if (fileReady) {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Saad_Akhtar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Resume is still loading. Please try again in a moment.");
    }
  }, [fileReady, resumeUrl]);

  // Function for smooth scrolling
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <span className="logo">SAAD AKHTAR</span>
      <div className="links">
        <a href="resume" onClick={handleDownload}>
          {fileReady ? "Resume" : "Loading..."}
        </a>
        <a href="#projects" onClick={() => scrollToSection(projectRef)}>Projects</a>
        <a href="#services" onClick={() => scrollToSection(serviceRef)}>Services</a>
      </div>
    </div>
  );
});

export default Header;
