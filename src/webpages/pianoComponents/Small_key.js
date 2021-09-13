import React from "react";

export const SmallKey = ({ onmouseDown, onmouseUp, smallKey }) => {
  return (
    <div
      className="smallKey"
      onPointerEnter={() => {
        onmouseDown(smallKey);
      }}
      onPointerOver={() => {
        onmouseUp(smallKey);
      }}
    >
      <h1 className="keysText">{smallKey}</h1>
    </div>
  );
};
