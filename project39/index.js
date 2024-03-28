"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = function (city = 'Lahore', country = 'Pakistan') {
    return `\"${city},${country}\"`;
};
console.log(city_country('Sedney', 'Australia'));
console.log(city_country('Los-Angelos', 'united States'));
console.log(city_country('Madinah', 'Saudi Aribia'));
