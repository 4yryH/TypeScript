/**
 * 3. Создай интерфейс `Book` с полями `title`, `author`, `isbn`, `publishedYear`, и `genres`.
 * Напиши функцию `getBookSummary`, которая должна принимать объект книги, используя подходящий utility type,
 * чтобы взять только `title`, `author`, и `publishedYear`.
 * Напиши вторую функцию `sanitizeBookData`, которая удаляет поле `isbn` с помощью подходящего utility type;
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function getBookSummary(book) {
    console.log("\u041A\u043D\u0438\u0433\u0430: \"".concat(book.title, "\" - \u0410\u0432\u0442\u043E\u0440: ").concat(book.author, ", \u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F: ").concat(book.publishedYear));
}
function sanitizeBookData(book) {
    var isbn = book.isbn, sanitized = __rest(book, ["isbn"]);
    return sanitized;
}
var book = {
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
var sanitizedBook = sanitizeBookData(book);
console.log('\nКнига без ISBN:', sanitizedBook);
var anotherBook = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    isbn: '978-5-17-095847-8',
    publishedYear: 1967,
    genres: ['Роман', 'Фантастика']
};
getBookSummary(anotherBook);
console.log('\nОригинальная книга:', anotherBook);
console.log('Очищенная книга:', sanitizeBookData(anotherBook));
