/*var students = ["John","Juan","Stephen"];
var naughtyList = [];
naughtyList.push(students[0]);
console.log(naughtyList);

var replace = naughtyList.indexOf("John");
if (replace > -1){
 naughtyList.splice(replace,1);
}
console.log(replace);


var hypercars = ["ferari","bugatti","lamborghini","porsche","maclaren","zonda","koeinsegg","mercedes","nissanGTR","rolls royce","lotus"];

var top5 = [];
top5.push(hypercars[0]);
console.log(top5);
var replace = top5.indexOf("ferari");
if (replace > -1)
    top5.splice(replace,1);
    

console.log(replace);


var family = ["lando","christina","geneva","skye"];
var naughty = [];
naughty.push(family[3]);
console.log(naughty);

var replace = naughty.indexOf("skye");
if(replace > -1){
    naughty.splice(replace,1);
}
console.log(replace);
var tech = ["laptop","iphone","samsug","tv"];
var my5 =[];

my5.push(tech[3]);
console.log(my5);


var index = my5.indexOf("tv");

if (index > -1){
    my5.splice(index,1);
    console.log(index);
}


var bankAccount = ["$15000","20","13"];
var currentBalance = [];
currentBalance.push(bankAccount[2]);
console.log(currentBalance);

var emptyAccount = currentBalance.indexOf("13")
if (emptyAccount > -1){
    currentBalance.splice(emptyAccount,1);
}
console.log(currentBalance);*/



function MakeMeAwesome (){
    console.log("Awesome");
}
  
//using function with no parameter and calling the fucntion.

//function makeAwesome (){
//    console.log("awesome");
//    alert("awesome bitch");
//    alert("awesome bitch");
//    alert("awesome bitch");
//    alert("awesome bitch");
//    
//}

//makeAwesome();
//
// using single parameter to re-use the fuction.
//function MultipleMessages(ManyMessages){
//    console.log(ManyMessages);
//    alert(ManyMessages);
//}
//
//MultipleMessages("Yo Nicka");
//MultipleMessages("Yo Nicka");
//MultipleMessages("Yo Nicka");
//MultipleMessages("Yo Nicka");
//var  put2together = num1 % num2;
// //having multiple parameters to do calculations
//function AddNumbers(num1,num2){
// 
//    document.write(put2together + " <br/>");
//    
//}
//AddNumbers(2,3);
//AddNumbers(2,3);
//AddNumbers(2,3);
//AddNumbers(2,3);
//AddNumbers(2,3);
//AddNumbers(2,3);
//AddNumbers(2,3);
//document.write(put2together + " <br/>");
//
//// variable scopes, Global and internal
//
//var cinderella = "Cinder";
//function printoutname(){
//    
//    console.log(cinderella + " inside <br/>");
//}
//printoutname();
//console.log(cinderella + " outside");
//
/*this is a function without parameterswith object 'onclick' */

function Add2whenPresed(){
    console.log("this buton was pressed");
}
function AddTwoNum(num1,num2){
    var sum = num1 + num2;
    document.write(sum + " <br/>");
}
AddTwoNum(2,8);
AddTwoNum(2,8);
AddTwoNum(2,8);
AddTwoNum(2,8);
var currentbalance = 500;
function bankBalance(){
    
   document.write(currentbalance + " this is internal <br/>"); 
}
document.write(currentbalance + " this is global");
bankBalance();