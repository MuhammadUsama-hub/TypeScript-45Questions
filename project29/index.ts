let favFruits:string[] = ['apples','bananas','grapes'] ;
// here we using includes array method to check the existance of fruits. its return is boolen
if(favFruits.includes('apples'))
{
    console.log(`I reallay like apples`)
}
if(favFruits.includes('bananas'))
{
    console.log(`I reallay like bananas`)
}
if(favFruits.includes('grapes'))
{
    console.log(`I reallay like grapes`)
}
if(!(favFruits.includes('stubarrys')))
{
    console.log(`I dont like stubarrys`)
}
