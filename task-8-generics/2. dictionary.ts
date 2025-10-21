/**
 * 2. Создай интерфейс `Dictionary`, который будет хранить пары ключ-значение.
 * Напиши функцию для добавления и удаления элементов из `Dictionary`.
 */

interface Dictionary<K extends string | number, V> {
    [key: string]: V;
}

function addToDictionary<K extends string | number, V>(
    dict: Dictionary<K, V>,
    key: K,
    value: V
): void {
    dict[key as string] = value;
}

function removeFromDictionary<K extends string | number, V>(
    dict: Dictionary<K, V>,
    key: K
): void {
    delete dict[key as string];
}

function getDictionaryValue<K extends string | number, V>(
    dict: Dictionary<K, V>,
    key: K
): V | undefined {
    return dict[key as string];
}

const userAges: Dictionary<string, number> = {};

addToDictionary(userAges, 'Иван', 30);
addToDictionary(userAges, 'Мария', 25);
addToDictionary(userAges, 'Петр', 35);

console.log('Словарь после добавления:', userAges);

console.log('Возраст Ивана:', getDictionaryValue(userAges, 'Иван'));

removeFromDictionary(userAges, 'Мария');

console.log('Словарь после удаления Марии:', userAges);

const productPrices: Dictionary<string, number> = {};

addToDictionary(productPrices, 'Хлеб', 50);
addToDictionary(productPrices, 'Молоко', 80);
addToDictionary(productPrices, 'Яйца', 120);

console.log('\nЦены на продукты:', productPrices);