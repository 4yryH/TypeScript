/**
 * 1. Реализуй и типизируй функцию `merge`, которая будет объединять два объекта,
 * возвращая объект с объединёнными свойствами обоих объектов.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var personInfo = {
    name: 'Иван',
    age: 30
};
var addressInfo = {
    city: 'Москва',
    street: 'Ленина'
};
var employeeInfo = {
    position: 'Разработчик',
    salary: 100000
};
var mergedResult1 = merge(personInfo, addressInfo);
console.log(mergedResult1);
var mergedResult2 = merge(mergedResult1, employeeInfo);
console.log(mergedResult2);
