import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: '0px', left: '0px' });

  useEffect(() => {
    const showPopup = () => {
      console.log('Show Popup');
      setPosition({
        top: `${Math.floor(Math.random() * (window.innerHeight - 100))}px`,
        left: `${Math.floor(Math.random() * (window.innerWidth - 300))}px`
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 15000);
    };
  
    showPopup(); 
  
    const intervalId = setInterval(showPopup, 60000); 
    return () => clearInterval(intervalId); 
  }, []);
  

  return (
    visible && (
      <div className="popup" style={{ top: position.top, left: position.left }}>
        <h1 className="popup-title">!Feliz Navidad!</h1>
        <h2 className="popup-subtitle">aprovecha ahora las mejores ofertas</h2>
      </div>
    )
  );
};

export default Popup;
