//----------------------------------------------------------------
// store (contains the products)
//

function store() {
    this.products = [
        new product("product1", "Pain au Chocolat", "Le pain au chocolat, est une viennoiserie constituée d'une pâte levée feuilletée, rectangulaire enroulée sur une ou plusieurs barres de chocolat.", 0, 1.60),
        new product("Product2", "Pain aux Raisins", "Le pain aux raisins, est une viennoiserie en forme de spirale. Constituée d’une pâte feuilletée levée, mélangée avec des raisins secs, et fourrée de crème pâtissière.", 0, 1.60),
        new product("Product3", "Croissant au beurre", "Un croissant est une viennoiserie à base d'une pâte levée feuilletée spécifique, la pâte à croissant, qui comporte de la levure et une proportion importante de beurre.", 0, 1.40),
        new product("Product4", "Chausson aux pommes", "Le chausson aux pommes est une pâtisserie à base de pâte feuilletée de forme semi-circulaire ou triangulaire contenant le même type de garniture que dans la tarte aux pommes.", 0, 1.70),
    ];
}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}