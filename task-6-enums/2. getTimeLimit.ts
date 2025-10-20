/**
 * 2. Создай enum `DifficultyLevel` с несколькими уровнями сложности. Напиши функцию `getTimeLimit`,
 * которая принимает `DifficultyLevel` и возвращает максимальное время (в минутах) для выполнения
 * задачи на каждом уровне сложности;
 */

enum DifficultyLevel {
    High = "High",
    Medium = "Medium",
    Low = "Low",
}

function getTimeLimit(time: DifficultyLevel): number {
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

console.log(`Время на выполнение сложной задачи ${getTimeLimit(DifficultyLevel.High)} мин`);
console.log(`Время на выполнение средней задачи ${getTimeLimit(DifficultyLevel.Medium)} мин`);
console.log(`Время на выполнение легкой задачи ${getTimeLimit(DifficultyLevel.Low)} мин`);