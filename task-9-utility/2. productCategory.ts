/**
 * 2. Создай тип `ProductCategory`, который будет включать три категории продуктов: `electronics`, `clothing`, и `food`.
 * Затем создай тип `ProductInfo`, который содержит поля `name`, `price`, и `stock`. Используя подходящий utility type,
 * создай объект `products`, который будет связывать каждую категорию с массивом продуктов;
 */
type ProductCategories = 'electronics' | 'clothing' | 'food';

type ProductInfo = {
    name: string;
    price: number;
    stock: number;
}

const productsByCategory: Record<ProductCategories, ProductInfo[]> = {
    electronics: [
        { name: 'Ноутбук', price: 50000, stock: 10 },
        { name: 'Телефон', price: 30000, stock: 25 }
    ],
    clothing: [
        { name: 'Футболка', price: 1500, stock: 100 },
        { name: 'Джинсы', price: 3000, stock: 50 }
    ],
    food: [
        { name: 'Хлеб', price: 50, stock: 200 },
        { name: 'Молоко', price: 80, stock: 150 }
    ]
}

console.log(productsByCategory);
