var money = document.getElementById("money");
var array=[]

function add(){

var s = required()
if (s){
    var amount = document.getElementById("amount").value
    var text = document.getElementById("text").value
    
    array.push([text,amount])
    console.log(array)
    document.getElementById("amount").value=""
    document.getElementById("text").value=""
    document.getElementById("History").innerHTML+=array.map(getFullName)
    
}
function getFullName(item) {
    var fullname = "Item " +item[0]+" price "+item[1];
    return fullname;
  }
  

}
function required()
{
var empt =document.getElementById("amount").value
var amount = document.getElementById("text").value
if (empt && amount == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}