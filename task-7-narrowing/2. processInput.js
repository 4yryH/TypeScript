/**
 * 2. Реализуй функцию `processInput`, которая принимает `string | number | null`.
 * Если значение — это `string`, выведи его в верхнем регистре. Если `number` — умножьте на 10.
 * Если `null`, выведи сообщение о пустом значении.
 */
function processInput(input) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log(input * 10);
    }
    else if (input === null) {
        console.log("\u041F\u0443\u0441\u0442\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
    }
}
processInput("\u0438\u0432\u0430\u043D");
processInput(10);
processInput(null);
