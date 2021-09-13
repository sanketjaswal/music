import React from "react";
import "./Piano.css";
import { KeyContainer } from "./pianoComponents/Key_container";

import f3 from "./Audio/pianoSounds/F3D.mp3";
import g3 from "./Audio/pianoSounds/G3.mp3";
import a3 from "./Audio/pianoSounds/A3.mp3";
import b3 from "./Audio/pianoSounds/B3.mp3";
import c4 from "./Audio/pianoSounds/C4.mp3";
import d4 from "./Audio/pianoSounds/D4.mp3";
import e4 from "./Audio/pianoSounds/E4D.mp3";
import f4 from "./Audio/pianoSounds/F4.mp3";
import g4 from "./Audio/pianoSounds/G4D.mp3";
import a4 from "./Audio/pianoSounds/A4.mp3";
import b4 from "./Audio/pianoSounds/B4.mp3";

export const Piano = () => {
  let activeKey = "";

  let F3 = new Audio(f3);
  let G3 = new Audio(g3);
  let A3 = new Audio(a3);
  let B3 = new Audio(b3);
  let C4 = new Audio(c4);
  let D4 = new Audio(d4);
  let E4 = new Audio(e4);
  let F4 = new Audio(f4);
  let G4 = new Audio(g4);
  let A4 = new Audio(a4);
  let B4 = new Audio(b4);

  const bigKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
  const bigKeysounds = [F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4];

  const smallKeys = ["w", "e", "r", "y", "u", "i", "o", "p"];
  // const smallKeySounds =[];

  window.addEventListener("keydown", (event) => {
    activeKey = event.key;
    playsound(activeKey);
  });

  window.addEventListener("keyup", (event) => {
    stopsound(event.key);
  });

  const playsound = (activeKey) => {
    if (bigKeys.includes(activeKey)) {
      // console.log(activeKey);
      // console.log("play Big");
      bigKeysounds[bigKeys.indexOf(activeKey)].play();
    } else if (smallKeys.includes(activeKey)) {
      // console.log("play Small");
      // smallKeySounds[smallKeys.includes(activeKey)].play();
    }
  };

  const stopsound = (activeKey) => {
    if (bigKeys.includes(activeKey)) {
      setTimeout(() => {
        // console.log("stop Big");
        bigKeysounds[bigKeys.indexOf(activeKey)].pause();
        bigKeysounds[bigKeys.indexOf(activeKey)].currentTime = 0;
      }, 300);
    } else if (smallKeys.includes(activeKey)) {
      setTimeout(() => {
        // console.log("Stop Small");
        // smallKeySounds[smallKeys.indexOf(activeKey)].pause();
        // smallKeySounds[smallKeys.indexOf(activeKey)].currentTime = 0;
      }, 600);
    }
  };

  const onPianoPlay = (evt, name) => {
    console.log(evt);
    console.log(name);
  };

  return (
    <div className="piano">
      <KeyContainer
        onmouseDown={playsound}
        onmouseUp={stopsound}
        smallKeys={smallKeys}
        bigKeys={bigKeys}
        onPianoPlay={onPianoPlay}
      />
    </div>
  );
};
