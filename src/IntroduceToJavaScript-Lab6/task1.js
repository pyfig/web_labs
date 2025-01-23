// Задача 1: Площадь круга
const r = parseFloat(prompt("Введите радиус круга:"));
if (!isNaN(r)) {
    const sCircle = Math.PI * r ** 2;
    console.log(`Площадь круга (радиус ${r}): ${sCircle.toFixed(2)}`);
} else {
    console.error("Ошибка ввода радиуса!");
}
