import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPostion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  });

  return (
    <div
      className="w-full h-screen pointer-events-none fixed top-0  left-0 z-[9999] "
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div className="w-25 h-25 bg-gradient-to-r from-pink-600 to-blue-700 blur-3xl opacity-80 rounded-full " />
    </div>
  );
};

export default CustomCursor;
