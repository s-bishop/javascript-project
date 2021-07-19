"use strict";



function addMoney() {
  var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
  var currentBalance = parseInt(
    document.getElementById("currentBalance").innerHTML
  );
  var money = parseInt(document.getElementById("money").value);
  if (money == "" || isNaN(money)) {
    alert("Please enter a valid number");
  } else {
    totalBudget += money;
    currentBalance += money;
    document.getElementById("totalBudget").innerHTML = totalBudget;
    document.getElementById("currentBalance").innerHTML = currentBalance;
  }
}



function addExpense() {
  var currentBalance = parseInt(
    document.getElementById("currentBalance").innerHTML
  );
  var expenseType = document.getElementById("categoryName").value;
  var spent = parseInt(document.getElementById("moneySpent").innerHTML);
  var expenseAmt = parseInt(document.getElementById("expenseAmt").value);

  // making individual variables for each expense cause that's all i got. This is the LONG way :P
  // var entertainmentExpense = parseInt(document.getElementById("entertainment").innerHTML);
  // var foodExpense = parseInt(document.getElementById("food").innerHTML);
  // var clothingExpense = parseInt(document.getElementById("clothing").innerHTML);
  // var billsExpense = parseInt(document.getElementById("bills").innerHTML);
  var selectInd = document.querySelector("select").selectedIndex;
  var expenseLog = parseInt(
    document.querySelectorAll("li span")[selectInd].innerHTML
  );

  if (expenseAmt == "" || isNaN(expenseAmt)) {
    alert("Please enter a valid number");
  } else if (expenseAmt <= currentBalance) {
    currentBalance -= expenseAmt;
    document.getElementById("currentBalance").innerHTML = currentBalance;
    // document.getElementById(expenseType).innerHTML = expenseAmt;
    spent += expenseAmt;
    document.getElementById("moneySpent").innerHTML = spent;

    console.log(expenseType);
    console.log(expenseLog);

    expenseLog += expenseAmt;
    document.querySelectorAll("li span")[selectInd].innerHTML = expenseLog;
    // THE JOURNEY BEGINS.
    //please delete me if we find a way to convert expenseType into the expense categories.
    // if (expenseType == "entertainment"){
    //     console.log("freef");
    //     // grab expenseAmt and add it to the correct .categorySpent
    //     entertainmentExpense += expenseAmt;
    //     // console.log(entertainmentExpense);
    //     document.getElementById("entertainment").innerHTML = entertainmentExpense
    // }else if(expenseType == "food"){
    //     foodExpense += expenseAmt;
    //     document.getElementById("food").innerHTML = foodExpense;
    // }else if(expenseType == "clothing"){
    //     clothingExpense += expenseAmt;
    //     document.getElementById("clothing").innerHTML = clothingExpense;
    // }else{
    //     billsExpense += expenseAmt;
    //     document.getElementById("bills").innerHTML = billsExpense;
    // }
  } else {
    //alert("Sorry, you do not have enough funds for that");
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
  if (currentBalance == 0) {
    document.body.style.background = "red";

    // hide the James Money image if balance = 0
    document.getElementById("jamesMoney").style.display = "none";

    // show the Jesse No Money pic if balance is = 0
    document.getElementById("jesseNoMoney").style.display = "inline";

    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  }
}
