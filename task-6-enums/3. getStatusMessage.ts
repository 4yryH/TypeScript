/**
 * 3. Создай enum `ShippingStatus`, представляющий состояния доставки: "Pending", "Shipped", "Delivered", "Returned".
 * Напиши функцию `getStatusMessage`, которая принимает `ShippingStatus` и возвращает сообщение
 * в зависимости от состояния.
 */

enum ShippingStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Returned = "Returned",
}

function getStatusMessage(status: ShippingStatus): string {
    switch (status) {
        case ShippingStatus.Pending:
            return 'В ожидании';
        case ShippingStatus.Shipped:
            return 'Отправлена';
        case ShippingStatus.Delivered:
            return 'Доставлена';
        case ShippingStatus.Returned:
            return 'Возвращена';
        default:
            return 'Неизвестный статус';
    }
}

console.log(`Статус посылки: ${getStatusMessage(ShippingStatus.Pending)}`);
console.log(`Статус посылки: ${getStatusMessage(ShippingStatus.Shipped)}`);
console.log(`Статус посылки: ${getStatusMessage(ShippingStatus.Delivered)}`);
console.log(`Статус посылки: ${getStatusMessage(ShippingStatus.Returned)}`);