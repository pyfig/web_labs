// Задача 4: Периметр прямоугольника
const aPerimeter = parseFloat(prompt("Введите сторону A прямоугольника:"));
const bPerimeter = parseFloat(prompt("Введите сторону B прямоугольника:"));
if (!isNaN(aPerimeter) && !isNaN(bPerimeter)) {
    const p = 2 * (aPerimeter + bPerimeter);
    console.log(`Периметр прямоугольника (${aPerimeter}x${bPerimeter}): ${p}`);
} else {
    console.error("Ошибка ввода сторон прямоугольника!");
}