/**
 * 2. Создай переменную типа `unknown` и напиши функцию, которая принимает эту переменную,
 * и обрабатывает её в зависимости от типа. Например, если тип переменной - строка,
 * то выводим ее в консоль и так далее;
 */

let someValue: unknown;

function handleUnknown(value: unknown): void {
    if (typeof value === 'string') {
        console.log(`Строка: ${value}`);
    } else if (typeof value === 'number') {
        console.log(`Число: ${value}`);
    } else if (typeof value === 'boolean') {
        console.log(`Булево: ${value}`);
    } else if (Array.isArray(value)) {
        console.log('Массив:', value);
    } else if (typeof value === "object" && value !== null) {
        console.log('Объект:', value);
    } else if (typeof value === 'function') {
        console.log('Это функция');
    } else if (value === null) {
        console.log('null');
    } else if (typeof value === 'undefined') {
        console.log('undefined');
    } else {
        console.log('Неизвестный тип');
    }
}

someValue = "Привет!";
handleUnknown(someValue);

someValue = 42;
handleUnknown(someValue);

someValue = true;
handleUnknown(someValue);

someValue = [1, 2, 3];
handleUnknown(someValue);

someValue = { a: 1, b: 2 };
handleUnknown(someValue);

someValue = null;
handleUnknown(someValue);

someValue = undefined;
handleUnknown(someValue);

someValue = function () { return "Я функция"; };
handleUnknown(someValue);