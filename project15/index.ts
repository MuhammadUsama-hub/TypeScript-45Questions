let guestNamesList:string[] = ["aftab Khan", "Muhammad Sami", "Uzair Khan"];
guestNamesList.forEach((e) =>
  console.log(
    `Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`
  )
);
console.log(
  `${guestNamesList[1]} we feel sad on your reply , but welcome you on our next dinner. hope you will come`
);
guestNamesList[guestNamesList.indexOf("Muhammad Sami")] = "Zubair Ansari";
guestNamesList.forEach((e) =>
  console.log(
    `Assalam-o-Alikum ${e} ,you are warmly invited in today's dinner at our residency`
  )
);
