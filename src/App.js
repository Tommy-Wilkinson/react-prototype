import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
//import Extra from "./extras.js";
import {Extra, Extra1, Extra2, Extra3, changeExtra1Name} from  "./extras.js";
import * as extrastuff from "./extras.js";

//export default function App() {
//  return (
//    <div>
//      <h1>Hello StackBlitz!</h1>
//      <p>Start editing to see some magic happen :)</p>
//    </div>
//  );
//}

const user = {
  first: 'Cool Guy',
  last: 'McGee'
};



export default function App(){

    return(<Game />);

}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value:"X"})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const Extra1obj = new Extra1({newname: "Tommy"});

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">          
          <Board />
          <InfoTag />
        </div>
        <div className="game-info">    
          <Extra />
          <Extra1 newName={["Mr. ", user.last]}/>
          <Extra2 />
          <extrastuff.Extra3 />
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


class InfoTag extends React.Component
{
  render(){
    return(
      <p>
      Game for {returnName(user)}
      </p>
    );
  }
}

function returnName(user)
{
  return user.first + " " + user.last;
}

