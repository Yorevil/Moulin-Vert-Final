//----------------------------------------------------------------
// store (contains the products)
//

function store() {
    this.products = [
        new product("product1", "Pain au Chocolat", "Test1", 10),
        new product("Product2", "Pain aux Raisins", "Test2", 11),
        new product("Product3", "Croissant au beurre", "Test3", 12),
        new product("Product4", "Chausson aux pommes", "Test4", 13),
        new product("Product5", "Test", "Test5", 14)

    ];
}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}