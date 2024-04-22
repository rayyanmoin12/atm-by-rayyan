#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 67000;
let isContinue = true;
const pinCode = 6767;

console.log("Welcome to Faysal Bank ATM!");

console.log("Please insert your card")

let pinit = await inquirer.prompt([
    {
        type:"number",
        name:"num",
        message:"Enter your PIN"
    }
])

if(pinit.num === 6767)
    {
        do {
      
            let ans = await inquirer.prompt([
                {
                    type:"list",
                    name:"list",
                    message:"Select any option",
                    choices:["deposit", "withdraw", "fast cash", "balance check"]
                }
            ])
            
            //---------------------- code for deposit
            if(ans.list === "deposit")
                {
                let ans = await inquirer.prompt([
                    {
                        type: "number",
                        name: "deposit_amount",
                        message: "Please enter your amount: "
                    }
                ])
                if(ans.deposit_amount > 0)
                    {
                    myBalance = myBalance + ans.deposit_amount
                    console.log(myBalance);
                }    
            }    
            //--------------------code for withdraw
            else if(ans.list === "withdraw")
                {
                let ans = await inquirer.prompt([
                    {
                        type: "number",
                        name: "withdraw_amount",
                        message: "Please enter your amount: "
                    }
                ])
                if(ans.withdraw_amount <= myBalance)
                    {
                    myBalance = myBalance - ans.withdraw_amount
                    console.log(myBalance);
                }
                else
                {
                    console.log("Sorry, you don't enough to make this transaction.");    
                }              
            }
            //-------------------code for fast cash
            else if(ans.list === "fast cash")
                {
                let ans = await inquirer.prompt([
                    {
                        type: "list",
                        name: "fast_cash",
                        choices: ["1000", "2000", "3000", "4000", "5000", "10000", "other amount"],
                        message: "Please select how much you want to withdraw: "
                    }
                ]);
                let withdrawalAmount = parseInt(ans.fast_cash); // Convert to number
                
                if (withdrawalAmount === 1000 || withdrawalAmount === 2000 || withdrawalAmount === 3000 || withdrawalAmount === 4000 || withdrawalAmount === 5000 || withdrawalAmount === 10000) {
                    myBalance -= withdrawalAmount;
                } else  {
                    let otherResponse = await inquirer.prompt([
                        {
                            type: "number",
                            name: "other_amount",
                            message: "Enter your amount:"
                        }
                    ]);
                    if (otherResponse.other_amount > 0 && otherResponse.other_amount <= myBalance) {
                        myBalance -= otherResponse.other_amount;
                        console.log(`Your remaining balance is $${myBalance}`);
                    } else  {
                        console.log("Invalid amount entered or insufficient balance.");
                    }
                    
                }
            }
            else if(ans.list === "balance check")
                {
                console.log(`Your balance is $${myBalance}`);
            }
            //----------while loop condition
            let while_ans = await inquirer.prompt([
                {
                    type: "confirm",
                    name:"condition",
                    message: "do you want to continue? "
                }
            ])
            
            if(while_ans.condition === false)
                {
                isContinue = false
            }
            
            console.log("Thank you for using Faysal Bank services!");
            
        }while (isContinue);
    }
    else
    {
        console.log("Invalid PIN code");
    }

