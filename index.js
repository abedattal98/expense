var expenses = document.getElementById("minus");
var income = document.getElementById("plus");
var balance = document.getElementById("money");

var transactionHistory = [];
var totalExpenses = 00;
var totalIncome = 10;
//var x = load();
expenses.innerHTML = totalExpenses + ".00$";
income.innerHTML = totalIncome + ".00$";
balance.innerHTML = totalIncome - totalExpenses + ".00$";

function add() {
  var transactionBody = document.getElementById("text").value;

  var transactionAmount = document.getElementById("amount").value;
  if (!isFormValid(transactionBody, transactionAmount)) {
    return alert("form is not valid");
  }
  transactionAmount = parseInt(transactionAmount);
  if (transactionAmount > 0) {
    totalIncome += transactionAmount;
  } else {
    totalExpenses -= transactionAmount;
  }

  transactionHistory.push([transactionBody, transactionAmount]);
  updateIncome(totalIncome);
  updateExpense(totalExpenses);
  updateBalance(totalIncome - totalExpenses);
  document.getElementById("amount").value = "";
  document.getElementById("text").value = "";
  document.getElementById("History").innerHTML = transactionHistory.map(
    getFullName
  );
}
function getFullName(item) {
  var fullname = "Item " + item[0] + " price " + item[1] + ";";
  return fullname;
}
function updateIncome(value) {
  income.innerHTML = value + ".00$";
}
function updateExpense(value) {
  expenses.innerHTML = value + ".00$";
}
function updateBalance(value) {
  balance.innerHTML = value + ".00$";
}
function isEmpty(value) {
  return value.trim() == "";
}
function isNotNumber(number) {
  return isNaN(number);
}
function isFormValid(transactionBody, transactionAmount) {
  if (isEmpty(transactionBody) || isEmpty(transactionAmount)) {
    alert("please input a text");
    return false;
  }
  if (isNotNumber(transactionAmount)) {
    alert("Please input a number");
    return false;
  }
  return true;
}
