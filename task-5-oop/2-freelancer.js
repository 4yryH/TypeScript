/**
 * 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`.
 * Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`.
 * У каждого из них метод `calculateSalary()` должен работать по-разному:
 * для `FullTimeEmployee` учитывать фиксированную месячную зарплату,
 * а для `Freelancer` — почасовую ставку и количество отработанных часов.
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
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.showSalary = function () {
        console.log("".concat(this.name, ": \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430 ").concat(this.calculateSalary(), " \u0440\u0443\u0431."));
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, monthlySalary) {
        var _this = _super.call(this, name) || this;
        _this.monthlySalary = monthlySalary;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.monthlySalary;
    };
    return FullTimeEmployee;
}(Employee));
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(name, hourlyRate, hoursWorked) {
        var _this = _super.call(this, name) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    Freelancer.prototype.calculateSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return Freelancer;
}(Employee));
var fullTimeEmp = new FullTimeEmployee('Иван Петров', 100000);
var freelancer = new Freelancer('Мария Сидорова', 1500, 120);
fullTimeEmp.showSalary();
freelancer.showSalary();
