import React, { useState, useEffect } from "react";
import Mobile from "./components/Mobile.jsx"
import Window from "./components/Window.jsx"
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    }; 
  }, [window.innerWidth]);

  return (
    <>
    
      {
        windowWidth < 972? <Mobile /> : <Window />
      }
     
    </>
  );
}

export default App;