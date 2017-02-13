//You should add outer to your component an array : var operationsProduct = []
// Here we need to decrement by the default quantity step, we get the dirty modified productObject, we extract it
// it's original data where he comes from

import findIndexByKey from "./findIndexByKey";

var removeProduct = (originalData, product, operationsProduct) => {
    var indexExistingProduct = findIndexByKey(operationsProduct, "ID", product.ID);

    //product.quantity containes already the recent value (we worked with reference) we need to bring clean reference
    let originalProduct = originalData.find(element => element.ID == product.ID);

    // increment by initial quantity: if 12 = 8 4 0 ... otherway we do [].quantite-- to dec by one
    operationsProduct[indexExistingProduct].quantite -= originalProduct.quantite;

    if(operationsProduct[indexExistingProduct].quantite == 0){
        //Delete the object from array
        operationsProduct.splice(indexExistingProduct, 1);
    }

    return operationsProduct;
};

export default removeProduct;
