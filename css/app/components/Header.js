import React from "react";
import CartInformations from "./CartInformations"
class Header extends React.Component{

    constructor(props){
        super(props);
        this.printMessage = this.printMessage.bind(this);
    }
    printMessage(){
        console.log("I was clicked !");
    }
    render(){
        return(
            <div>
                <div id="logo">
                    <h2>Bonjour</h2>
                </div>
                <div id="cart">
                    <CartInformations addedProducts = {this.props.addedProducts}>
                    </CartInformations>
                    <button>Click Me</button>
                </div>
            </div>
        )
    }
}

export default Header