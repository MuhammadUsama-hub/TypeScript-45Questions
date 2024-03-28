let itemsList = function (...items:string[]) {
  //Anonamouus function that returns array of items using rest operator ot take multipe parameters.
  return items;
};
console.log(
  "Languages List : ",
  itemsList(
    "English",
    "Urdu",
    "Pahsto",
    "Spanish",
    "French",
    "chinees",
    "Hindi"
  )
);
