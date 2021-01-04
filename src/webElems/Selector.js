import React from "react"; 
import options from "./SelOptions.js";

export default class Selector extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "Third",
    }
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e){
      console.log("Selection changed to " + e.target.value);
      this.setState({value: e.target.value});
  }
  render(){
    return(
      <>
        <select value={this.state.value} onChange={this.handlechange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select>
      </>
    );
  }
}