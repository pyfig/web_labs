let answer = prompt("Есть ли вам уже 18 лет? (Да/Нет)").toLowerCase();
if (answer === "да") {
    alert("Доступ разрешён");
} else {
    alert("Доступ запрещён");
}