import React from "react";

class Display extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(value) {
        this.props.removeFromCart(value);
    }
    render(){
        var listAddedProducts = this.props.addedProducts.map((value, index) => {
           return (
               <ul key={index}>
                   <li>ID: {value.ID}</li>
                   <li>Nom: {value.designation}</li>
                   <li>Quantite: {value.quantite}</li>
                   <li>Prix: {value.prix} $</li>
                   <button onClick={() => this.handleClick(value)}>Remove product</button>
               </ul>
           )
        });
        return(
            <div id="display">
                {listAddedProducts}
            </div>
        )
    }
}

export default Display