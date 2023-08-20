import React, { useState } from 'react';

const ColorChangingButton = () => {
  const [hovered, setHovered] = useState(false);

  const defaultColor = '#650000';
  const hoverColor = '#990000';

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    background: hovered
      ? `linear-gradient(to right, ${defaultColor}, ${hoverColor})`
      : defaultColor,
  };

  return (
    <a className="px-4 py-2 text-white rounded-lg transition-colors duration-300" style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href='/home'>
        Visit the website
    </a>
  );
};

export default ColorChangingButton;
