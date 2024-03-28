"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favourateGuestList = ['aftab Khan', 'Muhammad Sami', 'Uzair Khan'];
favourateGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
console.log(`${favourateGuestList[1]} we feel sad on your reply , but welcome you on our next dinner. hope you will come`);
favourateGuestList[favourateGuestList.indexOf('Muhammad Sami')] = 'Zubair Ansari';
favourateGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
console.log('Hurry ! Guyz I have found a bigger dinner tabel , now i am going to invite some more guest to dinner');
favourateGuestList.unshift('Kamran Qureshi'); // at top of gustlist
//ading guest at middle of list
// console.log(favourateGuestList)
if (favourateGuestList.length % 2 === 0) // checking if even lehgth
 {
    favourateGuestList.splice((favourateGuestList.length / 2) - 1, 0, 'Ahmed Sahab');
}
else // in odd length case
 {
    favourateGuestList.splice(Math.floor(favourateGuestList.length / 2), 0, 'Aziz Sahab');
}
favourateGuestList.splice(favourateGuestList.length, 0, 'Ameen Alam');
// console.log(favourateGuestList)
favourateGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
