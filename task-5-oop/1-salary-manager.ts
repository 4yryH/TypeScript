/**
 * 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
 * Добавь метод для отображения информации о сотруднике. Затем создай класс-наследник `Manager`,
 * который добавит публичное свойство `department` и метод для отображения информации о зарплате только для менеджеров.
 */

class Employee {
    private name : string;
    private position : string;
    protected salary : number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    showInfo(): void {
        console.log (`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    private department : string;

    constructor(name: string, position: string, salary: number, department: string) {
        super(name, position, salary);
        this.department = department;
    }

    showInfo(): void {
        super.showInfo();
        console.log (`Department: ${this.department}`);
    }

    showSalaryInfo(): void {
        console.log (`Manager - Salary: ${this.salary}, Department: ${this.department}`);
    }
}

const employee = new Employee('Иван', 'Разработчик', 80000);
employee.showInfo();

const manager = new Manager('Петя', 'Менеджер', 100000, 'Отдел продаж');
manager.showInfo();
manager.showSalaryInfo();
