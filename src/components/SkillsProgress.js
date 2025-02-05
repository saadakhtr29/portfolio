import React, { useEffect, useState } from "react";
import "./SkillsProgress.css";

const SkillProgress = ({ percentage, skill }) => {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  

  useEffect(() => {
    let interval;

    if (hovered) {
      setProgress(0); // Reset progress
      setAnimating(true);

      // Increment progress gradually for smooth animation
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < percentage) {
            return prev + 1; // Increment by 1 each step
          } else {
            clearInterval(interval);
            return percentage;
          }
        });
      }, 10); // Speed of animation (adjust for smoothness)
    }

    return () => {
      if(!hovered && animating){
        setProgress(percentage);
      }
    }
  }, [hovered, animating, percentage]);

  
  const circumference = 2 * Math.PI * 40; // Circle circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="skill-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SVG Circular Progress */}
      <svg width="100" height="57" viewBox="0 0 100 57">
        {/* Background Arc */}
        <path d="M 10 50 A 40 40 0 1 1 90 50" className="arc-bg" />
        {/* Animated Progress Arc */}
        <path
          d="M 10 50 A 40 40 0 1 1 90 50"
          className="arc-progress"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 1.5s ease-in-out",
          }}
        />
        {/* Animated Percentage Text */}
        <text x="50" y="55" textAnchor="middle" className="percentage-text">
          {progress}%
        </text>
      </svg>

      {/* Skill Name */}
      <span className="skill-text">{skill}</span>
    </div>
  );
};

const ProgressSkills = () => {
  return (
    <div className="progress-container">
      <SkillProgress percentage={90} skill="Programming" />
      <SkillProgress percentage={90} skill="Designing" />
      <SkillProgress percentage={85} skill="Content Writing" />
    </div>
  );
};

export default ProgressSkills;
