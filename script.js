"use strict"
let form = document.querySelector("form");
//let pushButton = document.getElementsByClassName("listener")
//let balance = 0;
let span = document.getElementById("balance");
let spanTwo = document.getElementById("moneySpent");
let budget = new FormData(form);
// let balance = document.querySelector("span").innerText;
// let budgetInput = document.getElementById("budgetAmt").valueAsNumber;

// form.addEventListener("submit", (event)=>{  
//     //prevent refresh
     //event.preventDefault();
     //     console.log(document.getElementById("budgetAmt").valueAsNumber);
     // });
     //add budget into the balance
     document.querySelectorAll(".listener").forEach(item => {
         item.addEventListener("submit", event => {
             event.preventDefault();
             document.querySelector("span").innerText = +(document.getElementById("budgetAmt").valueAsNumber);
            })
        })

        document.querySelectorAll(".listener").forEach(item => {
            item.addEventListener("submit", event => {
                //event.preventDefault();
                spanTwo.innerText = document.getElementById("moneyInput").valueAsNumber;
               })
           })

        
    // document.getElementById("submitTwo").addEventListener("submit", ()=>{  
    //     spanTwo.innerText = document.getElementById("moneyInput").valueAsNumber;
    //     console.log(document.getElementById("moneyInput").valueAsNumber)
    //     });
//amount added to money spent

//link amount to category



//subtract amount from balance







// Create starter values
// let expenses = []; // Array of expense objects
// let monthlyIncome = 0; // Numberical value
// let expenseTotal = 0; // Numebrical value
// let balance = 0; // Numerical value

// // Create references to monthly budget elements
// let monthlyBudget = document.getElementById("monthly_budget");
// let incomeInput = document.getElementById("income_input");
// let updateBudgetButton = document.getElementById("update_budget_button");

// //Build a function that displays the budget entered by the user
// function updateBudget(event) {
//     event.preventDefault(); // Prevent refresh
//     // Store user data entry into monthlyIncome
//     // Input values are strings; need to parse into an integer
//     monthlyIncome = parseInt (incomeInput.value);
//     // Display input in the app
//     monthlyBudget.innerText = "$" + incomeInput.value;
//     // Reset the form
//     incomeInput.value = "";
//     // Update the balance
//     updateBalance();
// }