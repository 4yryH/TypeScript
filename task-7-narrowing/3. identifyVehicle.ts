/**
 * 3. Создай интерфейсы `Car` и `Bicycle` с разными методами, и напиши предикат типа для каждого из них.
 * Затем реализуй функцию `identifyVehicle`, которая принимает `Car | Bicycle` и вызывает методы,
 * соответствующие определённому типу объекта.
 */

interface Car {
    brand: string;
    doors: number;

    startEngine(): void;

    drive(): void;
}

interface Bicycle {
    brand: string;
    gears: number;

    ringBell(): void;

    pedal(): void;
}

function isCar(vehicle: Car | Bicycle): vehicle is Car {
    return 'doors' in vehicle && 'startEngine' in vehicle;
}

function isBicycle(vehicle: Car | Bicycle): vehicle is Bicycle {
    return 'gears' in vehicle && 'ringBell' in vehicle;
}

function identifyVehicle(vehicle: Car | Bicycle): void {
    if (isCar(vehicle)) {
        console.log(`Автомобиль: ${vehicle.brand}, количество дверей: ${vehicle.doors}`);
        vehicle.startEngine();
        vehicle.drive();
    } else if (isBicycle(vehicle)) {
        console.log(`Велосипед: ${vehicle.brand}, количество передач: ${vehicle.gears}`);
        vehicle.ringBell();
        vehicle.pedal();
    }
}

const myCar: Car = {
    brand: 'Toyota',
    doors: 4,
    startEngine() {
        console.log('Двигатель запущен!');
    },
    drive() {
        console.log('Автомобиль едет');
    }
};

const myBicycle: Bicycle = {
    brand: 'Giant',
    gears: 21,
    ringBell() {
        console.log('Динь-динь!');
    },
    pedal() {
        console.log('Кручу педали');
    }
};

identifyVehicle(myCar);
identifyVehicle(myBicycle);