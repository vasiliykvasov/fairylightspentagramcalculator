// Смена изображений http://www.cyberforum.ru/javascript/thread324476.html

var pentagram = new Array();
var speed = new Array();
var pentagramID = 0;
var speedID = 0;
var timeoutID;
// Создаем переменные под массивы, счетчики массивов и таймер

pentagram[0] = 'fairy-lights-pentagram-calculator-1.png';
pentagram[1] = 'fairy-lights-pentagram-calculator-2.png';
pentagram[2] = 'fairy-lights-pentagram-calculator-3.png';
// Пентаграммы
speed[0] = 666;
speed[1] = 66;
speed[2] = 6666;
// Скорости
function viewImages() { // Функция переключения картинок
    pentagramID++; // Следующая картинка
    if (pentagramID == pentagram.length) {
        pentagramID = 0;
    } // Обнуляем счетчик картинки, если больше картинок нет
    document.getElementById('fairy-lights-pentagram').src = pentagram[pentagramID];
    // Меняем картинку
    timeoutID = setTimeout("viewImages()", speed[speedID]);
    // Создаем таймер на повторение функции через значение скорости
}

function changeSpeed() { // Функция переключения скорости
    speedID++; // Следующая скорость
    if (speedID == speed.length) {
        speedID = 0;
    } // Обнуляем счетчик скорости, если больше скоростей нет
    document.getElementById('clicker').href = '#' + speed[speedID]; // Отображаем скорость в строке браузера
    clearTimeout(timeoutID); // Отменяем таймер повторения функции
    timeoutID = window.setTimeout("viewImages()", speed[speedID]); // Перезапускаем таймер повторения функции
}

window.onload = viewImages(); // Запускаем функцию переключения картинок при запуске