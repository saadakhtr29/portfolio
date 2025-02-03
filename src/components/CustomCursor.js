import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const prevPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

      animationFrameId.current = requestAnimationFrame(() => {
        const { x: prevX, y: prevY } = prevPosition.current;
        const newX = e.clientX;
        const newY = e.clientY;
        const dx = newX - prevX;
        const dy = newY - prevY;

        // Update state only if movement exceeds 5px threshold
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          setVelocity({ vx: dx, vy: dy });
          setPosition({ x: newX, y: newY });
          prevPosition.current = { x: newX, y: newY };
        }
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Determine scale based on movement direction
  const scaleX = Math.abs(velocity.vx) > Math.abs(velocity.vy) ? 1.6 : 1;
  const scaleY = Math.abs(velocity.vy) > Math.abs(velocity.vx) ? 1.6 : 1;

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 25,
        y: position.y - 25,
        scaleX,
        scaleY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ willChange: "transform" }} // Performance optimization
    />
  );
};

export default CustomCursor;
