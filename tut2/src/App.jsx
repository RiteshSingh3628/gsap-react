// src/App.jsx
import React from "react";
import CustomCursor from "./CustomCursor";

function App() {
  return (
    <div className="App">
      <h1>Custom Cursor with GSAP</h1>
      <p>Move your mouse around to see the custom cursor!</p>
      <CustomCursor />
    </div>
  );
}

export default App;