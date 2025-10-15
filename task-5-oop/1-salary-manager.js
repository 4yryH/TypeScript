/**
 * 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
 * Добавь метод для отображения информации о сотруднике. Затем создай класс-наследник `Manager`,
 * который добавит публичное свойство `department` и метод для отображения информации о зарплате только для менеджеров.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary, department) {
        var _this = _super.call(this, name, position, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        console.log("Department: ".concat(this.department));
    };
    Manager.prototype.showSalaryInfo = function () {
        console.log("Manager - Salary: ".concat(this.salary, ", Department: ").concat(this.department));
    };
    return Manager;
}(Employee));
var employee = new Employee('Иван', 'Разработчик', 80000);
employee.showInfo();
var manager = new Manager('Петя', 'Менеджер', 100000, 'Отдел продаж');
manager.showInfo();
manager.showSalaryInfo();
