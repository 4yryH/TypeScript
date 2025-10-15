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

type Admin = {
    role: 'admin';
    name: string;
}

type RegularUser = {
    role: 'user';
    name: string;
}

type Guest = {
    role: 'guest';
    name: string;
}

type Person = Admin | RegularUser | Guest;

type Task = {
    title: string;
    isActive: boolean;
    isPublic: boolean;
    isHidden: boolean;
}

function assertNever(value: never): never {
    throw new Error(`Неожиданный тип пользователя: ${JSON.stringify(value)}`);
}

// 3) Функция фильтрации задач
function filterTasks(tasks: Task[], person: Person): Task[] {
    switch (person.role) {
        case 'admin':
            // Admin видит все задачи
            return tasks;
        
        case 'user':
            // User видит только активные задачи
            return tasks.filter(task => task.isActive);
        
        case 'guest':
            // Guest видит только публичные задачи
            return tasks.filter(task => task.isPublic);
        
        default:
            // 4) Обработка неправильного типа с использованием never
            return assertNever(person);
    }
}

const tasks: Task[] = [
    { title: 'Публичная активная задача', isActive: true, isPublic: true, isHidden: false },
    { title: 'Приватная активная задача', isActive: true, isPublic: false, isHidden: false },
    { title: 'Скрытая задача', isActive: false, isPublic: false, isHidden: true },
    { title: 'Публичная неактивная задача', isActive: false, isPublic: true, isHidden: false }
];

const admin: Admin = { role: 'admin', name: 'Иван' };
const user: RegularUser = { role: 'user', name: 'Мария' };
const guest: Guest = { role: 'guest', name: 'Гость' };

console.log('Admin видит:', filterTasks(tasks, admin).map(t => t.title));
console.log('User видит:', filterTasks(tasks, user).map(t => t.title));
console.log('Guest видит:', filterTasks(tasks, guest).map(t => t.title));