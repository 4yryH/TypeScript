/**
 2. Определите тип для объекта, который будет представлять книгу. У книги должны быть следующие свойства:
 `title` (строка), `author` (строка), `year` (число - необязательный параметр!) и `isAvailable` (булево значение).
 Напишите функцию, которая будет проверять, доступна ли книга для аренды (по значению поля `isAvailable`),
 если она доступно - выведите в консоль год ее издания (если он указан!);
 */

type Book = {
    title: string,
    author: string,
    year?: number,
    isAvailable: boolean,
}

const books: Book[] = [
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
]


const isTheBookAvailable = (book: Book) => {
    if (book.isAvailable) {
        if (book.year) {
            console.log(`Год издания: ${book.year}`);
        }
    }
}

books.forEach(book => {
    console.log(`Книга: "${book.title}"`);
    isTheBookAvailable(book);
});

