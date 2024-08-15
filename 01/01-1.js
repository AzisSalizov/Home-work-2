let sum = parseFloat(prompt("Введите сумму, на которую хотите заправиться (сом):"));
let fuelType = prompt("Введите тип топлива (92, 95, 98, дизель, газ):");
let pricePerLiter;

if (fuelType === "92") {
    pricePerLiter = 70;
} else if (fuelType === "95") {
    pricePerLiter = 75;
} else if (fuelType === "98") {
    pricePerLiter = 80;
} else if (fuelType === "дизель") {
    pricePerLiter = 65;
} else if (fuelType === "газ") {
    pricePerLiter = 35;
} else {
    console.log("Неизвестный тип топлива.");
}

if (pricePerLiter) {
    let liters = sum / pricePerLiter;
    console.log(`Вы получите ${liters} литров топлива.`);
} else {
    console.log("Не удалось рассчитать количество топлива.");
}
