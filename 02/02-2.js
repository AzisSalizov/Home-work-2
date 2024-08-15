let regionCode = prompt("Введите код региона (от 01 до 09):");
let regionName;

switch (regionCode) {
    case "01":
        regionName = "Бишкек";
        break;
    case "02":
        regionName = "Ош";
        break;
    case "03":
        regionName = "Джалал-Абадская область";
        break;
    case "04":
        regionName = "Нарынская область";
        break;
    case "05":
        regionName = "Иссык-Кульская область";
        break;
    case "06":
        regionName = "Таласская область";
        break;
    case "07":
        regionName = "Баткенская область";
        break;
    case "08":
        regionName = "Чуйская область";
        break;
    case "09":
        regionName = "Ошская область";
        break;
    default:
        regionName = "Неизвестный регион";
}

console.log(`Регион: ${regionName}`);
