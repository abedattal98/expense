
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var money = document.getElementById("money");

var array=[]
var expenses = 100;
var income = 10;
var balance = 1;
//var x = load();
minus.innerHTML=expenses+".00$";
plus.innerHTML=income+".00$";
money.innerHTML=income-expenses+".00$";

function add(){

var s = required()
if (s){
    var amount = document.getElementById("amount").value
    var text = document.getElementById("text").value
    if(amount>0){
      income+=amount;
      load();
    }
    else{
      expenses+=amount;
      load();
    }
    array.push([text,amount])
    console.log(array)
    document.getElementById("amount").value=""
    document.getElementById("text").value=""
    document.getElementById("History").innerHTML=array.map(getFullName)
    
}
function getFullName(item) {
    var fullname = "Item " +item[0]+" price "+item[1]+";";
    return fullname;
  }
function load(){
minus.innerHTML=expenses+".00$";
plus.innerHTML=income+".00$";
money.innerHTML=income-expenses+".00$";
}
// function calculate(array){
// for ( i = 0; i < array.length; i++) {
    
// }
// }

}
function required()
{
var empt =document.getElementById("text").value
var amount = document.getElementById("amount").value
if (!empt )
{
alert("Please input a text");
return false;
}
if ( isNaN(amount) || !amount)
  {
  alert("Please input a number");
  return false;
}
else{
alert('Item has accepted : you can add another one');
return true; 
}
}