import inquirer from 'inquirer';
let answers = await inquirer.prompt([{ message: 'Enter color', type: 'string', name: 'alienColor' }]);
console.log(answers);
if (answers.alienColor === 'green') {
    console.log('you have earned just 5 points');
}
else if (answers.alienColor === 'yellow') {
    console.log('you have earned just 10 points');
}
else if (answers.alienColor === 'red') {
    console.log('you have earned just 15 points');
}
else
    (console.log('Play again'));
