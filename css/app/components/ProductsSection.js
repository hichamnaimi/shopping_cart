import React from "react";
import Display from "Display"
import ListProducts from "ListProducts"

class ProductsSection extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <section>
                <ListProducts dataProducts = {this.props.dataProducts} handleAddToCart = {this.props.handleAddToCart} />
                <Display addedProducts={this.props.addedProducts} removeFromCart={this.props.handleRemoveFromCart} />
            </section>
        )
    }
}

export default ProductsSection