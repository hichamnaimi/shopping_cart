import React from "react";
import Header from "Header";
import Display from "Display";
import Footer from "Footer";
import ListProducts from "ListProducts";
import ProductsSection from "./ProductsSection"

import promiseData from "../helpers/getListProducts"
import removeProduct from "../helpers/removeProduct"
import addProduct from "../helpers/addProduct"

var operationsProduct = [];


class Wrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {dataProducts : [], addedProducts: []};
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }
    componentDidMount(){
        promiseData("http://localhost:3000/api/v1/produits").then((serverData) => {
            this.setState({dataProducts: serverData.data})
        });

    }
    handleAddToCart(product){
        let addedProducts = addProduct(product, operationsProduct);
        this.setState({addedProducts: addedProducts});

    }
    handleRemoveFromCart(product){
        let removedProducts = removeProduct(this.state.dataProducts, product, operationsProduct);
        this.setState({addedProducts: removedProducts});

    }
    render(){
        return(
            <div>
                <header>
                    <Header addedProducts = {this.state.addedProducts}/>
                </header>
                <ProductsSection handleAddToCart = {this.handleAddToCart} dataProducts={this.state.dataProducts} addedProducts={this.state.addedProducts} handleRemoveFromCart = {this.handleRemoveFromCart}/>
                <footer>
                    <Footer/>
                </footer>

            </div>
        )
    }
}

export default Wrapper