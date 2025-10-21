/**
 * 3. Создай интерфейс `Book` с полями `title`, `author`, `isbn`, `publishedYear`, и `genres`.
 * Напиши функцию `getBookSummary`, которая должна принимать объект книги, используя подходящий utility type,
 * чтобы взять только `title`, `author`, и `publishedYear`.
 * Напиши вторую функцию `sanitizeBookData`, которая удаляет поле `isbn` с помощью подходящего utility type;
 */

interface BookType {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genres: string[];
}

function getBookSummary(book: Pick<BookType, 'title' | 'author' | 'publishedYear'>): void {
    console.log(`Книга: "${book.title}" - Автор: ${book.author}, Год издания: ${book.publishedYear}`);
}

function sanitizeBookData(book: BookType): Omit<BookType, 'isbn'> {
    const { isbn, ...sanitized } = book;
    return sanitized;
}

const book: BookType = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    isbn: '978-5-17-084461-4',
    publishedYear: 1869,
    genres: ['Роман', 'Историческая проза']
};

getBookSummary({
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear
});

const sanitizedBook = sanitizeBookData(book);
console.log('\nКнига без ISBN:', sanitizedBook);

const anotherBook: BookType = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    isbn: '978-5-17-095847-8',
    publishedYear: 1967,
    genres: ['Роман', 'Фантастика']
};

getBookSummary(anotherBook);
console.log('\nОригинальная книга:', anotherBook);
console.log('Очищенная книга:', sanitizeBookData(anotherBook));
