import React from "react"; 
import options from "./SelOptions.js";

export default class Selector extends React.Component{

  render(){
    return(
      <>
        <select value="Third">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select>
      </>
    );
  }
}