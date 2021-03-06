import React from "react";
import { BiggerKey } from "./Bigger_key";
import { SmallKey } from "./Small_key";

export const KeyContainer = ({
  keyPressed,
  onmouseDown,
  onmouseUp,
  smallKeys,
  bigKeys,
  onPianoPlay,
}) => {
  console.log(keyPressed);
  return (
    <div className="KeyContainer">
      <div class="keysCover"></div>
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[0]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[0]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[1]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[1]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[2]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[2]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[3]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[4]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[3]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[5]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[4]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[6]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[7]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[5]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[8]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[6]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[9]}
      />
      <SmallKey
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        smallKey={smallKeys[7]}
      />
      <BiggerKey
        onPianoPlay={onPianoPlay}
        onmouseDown={onmouseDown}
        onmouseUp={onmouseUp}
        keyName={bigKeys[10]}
      />
    </div>
  );
};
