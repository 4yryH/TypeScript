/**
 * 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`.
 * У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`.
 * Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.
 */
function printDetails(info) {
    if ('age' in info) {
        console.log("\u0418\u043C\u044F: ".concat(info.name, ", \u0432\u043E\u0437\u0440\u0430\u0441\u0442 ").concat(info.age, " \u043B\u0435\u0442"));
    }
    else if ('employees' in info) {
        console.log("\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F: ".concat(info.name, ", \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432: ").concat(info.employees));
    }
}
var person = {
    name: 'Иван',
    age: 30
};
var organization = {
    name: 'ООО "Технологии"',
    employees: 150
};
printDetails(person);
printDetails(organization);
