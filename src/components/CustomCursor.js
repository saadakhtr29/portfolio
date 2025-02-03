import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });

  useEffect(() => {
    let prevX = 0, prevY = 0;

    const moveCursor = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate velocity
      const vx = newX - prevX;
      const vy = newY - prevY;
      
      setVelocity({ vx, vy });
      setPosition({ x: newX, y: newY });

      prevX = newX;
      prevY = newY;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Determine scale based on movement direction
  const scaleX = Math.abs(velocity.vx) > Math.abs(velocity.vy) ? 1.8 : 1;
  const scaleY = Math.abs(velocity.vy) > Math.abs(velocity.vx) ? 1.8 : 1;

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 25, 
          y: position.y - 25,
          scaleX: scaleX,
          scaleY: scaleY,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
