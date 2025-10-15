/**
 * 2. Создай переменную типа `unknown` и напиши функцию, которая принимает эту переменную,
 * и обрабатывает её в зависимости от типа. Например, если тип переменной - строка,
 * то выводим ее в консоль и так далее;
 */
var someValue;
function handleUnknown(value) {
    if (typeof value === 'string') {
        console.log("\u0421\u0442\u0440\u043E\u043A\u0430: ".concat(value));
    }
    else if (typeof value === 'number') {
        console.log("\u0427\u0438\u0441\u043B\u043E: ".concat(value));
    }
    else if (typeof value === 'boolean') {
        console.log("\u0411\u0443\u043B\u0435\u0432\u043E: ".concat(value));
    }
    else if (Array.isArray(value)) {
        console.log('Массив:', value);
    }
    else if (typeof value === "object" && value !== null) {
        console.log('Объект:', value);
    }
    else if (typeof value === 'function') {
        console.log('Это функция');
    }
    else if (value === null) {
        console.log('null');
    }
    else if (typeof value === 'undefined') {
        console.log('undefined');
    }
    else {
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
