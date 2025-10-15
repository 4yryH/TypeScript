/**
 * 3. Создай интерфейс `Dictionary`, представляющий собой словарь, в котором ключами являются строки,
 * а значениями – любые типы данных. Реализуй класс `MultiLanguageDictionary` с
 * методом для добавления слов и переводов на разных языках. Добавь метод для поиска перевода по языку и слову.
 */

interface Dictionary {
    [key: string]: any;
}

class MultiLanguageDictionary {
    private dictionary: Dictionary = {};

    addTranslation(word: string, language: string, translation: string): void {
        if (!this.dictionary[word]) {
            this.dictionary[word] = {};
        }
        this.dictionary[word][language] = translation;
        console.log(`Добавлено: "${word}" -> "${translation}" (${language})`);
    }

    findTranslation(word: string, language: string): string | null {
        if (this.dictionary[word] && this.dictionary[word][language]) {
            return this.dictionary[word][language];
        }
        return null;
    }

    showAllTranslations(word: string): void {
        if (!this.dictionary[word]) {
            console.log(`Слово "${word}" не найдено в словаре`);
            return;
        }
        
        console.log(`\nПереводы для слова "${word}":`);
        for (const language in this.dictionary[word]) {
            console.log(`  ${language}: ${this.dictionary[word][language]}`);
        }
    }

    showDictionary(): void {
        console.log('\nВесь словарь:');
        for (const word in this.dictionary) {
            console.log(`\n"${word}":`);
            for (const language in this.dictionary[word]) {
                console.log(`  ${language}: ${this.dictionary[word][language]}`);
            }
        }
    }
}

const dict = new MultiLanguageDictionary();

dict.addTranslation('hello', 'ru', 'привет');
dict.addTranslation('hello', 'es', 'hola');
dict.addTranslation('hello', 'fr', 'bonjour');

dict.addTranslation('world', 'ru', 'мир');
dict.addTranslation('world', 'es', 'mundo');
dict.addTranslation('world', 'fr', 'monde');

console.log('\n Поиск переводов:');
console.log(`"hello" на русском: ${dict.findTranslation('hello', 'ru')}`);
console.log(`"world" на испанском: ${dict.findTranslation('world', 'es')}`);
console.log(`"goodbye" на русском: ${dict.findTranslation('goodbye', 'ru')}`);

dict.showAllTranslations('hello');

dict.showDictionary();