// Задача 3: Площадь прямоугольника
const aRect = parseFloat(prompt("Введите первую сторону прямоугольника:"));
const bRect = parseFloat(prompt("Введите вторую сторону прямоугольника:"));
if (!isNaN(aRect) && !isNaN(bRect)) {
    const sRectangle = aRect * bRect;
    console.log(`Площадь прямоугольника (${aRect}x${bRect}): ${sRectangle}`);
} else {
    console.error("Ошибка ввода сторон прямоугольника!");
}