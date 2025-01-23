// Задача 5: Цельсий -> Фаренгейт
const tc = parseFloat(prompt("Введите температуру в °C:"));
if (!isNaN(tc)) {
    const tf = (tc * 9/5) + 32;
    console.log(`${tc}°C = ${tf.toFixed(1)}°F`);
} else {
    console.error("Ошибка ввода температуры!");
}