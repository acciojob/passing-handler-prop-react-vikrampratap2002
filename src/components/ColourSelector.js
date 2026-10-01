import React from 'react';

function ColourSelector({ colors, onColorSelect }) {
  return (
    <div className="colour-selector">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;