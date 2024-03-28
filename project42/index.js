"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let showMagicians = function (arr) {
    arr.forEach(element => {
        console.log(`Hi, ${element}`);
    });
};
let makeGreat = function (arr) {
    arr.map((element, index) => {
        arr[index] = element + ' great mecision';
    });
    return arr;
};
let magicians = ['Cobera Bhai', 'Zheerili Nagan', 'Gayab Langoor'];
let magicianDuplicate = magicians.slice();
console.log(makeGreat(magicianDuplicate));
