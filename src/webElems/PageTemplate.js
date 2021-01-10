import React from "react";
import "./webtemplate.css"

export default class WebPageTemplate extends React.Component{
  render(){
    return(<HeaderNav />);
  }

}

class HeaderNav extends React.Component{

  render(){

    return(
      <div className="HeaderNav_Container">
        <div className="HeaderNav_item1">
          Website Title
        </div>
        <div className="HeaderNav_item2">
          <Burger />
        </div>
      </div>
    );
  }
}

class Burger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }


  render(){
    var clickedState = this.state.isActive ? "burger_box_active":"burger_box";
    return(
      <div className="burger_box" onClick={this.handleClick}>
        <div className="burger_top"></div>
        <div className="burger_middle"></div>
        <div className="burger_bottom"></div>
      </div>
    );
  }
}