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
    var expenseType = document.getElementById("categoryName").value;
    var spent = parseInt(document.getElementById("moneySpent").innerHTML);
    var expenseAmt = parseInt(document.getElementById("expenseAmt").value);
    
    // making individual variables for each expense cause that's all i got. This is the LONG way :P
    var entertainmentExpense = parseInt(document.getElementById("entertainment").innerHTML);
    var foodExpense = parseInt(document.getElementById("food").innerHTML);
    var clothingExpense = parseInt(document.getElementById("clothing").innerHTML);
    var billsExpense = parseInt(document.getElementById("bills").innerHTML);
    // var expenseLog 

    if ( expenseAmt == "" || isNaN(expenseAmt)){
            alert("Please enter a valid number");
        }else if(expenseAmt <= currentBalance){
            currentBalance -= expenseAmt;
            document.getElementById("currentBalance").innerHTML = currentBalance;
            // document.getElementById(expenseType).innerHTML = expenseAmt;
            spent += expenseAmt;
            document.getElementById("moneySpent").innerHTML = spent;
            console.log(expenseType);
                // THE JOURNEY BEGINS.
                //please delete me if we find a way to convert expenseType into the expense categories.            
                if (expenseType == "entertainment"){
                    console.log("freef");
                    // grab expenseAmt and add it to the correct .categorySpent 
                    entertainmentExpense += expenseAmt;
                    console.log(entertainmentExpense);
                    document.getElementById("entertainment").innerHTML = entertainmentExpense
                }else if(expenseType == "food"){
                    foodExpense += expenseAmt;
                    document.getElementById("food").innerHTML = foodExpense;
                }else if(expenseType == "clothing"){
                    clothingExpense += expenseAmt;
                    document.getElementById("clothing").innerHTML = clothingExpense;
                }else{
                    billsExpense += expenseAmt;
                    document.getElementById("bills").innerHTML = billsExpense;
                }

                }

            
        
        else{
            alert("Sorry, you are currently broke");
        }
};