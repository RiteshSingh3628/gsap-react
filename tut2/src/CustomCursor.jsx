// src/components/CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null); // Reference to the cursor element

  useEffect(() => {
    // GSAP animation to move the cursor
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Smoothness of the movement
        ease: "power2.out",
      });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", moveCursor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #ff7e5f, #feb47b)",
        pointerEvents: "none", // Ensure the cursor doesn't interfere with clicks
        zIndex: 9999, // Make sure it's on top of everything
        transform: "translate(-50%, -50%)", // Center the cursor on the mouse position
      }}
    />
  );
};

export default CustomCursor;