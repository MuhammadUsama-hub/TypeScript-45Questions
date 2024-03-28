"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let showMagicians = function (arr) {
    return arr;
};
let makeGreat = function (arr) {
    arr.map((element, index) => {
        arr[index] = element + ' great mecision';
    });
    return arr;
};
let magicians = ['Cobera Bhai', 'Zheerili Nagan', 'Gayab Langoor'];
let magicianDuplicate = magicians.slice();
let modifiedList = makeGreat(magicianDuplicate);
console.log('Original List', showMagicians(magicians));
console.log('Modified List', showMagicians(modifiedList));
