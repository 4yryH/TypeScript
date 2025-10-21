/**
 * 1. У тебя есть интерфейс `Task`, который имеет обязательные поля `title` и `deadline`,
 * а также опциональные поля `priority` и `description`. Напиши функцию `createTask`,
 * которая принимает объект `Task`, но все поля в нем должны быть обязательными;
 */
var createTask = function (task) {
    console.log(task.title, task.deadline, task.priority, task.description);
};
createTask({
    title: "Закончить задание createTask",
    deadline: "21.10.2025",
    priority: 1,
    description: "Важная задача"
});
