import React, { useRef } from "react";
import "./style.css";

export default function App() {
  const imageRef = useRef(null);
  const primaryImg = "../public/bw/Speaker-187.jpg";
  const secondaryImg = "../public/Speaker-187.jpg";
  return (
    <>
      <img
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg;
        }}
        src={primaryImg}
        ref={imageRef}
      />
    </>
  );
}
