"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favouritePlaces = [
    "Murry",
    "Hunza",
    "Sawat",
    "Naran",
    "Kaghan",
    "Islamabad",
];
console.log("Original arry :", favouritePlaces);
let duplicatePlaces = favouritePlaces.slice(); // copy of original its imp to make to avoid changing oaiginal arry.
console.log("Alphabetic Order:", duplicatePlaces.sort());
console.log("original arry :", favouritePlaces);
console.log("Reverse ALphabetic : ", duplicatePlaces.reverse());
console.log("Original arry:", favouritePlaces);
// now changing original list order
console.log("Order changed now:", favouritePlaces.reverse());
console.log("Back to original order :", favouritePlaces.reverse());
console.log("Alphabatic Order of Original List", favouritePlaces.sort());
console.log("Reverse ALphabatic Ordetr", favouritePlaces.reverse());
