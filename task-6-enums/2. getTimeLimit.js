/**
 * 2. Создай enum `DifficultyLevel` с несколькими уровнями сложности. Напиши функцию `getTimeLimit`,
 * которая принимает `DifficultyLevel` и возвращает максимальное время (в минутах) для выполнения
 * задачи на каждом уровне сложности;
 */
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["High"] = "High";
    DifficultyLevel["Medium"] = "Medium";
    DifficultyLevel["Low"] = "Low";
})(DifficultyLevel || (DifficultyLevel = {}));
function getTimeLimit(time) {
    switch (time) {
        case DifficultyLevel.High:
            return 10;
        case DifficultyLevel.Medium:
            return 8;
        case DifficultyLevel.Low:
            return 5;
        default:
            return 0;
    }
}
console.log("\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 ".concat(getTimeLimit(DifficultyLevel.High), " \u043C\u0438\u043D"));
console.log("\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 ".concat(getTimeLimit(DifficultyLevel.Medium), " \u043C\u0438\u043D"));
console.log("\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043B\u0435\u0433\u043A\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 ".concat(getTimeLimit(DifficultyLevel.Low), " \u043C\u0438\u043D"));
