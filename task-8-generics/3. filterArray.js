/**
 * 3. Напиши и типизируй функцию `filterArray`,
 * которая будет фильтровать массив на основе переданного условия.
 * Проверь её работу на массивах разных типов данных.
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log('Чётные числа:', evenNumbers);
var oddNumbers = filterArray(numbers, function (num) { return num % 2 !== 0; });
console.log('Нечётные числа:', oddNumbers);
var names = ['Иван', 'Мария', 'Петр', 'Анна', 'Алексей'];
var longNames = filterArray(names, function (name) { return name.length > 4; });
console.log('Имена длиннее 4 символов:', longNames);
var namesStartingWithA = filterArray(names, function (name) { return name.startsWith('А'); });
console.log('Имена, начинающиеся на "А":', namesStartingWithA);
var products = [
    { name: 'Ноутбук', price: 50000, inStock: true },
    { name: 'Мышь', price: 1000, inStock: false },
    { name: 'Клавиатура', price: 3000, inStock: true },
    { name: 'Монитор', price: 15000, inStock: true },
    { name: 'Наушники', price: 2000, inStock: false }
];
var availableProducts = filterArray(products, function (product) { return product.inStock; });
console.log('\nТовары в наличии:', availableProducts);
var expensiveProducts = filterArray(products, function (product) { return product.price > 5000; });
console.log('Товары дороже 5000:', expensiveProducts);
var booleans = [true, false, true, true, false, false];
var trueValues = filterArray(booleans, function (value) { return value; });
console.log('\nЗначения true:', trueValues);
