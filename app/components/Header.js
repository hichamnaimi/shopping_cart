import React from "react";

class Header extends React.Component{

    constructor(){
        super();
    }
    printMessage(){
        console.log("I was clicked !");
    }
    render(){
        return(
            <div>
                <div id="logo"><h2>Bonjour</h2></div>
                <button id="button" onClick={this.printMessage}>Click Me</button>
            </div>
        )
    }
}

export default Header