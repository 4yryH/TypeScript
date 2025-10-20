/**
 * 3. Создай enum `ShippingStatus`, представляющий состояния доставки: "Pending", "Shipped", "Delivered", "Returned".
 * Напиши функцию `getStatusMessage`, которая принимает `ShippingStatus` и возвращает сообщение
 * в зависимости от состояния.
 */
var ShippingStatus;
(function (ShippingStatus) {
    ShippingStatus["Pending"] = "Pending";
    ShippingStatus["Shipped"] = "Shipped";
    ShippingStatus["Delivered"] = "Delivered";
    ShippingStatus["Returned"] = "Returned";
})(ShippingStatus || (ShippingStatus = {}));
function getStatusMessage(status) {
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
console.log("\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u043E\u0441\u044B\u043B\u043A\u0438: ".concat(getStatusMessage(ShippingStatus.Pending)));
console.log("\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u043E\u0441\u044B\u043B\u043A\u0438: ".concat(getStatusMessage(ShippingStatus.Shipped)));
console.log("\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u043E\u0441\u044B\u043B\u043A\u0438: ".concat(getStatusMessage(ShippingStatus.Delivered)));
console.log("\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u043E\u0441\u044B\u043B\u043A\u0438: ".concat(getStatusMessage(ShippingStatus.Returned)));
