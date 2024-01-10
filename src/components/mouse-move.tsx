import React, { useEffect } from 'react';

const MouseMove = () => {
    useEffect(() => {
        const cursorOffset = (e:any) => {
          const rect = document.body.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          document.body.style.setProperty("--cursor-x", `${x}px`);
          document.body.style.setProperty("--cursor-y", `${y}px`);
        };
    
        const handleMouseMove = (e:any) => {
          cursorOffset(e);
        };
    
        document.body.addEventListener("mousemove", handleMouseMove);
    
        // Clean up event listener when component unmounts
        return () => {
          document.body.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    

  return (


<div></div>
  
  );
};

export default MouseMove;
