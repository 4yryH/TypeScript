/**
 * 2. Создай интерфейс `Dictionary`, который будет хранить пары ключ-значение.
 * Напиши функцию для добавления и удаления элементов из `Dictionary`.
 */
function addToDictionary(dict, key, value) {
    dict[key] = value;
}
function removeFromDictionary(dict, key) {
    delete dict[key];
}
function getDictionaryValue(dict, key) {
    return dict[key];
}
var userAges = {};
addToDictionary(userAges, 'Иван', 30);
addToDictionary(userAges, 'Мария', 25);
addToDictionary(userAges, 'Петр', 35);
console.log('Словарь после добавления:', userAges);
console.log('Возраст Ивана:', getDictionaryValue(userAges, 'Иван'));
removeFromDictionary(userAges, 'Мария');
console.log('Словарь после удаления Марии:', userAges);
var productPrices = {};
addToDictionary(productPrices, 'Хлеб', 50);
addToDictionary(productPrices, 'Молоко', 80);
addToDictionary(productPrices, 'Яйца', 120);
console.log('\nЦены на продукты:', productPrices);
