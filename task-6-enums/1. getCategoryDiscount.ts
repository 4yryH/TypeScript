/**
 * 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", "Clothing".
 * Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` и возвращает скидку
 * в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);
 */

enum ProductCategory {
    Electronics = "Electronics",
    Books = "Books",
    Clothing = "Clothing"
}

function getCategoryDiscount(category: ProductCategory): number {
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

console.log(`Скидка: ${getCategoryDiscount(ProductCategory.Electronics)}%`);
console.log(`Скидка: ${getCategoryDiscount(ProductCategory.Books)}%`);
console.log(`Скидка: ${getCategoryDiscount(ProductCategory.Clothing)}%`);

