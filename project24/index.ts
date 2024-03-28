let fruitsNames:string[] = ['apples','bananas','stubarrys','oranges'] ;
console.log('length check case',fruitsNames.length < 4 ? true : false) ;
console.log('mangoes availability case',fruitsNames.find(e=>e === 'mangoes') ? true : false)
console.log('mangoes notavailability case',fruitsNames.find(e=>e !== 'mangoes') ? true : false)
console.log('oranges index matches case',fruitsNames.indexOf('oranges') !== 3 ? true : false) ;
