import React from "react";
import ReactDOM from "react-dom";

export default class VerticalMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1,
    }
  }

  renderMenuItem(i){
    return <MenuItem value={i} />
  }
  render(){
    return(
      <>
      {this.renderMenuItem(1)}
      {this.renderMenuItem(2)}
      {this.renderMenuItem(3)}
      </>
      );
  }
}

class MenuItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return(
      <ul>
        <li>
          <a href="https://react-bgjrau.stackblitz.io"> Link {this.props.value}
          </a>
        </li>
      </ul>
    );
  }
}