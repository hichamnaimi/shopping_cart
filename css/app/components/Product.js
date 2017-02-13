import React from "react";
import cloneObj from "../helpers/cloneObject";

class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var productsItems = this.props.dataProducts.map((value, index) => {
            var clonedValue = cloneObj(value);
            return(
              <ul key={index}>
                  <li>ID: {value.ID}</li>
                  <li>Nom: {value.designation}</li>
                  <li>Quantite: {value.quantite}</li>
                  <li>Prix: {value.prix} $</li>
                  {/*We send only cloned object to modify (to do not change the reference so the item displayed*/}
                  <button onClick = {()=>{this.props.addToCart(clonedValue)}}>add product</button>
              </ul>
            );
        });
        return(
            <div>
                {productsItems}
            </div>
        )
    }
}

export default Product