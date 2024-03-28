let showMagicians = function (arr:string[])
{
    arr.forEach(element => {
        console.log(`Hi, ${element}`) ;
    });
}
let makeGreat = function (arr:string[])
{
    arr.map((element,index) => {
       arr[index] = element + ' great mecision' ;
    })
    return arr
}
let magicians:string[] = ['Cobera Bhai','Zheerili Nagan','Gayab Langoor'] ;
let magicianDuplicate:string[] = magicians.slice()
console.log(makeGreat(magicianDuplicate)) ;
