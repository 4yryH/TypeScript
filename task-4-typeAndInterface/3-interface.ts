/**
 * 3. Создай два интерфейса: `Car` и `ElectricCar`.
 * Поля придумайте сами. Пусть `ElectricCar` расширяет `Car` и добавляет поле `batteryCapacity`.
 * Создайте объект электромобиля, типизируя его полученным интерфейсом.
 */

interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
}

interface ElectricCar extends Car {
    batteryCapacity: number;
    range: number;
}

const myElectricCar: ElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "белый",
    batteryCapacity: 75,
    range: 500
};

console.log("Электромобиль:", myElectricCar);
console.log(`${myElectricCar.brand} ${myElectricCar.model} (${myElectricCar.year})`);
console.log(`Батарея: ${myElectricCar.batteryCapacity} кВт·ч, запас хода: ${myElectricCar.range} км`);
