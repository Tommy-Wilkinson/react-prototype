import React from "react";

class Extra extends React.Component
{
  render()
  {
    return(
      <div>
        <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
           <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Extra1 extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
     newName: 'Default'
     
    }
    
  }
 
  render()
  {
    return(
      <h1> This is an Extra 1 object made by {this.props.newName}
      <button onClick={() => changeExtra1Name(user)}>Click Me</button>
      </h1>
    );
  }
}

class Extra2 extends React.Component
{
  render()
  {
    return(
      <h2>This is an Extra 2 object </h2>
    );
  }
}

class Extra3 extends React.Component
{
  render()
  {
    return(
      <h3>This is an Extra 3 object </h3>
    );
  }
}

export default function changeExtra1Name(user)
{
  () => this.setState({newName: user});
  console.log("Button Pressed.");
}

export {Extra, Extra1, Extra2, Extra3, changeExtra1Name};
