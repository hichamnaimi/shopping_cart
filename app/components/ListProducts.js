import React from "react"
import Product from "Product";
import promiseData from "./../helpers/getListProducts"


class ListProducts extends React.Component{

    constructor(){
        super();
        this.state = {data: []};
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount(){
        promiseData().then((serverData) => {
            return this.setState({data: serverData.data})
        });

    }
    addToCart(product){
        // ajouter la liste des produits
    }
    render(){
        console.log("pep" + this.state.data);
        var productTemplate = this.state.data.map(product => <Product serverData={product} addProduct = {this.addToCart} />);
        return(
            <div id="listProducts">
                {productTemplate}
            </div>
        )
    }


}

export default ListProducts;