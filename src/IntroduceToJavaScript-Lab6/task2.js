// Задача 2: Площадь квадрата
const aSquare = parseFloat(prompt("Введите сторону квадрата:"));
if (!isNaN(aSquare)) {
    const sSquare = aSquare ** 2;
    console.log(`Площадь квадрата (сторона ${aSquare}): ${sSquare}`);
} else {
    console.error("Ошибка ввода стороны квадрата!");
}