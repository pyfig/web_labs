// Задача 6: Фаренгейт -> Цельсий
const tfConvert = parseFloat(prompt("Введите температуру в °F:"));
if (!isNaN(tfConvert)) {
    const tcConvert = (tfConvert - 32) * 5/9;
    console.log(`${tfConvert}°F = ${tcConvert.toFixed(1)}°C`);
} else {
    console.error("Ошибка ввода температуры!");
}