import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const handleToggleBackground = () => {
    setIsBackgroundDark(!isBackgroundDark);
  };

  const backgroundColorStyle = {
    backgroundColor: isBackgroundDark ? "#333" : "#f0f0f0",
  };

  const textColor = {
    color: isBackgroundDark ? "white" : "black",
  };

  return (
    <div className="App" style={backgroundColorStyle}>
      <h1 style={textColor}>Background Toggle</h1>
      <button onClick={handleToggleBackground}>Toggle Background Color</button>
    </div>
  );
};

export default App;
