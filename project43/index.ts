let showMagicians = function (arr:string[])
{
   return arr
}
let makeGreat = function (arr:string[])
{
    arr.map((element,index) => {
       arr[index] = element + ' great mecision' ;
    })
    return arr
}
let magicians :string[]= ['Cobera Bhai','Zheerili Nagan','Gayab Langoor'] ;
let magicianDuplicate:string[] = magicians.slice() ;
let modifiedList:string[] = makeGreat(magicianDuplicate) ;
console.log('Original List',showMagicians(magicians)) ;
console.log('Modified List',showMagicians(modifiedList)) ;
