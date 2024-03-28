let currentUsers :string[]= ['ahmed','adnan','uzair','hamza','shahmeer'] ;
let newUsers:string[] = ['AHMEd','UZAIR','parveen','aslam','kamran'] ;
for(let i = 0 ; i < newUsers.length ; i++)
{
    if(currentUsers.includes(newUsers[i].toLowerCase()))
    {
        console.log('Already Exist,ENter New One') ;
    }
    else {
        console.log(`${newUsers[i].toLowerCase()} , you are welcome!`)
    }
    // console.log(currentUsers.includes(newUsers[i].toLowerCase()) ? true : false)
}