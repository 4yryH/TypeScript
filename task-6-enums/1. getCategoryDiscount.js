/**
 * 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", "Clothing".
 * Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` и возвращает скидку
 * в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);
 */
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["Electronics"] = "Electronics";
    ProductCategory["Books"] = "Books";
    ProductCategory["Clothing"] = "Clothing";
})(ProductCategory || (ProductCategory = {}));
function getCategoryDiscount(category) {
    switch (category) {
        case ProductCategory.Electronics:
            return 5;
        case ProductCategory.Books:
            return 10;
        case ProductCategory.Clothing:
            return 0;
        default:
            return 0;
    }
}
console.log("\u0421\u043A\u0438\u0434\u043A\u0430: ".concat(getCategoryDiscount(ProductCategory.Electronics), "%"));
console.log("\u0421\u043A\u0438\u0434\u043A\u0430: ".concat(getCategoryDiscount(ProductCategory.Books), "%"));
console.log("\u0421\u043A\u0438\u0434\u043A\u0430: ".concat(getCategoryDiscount(ProductCategory.Clothing), "%"));
