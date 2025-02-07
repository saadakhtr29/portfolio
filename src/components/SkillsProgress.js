import React, { useEffect, useState } from "react";
import "./SkillsProgress.css";

const SkillProgress = ({ percentage, skill }) => {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let frame;

    const animateProgress = (start, end, duration) => {
      const startTime = performance.now();
      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progressValue = Math.min(start + (elapsed / duration) * (end - start), end);
        setProgress(progressValue);
        if (progressValue < end) {
          frame = requestAnimationFrame(step);
        }
      };
      frame = requestAnimationFrame(step);
    };

    if (hovered) {
      setProgress(0);
      setAnimating(true);
      animateProgress(0, percentage, 100);
    } else if (!hovered && animating && progress < percentage) {
      animateProgress(progress, percentage, 40);
    }

    return () => cancelAnimationFrame(frame);
  }, [hovered, animating, percentage, progress]); 

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="skill-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle cx="50" cy="50" r={radius} className="arc-bg" />

        {/* Animated Progress Arc */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="arc-progress"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />

        {/* Percentage Text */}
        <text x="50" y="55" textAnchor="middle" className="percentage-text">
          {Math.round(progress)}%
        </text>
      </svg>

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
