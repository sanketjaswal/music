import React from "react";
import "./TabSoundConvertor.css";

export const TabSoundConvertor = ({ tabSoundChange }) => {
  return (
    <div className="tab_convertor_container">
      <form className="sound_conv_form">
        <div className="sound_conv_holders">
          <input
            name="nodes"
            id="sine"
            type="radio"
            defaultChecked="checked"
            onClick={() => {
              tabSoundChange("sine");
            }}
          ></input>
          <label htmlFor="sine">Sine</label>
        </div>
        <div className="sound_conv_holders">
          <input
            name="nodes"
            id="square"
            type="radio"
            onClick={() => {
              tabSoundChange("square");
            }}
          ></input>
          <label htmlFor="square">Square</label>
        </div>
        <div className="sound_conv_holders">
          <input
            name="nodes"
            id="triangle"
            type="radio"
            onClick={() => {
              tabSoundChange("triangle");
            }}
          ></input>
          <label htmlFor="triangle">Triangle</label>
        </div>
        <div className="sound_conv_holders">
          <input
            name="nodes"
            id="sawtooth"
            type="radio"
            onClick={() => {
              tabSoundChange("sawtooth");
            }}
          ></input>
          <label htmlFor="sawtooth">SawTooth</label>
        </div>
      </form>
    </div>
  );
};
