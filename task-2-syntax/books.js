/**
 2. Определите тип для объекта, который будет представлять книгу. У книги должны быть следующие свойства:
 `title` (строка), `author` (строка), `year` (число - необязательный параметр!) и `isAvailable` (булево значение).
 Напишите функцию, которая будет проверять, доступна ли книга для аренды (по значению поля `isAvailable`),
 если она доступно - выведите в консоль год ее издания (если он указан!);
 */
var books = [
    {
        title: "Человек мыслящий",
        author: "Джеймс Аллан",
        year: 1903,
        isAvailable: true,
    },
    {
        title: "Приключения Тома Сойера",
        author: "Марк Твен",
        year: 1876,
        isAvailable: true
    },
    {
        title: "Корпорация бросай курить",
        author: "Стивен Кинг",
        isAvailable: true
    }
];
var isTheBookAvailable = function (book) {
    if (book.isAvailable) {
        if (book.year) {
            console.log("\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F: ".concat(book.year));
        }
    }
};
books.forEach(function (book) {
    console.log("\u041A\u043D\u0438\u0433\u0430: \"".concat(book.title, "\""));
    isTheBookAvailable(book);
});
