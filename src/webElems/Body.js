import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input.js";

export default class Body extends React.Component{
  render(){
    return(
      <>
        <p> This is where the body is.</p>
        <p> <Input /> </p>
        <p> Stuff also goes here</p>

    </>
    );
  }
}