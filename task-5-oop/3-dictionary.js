/**
 * 3. Создай интерфейс `Dictionary`, представляющий собой словарь, в котором ключами являются строки,
 * а значениями – любые типы данных. Реализуй класс `MultiLanguageDictionary` с
 * методом для добавления слов и переводов на разных языках. Добавь метод для поиска перевода по языку и слову.
 */
var MultiLanguageDictionary = /** @class */ (function () {
    function MultiLanguageDictionary() {
        this.dictionary = {};
    }
    MultiLanguageDictionary.prototype.addTranslation = function (word, language, translation) {
        if (!this.dictionary[word]) {
            this.dictionary[word] = {};
        }
        this.dictionary[word][language] = translation;
        console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E: \"".concat(word, "\" -> \"").concat(translation, "\" (").concat(language, ")"));
    };
    MultiLanguageDictionary.prototype.findTranslation = function (word, language) {
        if (this.dictionary[word] && this.dictionary[word][language]) {
            return this.dictionary[word][language];
        }
        return null;
    };
    MultiLanguageDictionary.prototype.showAllTranslations = function (word) {
        if (!this.dictionary[word]) {
            console.log("\u0421\u043B\u043E\u0432\u043E \"".concat(word, "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435"));
            return;
        }
        console.log("\n\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B \u0434\u043B\u044F \u0441\u043B\u043E\u0432\u0430 \"".concat(word, "\":"));
        for (var language in this.dictionary[word]) {
            console.log("  ".concat(language, ": ").concat(this.dictionary[word][language]));
        }
    };
    MultiLanguageDictionary.prototype.showDictionary = function () {
        console.log('\nВесь словарь:');
        for (var word in this.dictionary) {
            console.log("\n\"".concat(word, "\":"));
            for (var language in this.dictionary[word]) {
                console.log("  ".concat(language, ": ").concat(this.dictionary[word][language]));
            }
        }
    };
    return MultiLanguageDictionary;
}());
var dict = new MultiLanguageDictionary();
dict.addTranslation('hello', 'ru', 'привет');
dict.addTranslation('hello', 'es', 'hola');
dict.addTranslation('hello', 'fr', 'bonjour');
dict.addTranslation('world', 'ru', 'мир');
dict.addTranslation('world', 'es', 'mundo');
dict.addTranslation('world', 'fr', 'monde');
console.log('\n Поиск переводов:');
console.log("\"hello\" \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C: ".concat(dict.findTranslation('hello', 'ru')));
console.log("\"world\" \u043D\u0430 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u043E\u043C: ".concat(dict.findTranslation('world', 'es')));
console.log("\"goodbye\" \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C: ".concat(dict.findTranslation('goodbye', 'ru')));
dict.showAllTranslations('hello');
dict.showDictionary();
