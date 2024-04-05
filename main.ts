

import inquirer from "inquirer";

let myBalance = 10000; //in dollar

let myPin = 2244;
let pinAnswer = await inquirer.prompt([
    {
    name: "pin",
    message: "Enter your pin code",
    "type": "number"
    }
])
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt(
        [{
            name: "accountType",
            type: "list",
            choices: ["Current" , "Saving"],
            message: "Select your account types:",
        },
        {
        
            name: "transitionType",
            message: "Please select transition type",
            type: "list",
            choices: ["Withdraw" , "Check balance"]
            }
        
    ]
    );
    console.log(operationAns);

    if (operationAns.transitionType === "Withdraw") {
        let amountAns = await inquirer.prompt([

        
            {
                name: "amount",
                message: "Please select your amount",
                type: "list",
                choices: [1000,5000,7000,10000,20000],
            }
        ]);
        
        
        if  (myBalance < amountAns.amount) {
            
            console.log("Insuffcient balance");}

            
             else { myBalance -= amountAns.amount,

                console.log("Your remaining balance is: " + myBalance);}
            
        

    }
    else if (operationAns.transitionType === "Check balance")
    console.log("yourbalance is: " + myBalance);
}
else {
    console.log("Incorrect pin code");}
