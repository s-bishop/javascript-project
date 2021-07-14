"use strict";

function addMoney(){
    var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
        var money = parseInt(document.getElementById("money").value);
        if (money == "" || isNaN(money)){
            alert("Please enter a valid number");
        }
        else{
            totalBudget += money;
            currentBalance += money;
            document.getElementById("totalBudget").innerHTML = totalBudget;
            document.getElementById("currentBalance").innerHTML = currentBalance;
        }
}

function addExpense(){
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var expense = document.getElementById("categoryName").value;
        var expenseAmt = parseInt(document.getElementById("expenseAmt").value);

        if ( expenseAmt == "" || isNaN(expenseAmt)){
            alert("Please enter a valid number");
        }
        else if(expenseAmt <= currentBalance){
            currentBalance -= expenseAmt;
            document.getElementById("currentBalance").innerHTML = currentBalance;
            document.getElementById(expense).innerHTML = expenseAmt;
        }
        else{
            alert("Sorry, you are currently broke");
        }
} 