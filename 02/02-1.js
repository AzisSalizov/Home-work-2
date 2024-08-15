let regionCode = prompt('Введите код региона (от 01 до 09):');
let regionName;

if (regionCode === "01") {
    regionName = "Бишкек";
} else if (regionCode === "02") {
    regionName = "Ош";
} else if (regionCode === "03") {
    regionName = "Джалал-Абадская область";
} else if (regionCode === "04") {
    regionName = "Нарынская область";
} else if (regionCode === "05") {
    regionName = "Иссык-Кульская область";
} else if (regionCode === "06") {
    regionName = "Таласская область";
} else if (regionCode === "07") {
    regionName = "Чуйская область";
} else if (regionCode === "08") {
    regionName = "Баткенская область";
} else if (regionCode === "09") {
    regionName = "Ошская область";
} else {
    regionName = "Неизвестный регион";
}

console.log(`Регион: ${regionName}`);
