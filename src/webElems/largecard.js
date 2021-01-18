import React, { Component } from 'react'
import nebula from "../../src/images/base text.png"

export class LargeCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFocused: false,
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({isFocused: true});
    }

    handleMouseLeave(){
        this.setState({isFocused: false});
    }
    
    render() {
        const contName = this.state.isFocused ? "LargeCardContainerActive" : "LargeCardContainer";
        return (
            <div className={contName}
            onMouseOver={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
                <div className="CardImage">
                    <img src={this.props.image||nebula}></img>
                </div>
                {this.state.isFocused && <div className="CardDetails">
                    {this.props.details||"Insert details here"}
                </div> }               
            </div>
        )
    }
}

export default LargeCard
