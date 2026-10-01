import React, { useState } from 'react';
import '../styles/App.css';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  
  // Handler function to update selected color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  
  return (
    <div className="App">
      <h1>Color Selector App</h1>
      
      {/* Pass color configurations and handler to ColourSelector */}
      <ColourSelector 
        colors={['red', 'blue', 'green']} 
        onColorSelect={handleColorSelect} 
      />
      
      {/* Pass selected color to Selection component */}
      <Selection selectedColor={selectedColor} />
    </div>
  );
}

export default App;