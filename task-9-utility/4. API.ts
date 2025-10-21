/**
 * 4. Создай тип для статуса запроса API, который может быть `'loading'`, `'success'`, `'error'`.
 * Напиши функцию, которая принимает тип статуса, исключая `'loading'`.
 */

type ApiStatus = 'loading' | 'success' | 'error';

type CompletedStatus = Exclude<ApiStatus, 'loading'>;

function handleCompletedRequest(status: CompletedStatus, message?: string): void {
    if (status === 'success') {
        console.log(`Запрос успешно выполнен: ${message || 'Данные получены'}`);
    } else if (status === 'error') {
        console.log(`Ошибка при выполнении запроса: ${message || 'Неизвестная ошибка'}`);
    }
}

handleCompletedRequest('success', 'Пользователь успешно авторизован');
handleCompletedRequest('error', 'Сервер не отвечает');
handleCompletedRequest('success');

function processApiResponse(status: ApiStatus, data?: any): void {
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
