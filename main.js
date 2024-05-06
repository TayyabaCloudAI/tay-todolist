#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.magenta.bold("\n \t Welcome to Tayyaba's To Dos Application \t \n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: chalk.white("What do you want to add in the to-do list?"),
            type: "input"
        }
    ]);
    todos.push(addTask.task),
        console.log(chalk.magenta(addTask.task), chalk.white("task has successfully been added in the list."));
    let addMore = await inquirer.prompt([
        {
            name: "addTask",
            message: chalk.white("Do you want to add more to-dos?"),
            type: "confirm",
            default: "false"
        }
    ]);
    condition = addMore.addTask;
}
console.log(chalk.white("Your updated To-Do List is:\n"));
console.log(chalk.magenta(`[ ${todos} ]`));
