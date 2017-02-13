//You should add outer to your component an array : var operationsProduct = []

import findIndexByKey from "./findIndexByKey";

var addProduct = (product, operationsProduct) => {
    let isElementExist  = operationsProduct.find(element => element.ID == product.ID);
    if(!isElementExist){
        operationsProduct.push(product);
    }
    else{
        let indexExistingProduct = findIndexByKey(operationsProduct,"ID",product.ID);
        // increment by initial quantity: if 4 = 4 8 12 ... otherway we do [].quantite++ to add by 1
        operationsProduct[indexExistingProduct].quantite += product.quantite ;
    }
    return operationsProduct;
};

export default addProduct;

