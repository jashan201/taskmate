import React, { useState, useEffect } from 'react';

function Button({ dark }) {
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    setSelectedButton(dark ? 'dark' : 'light');
  }, [dark]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  return (
    <div className="buttons">
      <button
        className={selectedButton === 'dark' ? 'darkButton selected' : 'darkButton'}
        onClick={() => handleButtonClick('dark')}
      >
        Latest
      </button>
      <button
        className={selectedButton === 'light' ? 'lightButton selected' : 'lightButton'}
        onClick={() => handleButtonClick('light')}
      >
        All
      </button>
    </div>
  );
}

export default Button;