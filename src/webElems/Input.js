import React from "react";
import ReactDOM from "react-dom";

export default class InputBox extends React.Component{

  render(){
    return(
      <>
      <form>
       <label>
        <input type="text" name="name" />
      </label>
        <input type="submit" name="Submit" />
      </form>
      </>
    );
  }
}