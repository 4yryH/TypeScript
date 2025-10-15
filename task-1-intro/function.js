/**
 2. Возьми любую простую функцию (можно из домашек по JS) и типизируй ее.
 Задай правильные типы для аргументов и возвращаемого значения. Скомпилируй файл в .js
 */
var firstName = 'Oleg';
var lastName = 'Tishinskikh';
var occupation = 'software developer';
var greeting = "Hello, my name is ".concat(firstName, " ").concat(lastName, ". I am a ").concat(occupation, ".");
console.log(greeting);
var someObject = {
    name: 'Oleg',
    age: 32,
    country: 'Russia',
};
var getUserInfo = function (userInfo) {
    var name = userInfo.name, age = userInfo.age, country = userInfo.country;
    return "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(name, ". \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age, ". \u0421\u0442\u0440\u0430\u043D\u0430: ").concat(country);
};
console.log(getUserInfo(someObject));
