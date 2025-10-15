function printFeaturedProduct(product) {
    var discountedPrice = product.price * (1 - product.discount / 100);
    console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442: ".concat(product.name, "\n") +
        "\u0426\u0435\u043D\u0430: ".concat(product.price, "\u20BD\n") +
        "\u0421\u043A\u0438\u0434\u043A\u0430: ".concat(product.discount, "%\n") +
        "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439: ".concat(discountedPrice, "\u20BD"));
}
var myProduct = {
    name: 'Смартфон',
    price: 30000,
    discount: 10
};
printFeaturedProduct(myProduct);
