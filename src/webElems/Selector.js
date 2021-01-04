import React from "react"; 

export default class Selector extends React.Component{

  render(){
    return(
      <>
        <select>
          <option value="first">First</option>
          <option value="second">Second</option>
          <option selected value="third">Third</option>
          <option value="fourth">Fourth</option>
        </select>
      </>
    );
  }
}