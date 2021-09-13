import React from "react";

export const BiggerKey = ({ onmouseDown, onmouseUp, keyName, onPianoPlay }) => {
  //   console.log(name);
  return (
    <div
      className="biggerKey"
      onPointerEnter={(e) => {
        onmouseDown(keyName);
        console.log(keyName);
        onPianoPlay(e,keyName);
      }}
      onPointerOver={() => {
        onmouseUp(keyName);
      }}
    >
      <h1 className="keysText">{keyName}</h1>
    </div>
  );
};
