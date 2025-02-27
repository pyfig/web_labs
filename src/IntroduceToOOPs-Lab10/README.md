# Основы ООП

Задание:
1. Изучить материал по теме "Основы ООП в JavaScript"
2. Ответить на вопросы по теме
3. Создать классы в JavaScript

## Теория
1. [Введение в ООП](https://code.mu/ru/javascript/book/oop/intro/)
2. [Классы и объекты](https://code.mu/ru/javascript/book/oop/classes-objects/)
3. [Свойства объектов](https://code.mu/ru/javascript/book/oop/objects-properties/)
4. [Работа с множеством объектов](https://code.mu/ru/javascript/book/oop/many-objects/)
5. [Методы классов](https://code.mu/ru/javascript/book/oop/class-methods/)
6. [Параметры методов](https://code.mu/ru/javascript/book/oop/methods-parameters/)
7. [Свойства внутри класса](https://code.mu/ru/javascript/book/oop/properties-inside-class/)
8. [Методы внутри класса](https://code.mu/ru/javascript/book/oop/methods-inside-class/)
9. [Объявление свойств](https://code.mu/ru/javascript/book/oop/properties-declaration/)
10. [Конструктор класса](https://code.mu/ru/javascript/book/oop/class-constructor/)
11. [Параметры конструктора](https://code.mu/ru/javascript/book/oop/constructor-parameters/)
12. [Параметры конструктора в свойствах](https://code.mu/ru/javascript/book/oop/constructor-parameters-properties/)

## Ответы на вопросы

1. Как создать класс?
   - Класс создается с помощью ключевого слова `class`, за которым следует имя класса. Например:
   ```javascript
   class MyClass {
     // тело класса
   }
   ```

2. Как создать объект класса?
   - Объект класса создается с помощью ключевого слова `new` и имени класса. Например:
   ```javascript
   const myObject = new MyClass();
   ```

3. Что такое свойства объекта и как записать данные в свойства объекта?
   - Свойства объекта - это переменные, принадлежащие объекту. Они определяют характеристики объекта.
   - Записать данные в свойства можно:
     - Через конструктор при создании объекта
     - Напрямую через точечную нотацию
     - Через квадратные скобки

4. Как создать метод класса?
   - Методы класса - это функции, определенные внутри класса. Они создаются как обычные функции, но без ключевого слова `function`. Например:
   ```javascript
   class MyClass {
     myMethod() {
       // тело метода
     }
   }
   ```

5. Что такое конструктор и как создать его?
   - Конструктор - это специальный метод класса, который вызывается при создании нового объекта.
   - Он создается с помощью специального метода `constructor()`. Например:
   ```javascript
   class MyClass {
     constructor() {
       // инициализация объекта
     }
   }
   ```

## Практические задания
Решения заданий находятся в файлах:
- `person.js` - для задания с классом Person
- `rectangle.js` - для задания с классом Rectangle