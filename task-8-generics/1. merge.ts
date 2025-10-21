/**
 * 1. Реализуй и типизируй функцию `merge`, которая будет объединять два объекта,
 * возвращая объект с объединёнными свойствами обоих объектов.
 */

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}

const personInfo = {
    name: 'Иван',
    age: 30
};

const addressInfo = {
    city: 'Москва',
    street: 'Ленина'
};

const employeeInfo = {
    position: 'Разработчик',
    salary: 100000
};

const mergedResult1 = merge(personInfo, addressInfo);
console.log(mergedResult1);

const mergedResult2 = merge(mergedResult1, employeeInfo);
console.log(mergedResult2);
