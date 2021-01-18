import React from "react";
import Card from "./card.js";
import LargeCard from "./largecard.js";

export default class FiveCard extends React.Component{

    render(){
        return(
            <div className="FiveCardContainer">
                <div className="FiveCardTop">
                    <Card />
                    <Card />
                </div>
                <div className="FiveCardMiddle">
                    <LargeCard />
                </div>
                <div className="FiveCardBottom">
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}