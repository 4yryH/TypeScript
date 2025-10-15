/**
 * 1. Определи два типа: `Admin` и `User`, где у `Admin` есть поле `privileges` (массив строк),
 * а у `User` — поля `name` (строка) и `age` (число).
 * Создай пересечение этих типов в типе `AdminUser` и определи объект на основе этого типа;
 */

type Admin = {
    privileges: string[]
}

type User = {
    name: string,
    age: number
}

type AdminUser = Admin & User

const administrator: AdminUser = {
    name: "Петя",
    age: 123,
    privileges: ["add", "edit", "delete"]
}

console.log(administrator);