/**
 * 3. Создай интерфейсы `Car` и `Bicycle` с разными методами, и напиши предикат типа для каждого из них.
 * Затем реализуй функцию `identifyVehicle`, которая принимает `Car | Bicycle` и вызывает методы,
 * соответствующие определённому типу объекта.
 */
function isCar(vehicle) {
    return 'doors' in vehicle && 'startEngine' in vehicle;
}
function isBicycle(vehicle) {
    return 'gears' in vehicle && 'ringBell' in vehicle;
}
function identifyVehicle(vehicle) {
    if (isCar(vehicle)) {
        console.log("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C: ".concat(vehicle.brand, ", \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u0432\u0435\u0440\u0435\u0439: ").concat(vehicle.doors));
        vehicle.startEngine();
        vehicle.drive();
    }
    else if (isBicycle(vehicle)) {
        console.log("\u0412\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434: ".concat(vehicle.brand, ", \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ").concat(vehicle.gears));
        vehicle.ringBell();
        vehicle.pedal();
    }
}
var myCar = {
    brand: 'Toyota',
    doors: 4,
    startEngine: function () {
        console.log('Двигатель запущен!');
    },
    drive: function () {
        console.log('Автомобиль едет');
    }
};
var myBicycle = {
    brand: 'Giant',
    gears: 21,
    ringBell: function () {
        console.log('Динь-динь!');
    },
    pedal: function () {
        console.log('Кручу педали');
    }
};
identifyVehicle(myCar);
identifyVehicle(myBicycle);
