"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favGuestList = ['aftab Khan', 'Muhammad Sami', 'Uzair Khan'];
favGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
console.log(`${favGuestList[1]} we feel sad on your reply , but welcome you on our next dinner. hope you will come`);
favGuestList[favGuestList.indexOf('Muhammad Sami')] = 'Zubair Ansari';
favGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
console.log('Hurry ! Guyz I have found a bigger dinner tabel , now i am going to invite some more guest to dinner');
favGuestList.unshift('Kamran Qureshi'); // at top of gustlist
//ading guest at middle of list
// console.log(favGuestList)
if (favGuestList.length % 2 === 0) // checking if even lehgth
 {
    favGuestList.splice((favGuestList.length / 2) - 1, 0, 'Ahmed Sahab');
}
else // in odd length case
 {
    favGuestList.splice(Math.floor(favGuestList.length / 2), 0, 'Aziz Sahab');
}
favGuestList.splice(favGuestList.length, 0, 'Ameen Alam');
// console.log(favGuestList)
favGuestList.forEach(e => console.log(`Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`));
//now space available for only two guest
console.log('I feel said by telling you that there is only one table available for two guest only');
for (let i = 0; i <= favGuestList.length; i++) {
    console.log(`Sorry ${favGuestList[favGuestList.length - 1]} , i can't invited you for dinner`);
    favGuestList.pop();
}
console.log(favGuestList);
favGuestList.forEach(e => console.log(`${e} You are still invited at dinner`));
for (let i = 0; i <= favGuestList.length; i++) {
    favGuestList.pop();
}
// now favGuestList is empty
console.log('Guest List Now: ', favGuestList);
