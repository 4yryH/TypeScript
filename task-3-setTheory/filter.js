/**
 * 3*. Представь, что ты разрабатываешь приложение для списка задач. В этом задании нужно создать типы для задач
 * и пользователей, а затем отфильтровать задачи, доступные каждому типу пользователя,
 * используя объединение типов и специальные типы.
 *     Тебе нужно:
 *     1) Создать типы `Admin`, `User`, `Guest`, представляющие разных пользователей:
 *         - Admin — видит все задачи, включая скрытые.
 *         - User — видит только активные задачи.
 *         - Guest — видит только публичные задачи.
 *         Объедини роли пользователей, чтобы создать общий тип `Person`.
 *     2) Опиши тип `Task`, который может содержать поля `title`, `isActive`, `isPublic` и `isHidden`.
 *     3) Напиши функцию `filterTasks`, которая принимает массив задач
 *     и пользователя типа `Person` (Admin, User или Guest).
 *     Используй подходящий специальный тип (какой - тебе нужно выбрать) для проверки
 *     типа пользователя перед выполнением фильтрации.
 *     Пусть функция возвращает только те задачи, которые соответствуют правам конкретного пользователя:
 *         - Admin видит все задачи.
 *         - User — только те, что активны (`isActive: true`).
 *         - Guest — только публичные (`isPublic: true`).
 *     4) Если тип пользователя не соответствует Admin, User или Guest, выброси ошибку через функцию
 *     с подходящим специальным типом, чтобы обработать случай неправильного типа.
 */
function assertNever(value) {
    throw new Error("\u041D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(JSON.stringify(value)));
}
// 3) Функция фильтрации задач
function filterTasks(tasks, person) {
    switch (person.role) {
        case 'admin':
            // Admin видит все задачи
            return tasks;
        case 'user':
            // User видит только активные задачи
            return tasks.filter(function (task) { return task.isActive; });
        case 'guest':
            // Guest видит только публичные задачи
            return tasks.filter(function (task) { return task.isPublic; });
        default:
            // 4) Обработка неправильного типа с использованием never
            return assertNever(person);
    }
}
var tasks = [
    { title: 'Публичная активная задача', isActive: true, isPublic: true, isHidden: false },
    { title: 'Приватная активная задача', isActive: true, isPublic: false, isHidden: false },
    { title: 'Скрытая задача', isActive: false, isPublic: false, isHidden: true },
    { title: 'Публичная неактивная задача', isActive: false, isPublic: true, isHidden: false }
];
var admin = { role: 'admin', name: 'Иван' };
var user = { role: 'user', name: 'Мария' };
var guest = { role: 'guest', name: 'Гость' };
console.log('Admin видит:', filterTasks(tasks, admin).map(function (t) { return t.title; }));
console.log('User видит:', filterTasks(tasks, user).map(function (t) { return t.title; }));
console.log('Guest видит:', filterTasks(tasks, guest).map(function (t) { return t.title; }));
