/**
 * 3. Создай тип для объекта с информацией о книге: название, автор
 * и количество страниц (по аналогии с type User из примера).
 * Создай объект книги, соответствующий этому типу. Скомпилируй файл в .js.
 */

type bookInfo = {
    title: string,
    author: string,
    pages: number,
}

const asAManThinketh : bookInfo = {
    title: "Человек мыслящий",
    author: "Джеймс Аллен",
    pages: 200,

}

console.log(asAManThinketh);