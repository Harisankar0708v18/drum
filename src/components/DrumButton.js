import React, { useEffect } from 'react';
import './DrumButton.css';

const DrumButton = ({ drumKey, sound, image }) => {
  const playSound = () => {
    const audio = new Audio(`/sounds/${sound}`);
    audio.play();
    animateButton();
  };

  const animateButton = () => {
    const button = document.querySelector(`.${drumKey}`);
    if (button) {
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === drumKey) {
        playSound();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
   
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drumKey]); 

  return (
    <button
      className={`drum ${drumKey}`}
      onClick={playSound}
      style={{ backgroundImage: `url(/images/${image})` }}
    >
      {drumKey}
    </button>
  );
};

export default DrumButton;
