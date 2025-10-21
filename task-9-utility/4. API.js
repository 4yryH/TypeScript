/**
 * 4. Создай тип для статуса запроса API, который может быть `'loading'`, `'success'`, `'error'`.
 * Напиши функцию, которая принимает тип статуса, исключая `'loading'`.
 */
function handleCompletedRequest(status, message) {
    if (status === 'success') {
        console.log("\u0417\u0430\u043F\u0440\u043E\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D: ".concat(message || 'Данные получены'));
    }
    else if (status === 'error') {
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(message || 'Неизвестная ошибка'));
    }
}
handleCompletedRequest('success', 'Пользователь успешно авторизован');
handleCompletedRequest('error', 'Сервер не отвечает');
handleCompletedRequest('success');
function processApiResponse(status, data) {
    switch (status) {
        case 'loading':
            console.log('Загрузка данных...');
            break;
        case 'success':
            console.log('Данные загружены:', data);
            break;
        case 'error':
            console.log('Произошла ошибка:', data);
            break;
    }
}
console.log('\nПримеры всех статусов:');
processApiResponse('loading');
processApiResponse('success', { users: ['Иван', 'Мария'] });
processApiResponse('error', 'Таймаут соединения');
