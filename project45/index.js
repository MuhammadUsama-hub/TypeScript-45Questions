"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = {};
let carInfo = function (manufacturer = 'Audi', model = 2024, color = 'Silver', drivingMode = 'Auto') {
    car.manufacturer = manufacturer;
    car.model = model;
    car.color = color;
    car.drivingMode = drivingMode;
    return car;
};
console.log('Car Data ', carInfo());
