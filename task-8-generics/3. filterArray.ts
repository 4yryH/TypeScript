/**
 * 3. Напиши и типизируй функцию `filterArray`,
 * которая будет фильтровать массив на основе переданного условия.
 * Проверь её работу на массивах разных типов данных.
 */

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log('Чётные числа:', evenNumbers);

const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);
console.log('Нечётные числа:', oddNumbers);

const names = ['Иван', 'Мария', 'Петр', 'Анна', 'Алексей'];
const longNames = filterArray(names, (name) => name.length > 4);
console.log('Имена длиннее 4 символов:', longNames);

const namesStartingWithA = filterArray(names, (name) => name.startsWith('А'));
console.log('Имена, начинающиеся на "А":', namesStartingWithA);

interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { name: 'Ноутбук', price: 50000, inStock: true },
    { name: 'Мышь', price: 1000, inStock: false },
    { name: 'Клавиатура', price: 3000, inStock: true },
    { name: 'Монитор', price: 15000, inStock: true },
    { name: 'Наушники', price: 2000, inStock: false }
];

const availableProducts = filterArray(products, (product) => product.inStock);
console.log('\nТовары в наличии:', availableProducts);

const expensiveProducts = filterArray(products, (product) => product.price > 5000);
console.log('Товары дороже 5000:', expensiveProducts);

const booleans = [true, false, true, true, false, false];
const trueValues = filterArray(booleans, (value) => value);
console.log('\nЗначения true:', trueValues);