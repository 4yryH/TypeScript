/**
 * 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`.
 * У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`.
 * Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.
 */

type Person = {
    name: string,
    age: number,
}

type Organization = {
    name: string,
    employees: number,
}

function printDetails(info: Person | Organization): void {
    if ('age' in info) {
        console.log(`Имя: ${info.name}, возраст ${info.age} лет`);
    } else if ('employees' in info) {
        console.log(`Организация: ${info.name}, сотрудников: ${info.employees}`);
    }
}

const person: Person = {
    name: 'Иван',
    age: 30
};

const organization: Organization = {
    name: 'ООО "Технологии"',
    employees: 150
};

printDetails(person);
printDetails(organization);