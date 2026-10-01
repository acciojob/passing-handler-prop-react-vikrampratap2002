import React, { useState, useEffect } from 'react';

function Selection({ selectedColor }) {
  const [boxStyle, setBoxStyle] = useState({});
  
  // Update box style when selectedColor changes
  useEffect(() => {
    if (selectedColor) {
      setBoxStyle({ backgroundColor: selectedColor });
    }
  }, [selectedColor]);
  
  // Handle click on box to apply selected color
  const handleBoxClick = () => {
    if (selectedColor) {
      setBoxStyle({ backgroundColor: selectedColor });
    }
  };
  
  return (
    <div className="selection-container">
      <div 
        className="fix-box" 
        style={boxStyle}
        onClick={handleBoxClick}
      ></div>
      <div 
        className="fix-box" 
        style={boxStyle}
        onClick={handleBoxClick}
      ></div>
      <div 
        className="fix-box" 
        style={boxStyle}
        onClick={handleBoxClick}
      ></div>
    </div>
  );
}

export default Selection;