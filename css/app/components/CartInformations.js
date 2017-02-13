import React from "react";

const outputFormat = {
    totalQuantite: 0,
    totalPrix: 0
};

const getCartResults = (previous, current) =>
    ({totalQuantite: previous.totalQuantite + current.quantite,
        totalPrix: previous.totalPrix + ( current.prix * current.quantite)})


class CartInformations extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const { totalQuantite, totalPrix } = this.props.addedProducts.reduce(getCartResults, outputFormat);
        return(
            <div id="cartInformations">
                <label>Total items : {totalQuantite}</label><br/>
                <label>Total price : {totalPrix} $</label>
            </div>
        )
    }
}

export default CartInformations