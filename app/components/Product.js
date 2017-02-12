import React from "react";

class Product extends React.Component{
    constructor(){
        super();
    }
    render(){

        return(
            <ul>
                <li>Nom: {this.props.serverData.designation}</li>
                <li>Quantite: {this.props.serverData.quantite}</li>
                <li>Prix: {this.props.serverData.prix} $</li>
                <button>add product</button>
            </ul>
        )
    }
}

export default Product