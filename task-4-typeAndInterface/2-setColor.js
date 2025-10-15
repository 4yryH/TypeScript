/**
 * 2. Создайте тип `Color` как объединение литеральных значений:
 * `"red" | "green" | "blue"`. Затем создайте функцию `setColor`,
 * которая возвращает строку, в зависимости от переданного цвета;
 */

function setColor(color) {
    switch (color) {
        case "red":
            return "Выбран красный цвет";
        case "green":
            return "Выбран зеленый цвет";
        case "blue":
            return "Выбран синий цвет";
    }
}
console.log(setColor("red"));
console.log(setColor("green"));
console.log(setColor("blue"));
