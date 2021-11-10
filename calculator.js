var ratio = 7.89687523508; //Коэффициент 7.89687523508
var round = 1; // Единица округления (При изменении нужно править step в <input="number">)

function calculateLength() {
    var pentagramDiameter = Number(document.getElementById('pentagram-diameter-text').value);
    // Получаем диаметр пентаграммы

    var pentagramLength = pentagramDiameter * ratio;
    // Получаем длину умножением на коэффициент

    var pentagramLengthRound = Math.floor(pentagramLength * (10 ^ round)) / (10 ^ round);
    // Округляем

    document.getElementById('pentagram-length-text').value = pentagramLengthRound.toFixed(round);
}
function calculateDiameter() {
    var pentagramLength = Number(document.getElementById('pentagram-length-text').value);
    // Получаем длину пентаграммы

    var pentagramDiameter = pentagramLength / ratio;
    // Получаем длину умножением на коэффициент

    var pentagramDiameterRound = Math.floor(pentagramDiameter * (10 ^ round)) / (10 ^ round);
    // Округляем

    document.getElementById('pentagram-diameter-text').value = pentagramDiameterRound.toFixed(round);
    // Выводим длину
}
function changeMeasurment() {
    const INCH = 2.45;
    var measurment = document.getElementById('cm-in-diameter').innerHTML;
    if (measurment == 'cm') { // Переводим в дюймы
        document.getElementById('cm-in-diameter').innerHTML = 'in';
        document.getElementById('cm-in-perimeter').innerHTML = 'in';
        document.getElementById('cm-in-diameter-link').innerHTML = 'cm';
        document.getElementById('cm-in-perimeter-link').innerHTML = 'cm'; // Меняем сантиметры на дюймы и наоборот
        document.getElementById('pentagram-diameter-text').value = (document.getElementById('pentagram-diameter-text').value / INCH).toFixed(round);
        document.getElementById('pentagram-length-text').value = (document.getElementById('pentagram-length-text').value / INCH).toFixed(round); // Переводим числа в дюймы
    }
    if (measurment == 'in') {// Переводим в сантиметры
        document.getElementById('cm-in-diameter').innerHTML = 'cm';
        document.getElementById('cm-in-perimeter').innerHTML = 'cm';
        document.getElementById('cm-in-diameter-link').innerHTML = 'in';
        document.getElementById('cm-in-perimeter-link').innerHTML = 'in'; // Меняем дюймы на сантиметры и наоборот
        document.getElementById('pentagram-diameter-text').value = (document.getElementById('pentagram-diameter-text').value * INCH).toFixed(round);
        document.getElementById('pentagram-length-text').value = (document.getElementById('pentagram-length-text').value * INCH).toFixed(round); // Переводим числа в сантиметры
    }

}