import React from "react";
import ReactDOM from "react-dom";
import Banner from "./webElems/Header.js";
import Body from "./webElems/Body.js";
import VertMenu from "./webElems/Menu.js";
import "./webElems/webstyle.css";

export default function Website(){

  return(<WebPage />);
}

class WebPage extends React.Component{

  render() {
    return (
      <div>
       <div className="banner">
        <Banner />
        </div> 
        <div className="AlignLeft">
          <VertMenu />      
        </div>      
        <div className="webbody">
           <Body />
        </div>  
      </div>
    );
  }
}