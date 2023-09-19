import React,{ useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = (props) => {
  
  return (
  <>
  <label className="switch">
        <input type="checkbox" id="toggleButton" checked={props.isChecked} onChange={props.onChange}></input>
        <span className="slider"></span>
    </label>
  </>
    

  );
};
  
export default ToggleSwitch;