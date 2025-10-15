/**
 2. Возьми любую простую функцию (можно из домашек по JS) и типизируй ее.
 Задай правильные типы для аргументов и возвращаемого значения. Скомпилируй файл в .js
 */

const firstName : string = 'Oleg';
const lastName : string = 'Tishinskikh';
const occupation :string = 'software developer';

const greeting : string = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`

console.log(greeting);


type User = {
    name : string,
    age : number,
    country : string,
}

const someObject : User = {
    name: 'Oleg',
    age: 32,
    country: 'Russia',
}

const getUserInfo = function (userInfo: User): string {
    const {name, age, country} = userInfo;

    return `Имя пользователя: ${name}. Возраст: ${age}. Страна: ${country}`
}

console.log(getUserInfo(someObject));