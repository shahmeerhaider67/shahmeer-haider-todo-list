import inquirer from 'inquirer';
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What Do You Want To Add In Your Todo ?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do Your Want To Add More Todo ?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Add Valid Input");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todos Found !");
}
