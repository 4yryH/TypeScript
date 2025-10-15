/**
 * 3. Создай два интерфейса: `Car` и `ElectricCar`.
 * Поля придумайте сами. Пусть `ElectricCar` расширяет `Car` и добавляет поле `batteryCapacity`.
 * Создайте объект электромобиля, типизируя его полученным интерфейсом.
 */
var myElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "белый",
    batteryCapacity: 75,
    range: 500
};
console.log("Электромобиль:", myElectricCar);
console.log("".concat(myElectricCar.brand, " ").concat(myElectricCar.model, " (").concat(myElectricCar.year, ")"));
console.log("\u0411\u0430\u0442\u0430\u0440\u0435\u044F: ".concat(myElectricCar.batteryCapacity, " \u043A\u0412\u0442\u00B7\u0447, \u0437\u0430\u043F\u0430\u0441 \u0445\u043E\u0434\u0430: ").concat(myElectricCar.range, " \u043A\u043C"));
