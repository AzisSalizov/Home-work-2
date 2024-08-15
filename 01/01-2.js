let sum = parseFloat(prompt("Введите сумму, на которую хотите заправиться (сом):"));
let fuelType = prompt("Введите тип топлива (92, 95, 98, дизель, газ):");
let pricePerLiter;

switch (fuelType) {
    case "92":
        pricePerLiter = 70;
        break;
    case "95":
        pricePerLiter = 75;
        break;
    case "98":
        pricePerLiter = 80;
        break;
    case "дизель":
        pricePerLiter = 65;
        break;
    case "газ":
        pricePerLiter = 35;
        break;
    default:
        console.log("Неизвестный тип топлива.");
}


if (pricePerLiter) {
    let liters = sum / pricePerLiter;
    console.log(`Вы получите ${liters} литров топлива.`);
}
