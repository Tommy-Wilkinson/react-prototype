import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input.js";
import Selector from "./Selector.js";

export default class Body extends React.Component{
  render(){
    return(
      <>
        <p> This is where the body is.</p>
        <Input />
        <Selector />

    </>
    );
  }
}