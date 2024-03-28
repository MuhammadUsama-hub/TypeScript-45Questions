"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let itemsObject = {};
let items = function (key, ...items) {
    itemsObject[key] = items;
};
items('Langusges', 'English', 'Urdu', 'French', 'Chinees');
items('Country', 'Pakistan', 'Saudi Aribia', 'Falastein', 'Turkey');
items('Mountains', 'K-2', 'Naga Parbat');
items('Cities', 'Islamabad', 'Los angelos', 'Istambol', 'Hanli Bazar');
console.log('Items Object :', itemsObject);
