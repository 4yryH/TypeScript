/**
 * 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`.
 * Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`.
 * У каждого из них метод `calculateSalary()` должен работать по-разному:
 * для `FullTimeEmployee` учитывать фиксированную месячную зарплату,
 * а для `Freelancer` — почасовую ставку и количество отработанных часов.
 */

abstract class Employee {
    constructor(public name: string) {}

    abstract calculateSalary(): number;

    showSalary(): void {
        console.log(`${this.name}: зарплата ${this.calculateSalary()} руб.`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, private monthlySalary: number) {
        super(name);
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class Freelancer extends Employee {
    constructor(
        name: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(name);
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const fullTimeEmp = new FullTimeEmployee('Иван Петров', 100000);
const freelancer = new Freelancer('Мария Сидорова', 1500, 120);

fullTimeEmp.showSalary();
freelancer.showSalary();