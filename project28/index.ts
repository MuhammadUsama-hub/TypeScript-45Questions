import inquirer from 'inquirer';
const answers =await inquirer.prompt([{message:'Enter you age',type:'number',name: 'age'}]) ;
if(answers.age === 2)
{
    console.log('You are a Baby')
}
else if(answers.age === 2 && answers.age < 4)
{
    console.log('you are a toddler')
}
else if(answers.age === 4 && answers.age < 13 )
{
    console.log('YOu arae a kid')
}
else if(answers.age === 13 && answers.age < 20 )
{
    console.log('You are a teen ager')
}
else if(answers.age === 20 && answers.age < 65) 
{
    console.log('ypu are an elder')
}
else {
    console.log('You are an adult')
}