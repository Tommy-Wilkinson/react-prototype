import React from "react";
import "./webtemplate.css"

export default class WebPageTemplate extends React.Component{

  render(){
    return(<HeaderNav />);
  }

}

class HeaderNav extends React.Component{

    constructor(props){
    super(props);
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }


  render(){

    return(
      <>
      <div className="HeaderNav_Container">
        <div className="HeaderNav_item1">
          Website Title
        </div>
        <div className="HeaderNav_item2">
          <Burger toggleMenu={this.toggleMenu} />
        </div>
      </div>
      <div>
        <NavLinks showMenu={this.state.showMenu}/>
      </div>
      </>
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
    this.props.toggleMenu;
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }


  render(){
    var clickedState = this.state.isActive ?"burger_box_active":"burger_box";
    return(
      <div className={clickedState} 
      onClick={this.handleClick}>
        <div className="burger_top"></div>
        <div className="burger_middle"></div>
        <div className="burger_bottom"></div>
      </div>
    );
  }
}

class NavLinks extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        isActive: true,
    } 
    this.handleburgerClick = this.handleBurgerClick.bind(this);
  }

renderButton(name){
  return<NavLinkButton value={name}/>;
}

  handleBurgerClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
    console.log('Click');
  }

render(){
  var click = (this.state.isActive ? 
  'NavLinksSidebar':'NavLinksSidebar_inactive');
  return( 
    <>{this.props.showMenu&& 
    <div className={click}>
         
      {this.renderButton('Home')}
      {this.renderButton('Products')}
      {this.renderButton('About Us')}
      </div>
      }
      </>
    
  );

}

}

class NavLinkButton extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      buttonID: 'No Name',
      isSelected: false,
    }
  }



  render(){
    return(
      <div className="NavButton">
        <button className={this.state.buttonID}>
          {this.props.value}
        </button>
      </div>
    );
  }
}