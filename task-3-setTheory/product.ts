/**
 * 1. Создай два типа, представляющих детали продуктов: `BasicProduct` с названием и ценой и `DiscountProduct`,
 * который включает скидку. Используя пересечение, создайте тип `FeaturedProduct` и напиши функцию,
 * принимающую этот тип и выводящую информацию о продукте со скидкой;
 */
type BasicProduct = {
    name: string;
    price: number;
};

type DiscountProduct = {
    discount: number; 
};

type FeaturedProduct = BasicProduct & DiscountProduct;

function printFeaturedProduct(product: FeaturedProduct): void {
    const discountedPrice = product.price * (1 - product.discount / 100);
    console.log(
        `Продукт: ${product.name}\n` +
        `Цена: ${product.price}₽\n` +
        `Скидка: ${product.discount}%\n` +
        `Цена со скидкой: ${discountedPrice}₽`
    );
}

const myProduct: FeaturedProduct = {
    name: 'Смартфон',
    price: 30000,
    discount: 10
};

printFeaturedProduct(myProduct);
