// Flavoure One with builtin method
let userName : string = 'aHMed kHAn jAn';
userName = userName.toLowerCase();
let userNameList = userName.split(' ')
userNameList = userNameList.map(value => value[0].toUpperCase() + value.substring(1))
userName = userNameList.join(' ')
console.log(userName)

/* Flavoure Two with loop
let sentence = 'aHMed kHAn jAn';
userName = userName.toLowerCase();
userName = userName.split(' ')
for(let i = 0 ; i<userName.length ; i++)
{
    userName[i] = userName[i].charAt(0).toUpperCase() + userName[i].substring(1);
}
userName = userName.join(' ');
console.log(userName)
*/ 