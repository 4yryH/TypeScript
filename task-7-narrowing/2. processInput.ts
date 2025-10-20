/**
 * 2. Реализуй функцию `processInput`, которая принимает `string | number | null`.
 * Если значение — это `string`, выведи его в верхнем регистре. Если `number` — умножьте на 10.
 * Если `null`, выведи сообщение о пустом значении.
 */

function processInput(input: string | number | null): void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else if (typeof input === "number") {
        console.log(input * 10);
    } else if (input === null) {
        console.log(`Пустое значение`);
    }
}

processInput(`иван`);
processInput(10);
processInput(null);