import React from "react"
import Product from "Product";
import promiseData from "../helpers/getListProducts"


class ListProducts extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="listProducts">
                <Product dataProducts = {this.props.dataProducts} addToCart = {this.props.handleAddToCart} />
            </div>
        )
    }


}

export default ListProducts;