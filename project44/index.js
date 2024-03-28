"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sandwichItems = function (...items) {
    items.forEach(element => console.log(`${element} item to be included in sandwiches`));
};
sandwichItems('cheez', 'garlic', 'perrer', 'black souce');
sandwichItems('eggs', 'carots', 'anions', 'tomotto');
