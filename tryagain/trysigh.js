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
//function addnum(l,w){
//    var area= l * w;
//    console.log(area +" br/>");
//}
//addnum(10,15);
//function areas(length,width){
//    return length * width;
//    
//}
//var area1 = areas(10,15);
//console.log(area1);
//function pressed(length,width){
// return length * width;
//    
//}
//area1 = pressed(12,2);
////console.log(area1);
//function func1(){
//    console.log("this is the first");
//}
//function func2(){
//    console.log("second");
//}
//function callfunc(){
//   
//  
//}
//callfunc(func1(),  func2());
//function area(length,width){
//var area1= length*width;
//    console.log(area1)
//}
//area(12,5);
var computers =["macbook","windows","iphone","abacus"];
var newInterest =[];
newInterest.push([0]);
newInterest.push([3]);
console.log(newInterest)
// this CAN go in an array EVEN WITH  the 'if'argument so we need to put it in a variable.
var BankAccount = 500;
function makepurchase (itemFOrSale){
    if (itemFOrSale <= BankAccount){
        BankAccount = BankAccount - itemFOrSale;
        console.log("you have made a purchase");
    }else{
        console.log("insufficient funds")
    }
}
console.log(BankAccount);
makepurchase(23);


console.log(BankAccount);
makepurchase(300);

console.log(BankAccount);
makepurchase(200);

console.log(BankAccount);
makepurchase(120);

console.log(BankAccount);
makepurchase(500);

console.log(BankAccount);

function area (l,w){
  return   l*w;
   
}
 
 
var RectangleAreas = [];
RectangleAreas.push(area(10,15));
RectangleAreas.push(area(12,15));
console.log(RectangleAreas);

var transaction = function(itemFOrSale){
    if (itemFOrSale <= BankAccount){
        BankAccount = BankAccount - itemFOrSale;
        console.log("you have made a purchase");
    }else{
        console.log("insufficient funds")
    }
};
//var printName function (first,Last){
//    console.log("First Name: " + first + " Last Nmae: " +last);
//}
//var appliForCreditcard(creditscore,soul){
//    // call some function to process
//}
//var BankOPerations = [];
//BankOPerations.push(transaction);
//BankOPerations.push(printName);
//BankOPerations.push(appliForCreditcard);
//
//function ulti(one,two){
//    console.log(one + " is better than "+ two);
//}
//ulti("real madrid", "barcelona");
//ulti("Manchester United", "Manchester City");
//
//function call (){
//    return ("what");
//}
//console.log(call());
//
//function addn(l,x){
//   var z = l+x;
//console.log(z);
//}
//
// 
// addn(2,7);











var BankAccount = 500;

var troubleman = function(itemPrice){
    if (itemPrice <= BankAccount){
        BankAccount = BankAccount - itemPrice;
        console.log("Transaction was succesfull");
    }else{
        console.log("Insufficient funds");
    }
}
console.log(BankAccount);
troubleman(230.00);
console.log(BankAccount);
troubleman(216.91);
console.log(BankAccount);
troubleman(300);
console.log(BankAccount);

/*single function*/
function single(x){
    console.log("this is "+ x);
}
single("shit");

// double function
function double(color1,color2){
    
    console.log("this is "+ color1 +", this is "+color2)
}
    
    double("blue","pink.");
    double("purple","yellow.");


function multi(leftside,rightside){
    var two = leftside + rightside;
    return two;
   
}
console.log(multi(2,5));


function trynew (l,w){
    return l + w;
}
    
var justry = trynew(12,12);
console.log(justry);

// no parametersin function

function end(){
    return "plain";

}console.log(end());

//
function newone(){
    console.log("Orlando Grant");
}
newone();


var paypal = function(Name,Password){
    console.log("first Name: " + Name +" <br/> "+ " last Name: " + Password);
}
paypal("Rolando","monahighskye89");



var thanks = function(){
    console.log("thank your for your purchase!");
}

thanks();

var ebayOperations = [];
ebayOperations.push(troubleman);
ebayOperations.push(paypal);
ebayOperations.push(thanks);
console.log(ebayOperations);

// freestylin'
 for (p = 0; p<justry;p++){
     console.log(p);
 }


//This can be in array beacuse it has a return value.
function tryx(q,we){
    return   q * we;
   

}
var blap =[];
blap.push(tryx(1,2));
blap.push(tryx(1,3));
blap.push(tryx(1,4));


console.log(blap);
for (var iggy =0; iggy < blap.length;iggy++){
    console.log(blap[iggy]);
}

function gal(){
    return "why";
    
}
console.log(gal());

// attempt f the funtion exercise

//Given one or more parameters, create a function that returns the area of a triangle.

function area(base, height){
    return    base /2  * height;
}

var area1 = area(18,6);
console.log(area1);




//Given one or more parameters, create a function that returns the area of a circle



function circleArea(radius){
    return 3.14 * radius * radius; //or Math.PI for pie
}

console.log(circleArea(8));

//Create a single function that can take one or more parameters, and can return the area regardless of the shape (single function for triangle, circle, or rectangle)




function calculateAreas2(type,parameter1,parameter2){
    if (type == "triangle"){
        return parameter1 /2 * parameter2;
    }else if (type == "circle"){
        return 3.14 * parameter1 * parameter1;
    }else if(type == "rectangle"){
        return  parameter1 * parameter2;
    }
        
    
}
console.log(calculateAreas2("triangle",12,6));
console.log(calculateAreas2("circle",12,6));
console.log(calculateAreas2("rectangle",12,6));


// arrays

var carz = ["la ferarri", "zonda","porsche","maclaren","bugatti","lamborghini","koeingsegg","lotus","benz","austin martin","rolls royce","bently"];

carz.push("dodge demon");
console.log([carz]);

var x_ray = carz.indexOf("bently");


if (x_ray > -1){
    carz.splice(x_ray,1);
}
console.log(carz);

var fav =[];
fav.push(carz[0]);






console.log(fav);

//var newfavcar =[];
//newfavcar.push(carz[0]);
//newfavcar.push(carz[1]);
//newfavcar.push(carz[2]);
//newfavcar.push(carz[3]);
//newfavcar.push(carz[4]);
//newfavcar.push(carz[5]);
//newfavcar.push(carz[6]);
//newfavcar.push(carz[8]);
//newfavcar.push(carz[9]);
//
//console.log(newfavcar);
//
//var blank = newfavcar.indexOf("la ferarri");
//console.log(newfavcar);
//if (blank > -1){
//    newfavcar.splice(blank,1)
//}
//console.log(newfavcar);
//


//for loops
//
//for (var v = 0; v < newfavcar.length; v++){
//    console.log('plus 1 ' +v);
//}
for (xy=0;xy<carz.length;xy++){
    console.log(carz[xy]);
    
}

var account = 400;
function makepur(priceof){
    if (priceof <=account){
        account-=priceof // or account = account - priceof
        console.log("u bought it");
    }else{
        console.log("u broke like a joke");
    }
}
makepur(23.98);
console.log(account);
makepur(123);
console.log(account);
makepur(400);


var arri =["five", "teb","fifteen"];
var flay =[];
flay.push(arri[1])
console.log(flay);

var deleter = flay.indexOf("teb");

if(deleter > -1){
    flay.splice(deleter,1);
}
    
console.log(flay);

function hair(){
    return "skye's hair is knarly, yh dude!"
}
console.log(hair());

function play(ta1,tap2){
    return ta1 + tap2
}
console.log(play(2,3));

function rep (length,w){
    var twea = length * w;
    console.log(twea);
    
}
rep(12,3);


var triangle = function(l,a){
    var avue = l + a;
    console.log(avue);
}
triangle(2,1);
triangle(3,1);

var somebank = function(creditscore){
    console.log("my score is "+ creditscore);
}
somebank(12);
arri.push(somebank);
arri.push(triangle);

console.log(arri);

var spoon =["splash","arnold","mexican","ashton kutcher"];

console.log(spoon);

for (var c = 0; c < spoon.length; c++){
    console.log(spoon[c]);
}



for (var bas = 0; bas < carz.length; bas++){
    console.log(carz[bas]);
}


for (z =1; z <= 100; z++){
    if (z % 3==0 && z % 5==0){
        console.log("codemonkey")
    }else if(z%3 ==0){
        console.log("code");
    }else if(z % 5 ==0){
        console.log("monkey");
    } else{
        console.log(z);
    }
}


//function person(name,age,height){
//    this.name = name;
//    this.age= age;
//    this.height = height;
//    
//}
//var orlando = new person("Orlando",28,5.9);
//var Christina = new person("Christina",28,5.6);
//
//console.log(orlando.age);
//console.log(orlando.name);
//console.log(Christina.name);
//console.log(Christina.age);
//console.log(orlando.height);
//console.log(Christina.height);
//
//function championsleague(teams,titles){
//    this.teams = teams;
//    this.titles = titles;
//}
//
//var real_madrid = new championsleague("real madrid",11);
//var Manchester_United = new championsleague("manchester United",2);
//var Ac_Milan = new championsleague("Ac Milan",5);
//var BAyern_Munich = new championsleague("Bayern mUnich",4);
//var fc_Barcelona= new championsleague("fc barcelona",5);
//
//console.log(real_madrid.titles);
//console.log(Manchester_United.teams);
//console.log(Ac_Milan.titles);
//console.log(BAyern_Munich.teams);
//console.log(fc_Barcelona.titles);


// initiallizing a objects and function
//
//feego = {name:"Feego",age:28,height:5.9};
//skye = {name:"skye Grant",age:2,height:4.1};
//console.log(feego.name + " is "+skye.name +" father");
//
//// adding a method to object
//
//function person(name,age){
//    this.name = name;
//    this.age = age;
//    this.yearstoretire = yearsofage;
//}
//
//
//function yearsofage(){
//    var yearsretire = 65 - this.age;
//    return yearsretire;
//    
//}
//var orlando = new person("Rolando",28);
//console.log(orlando.yearstoretire())
//
//
//function pressa(){
//    console.log("this is a single funtion");
//}
//pressa();
//// single parameter
//
//function player(name){
//    name = "orlando";
//    return name;
//}
//console.log(player())
//// double parameers
//
//function player1(first,endn){
//    console.log("First name: " + first + " endn: "+endn)
//}
//player1("orlando","grant");
//
//function addn (left,right){
//    return left+right;
//}
//console.log(addn(2,16));
//// creating properties for onbjects
//
//function people(name,age){
//    this.name = name;
//    this.age = age;
//}
//var orlando = new people("orlando Grant",28);
//var christna = new people("christina",28)
//
//console.log(orlando.name);
//console.log(orlando.age);
// 
//// initializing and object
//
//lando ={name:"feego",age:28,height:"5ft9, "};
//skye1 ={name:"skye", age:2,height:"4ft "}
//console.log("Hello, My name is "+ lando.name +" I am " +skye1.name +" father "+" I am " + lando.age + " and "+ lando.height+ "and skye is "+skye.age+" and "+skye.height);
//
//
//
//// creating methods for objects.
////blue-print constructing function.
//function people1(name,age){
//    this.name = name;
//    this.age = age;
//    this.finalage = yearsnum;
//    
//}
////creating method to do something.
//function yearsnum(){
//var yearstoretire = 65 - this.age;
//   return yearstoretire;
//   
//}
////create new object. 
//var chris = new people1("christina bromfield",28);
//var feegs = new people1("lenky blacks",28);
//// print out object and method calculated.
//
//console.log("I can wait "+feegs.finalage() + " years "+ "to retire");
//
//console.log(feego.name)
//
//
//
var bankaccount = 270.99;
function makepurchase(itemforSale){
    if (itemforSale <= bankaccount){
        bankaccount -= itemforSale;
        console.log("you have just bought this item")
    }
    else{
        console.log("insufficient")
    }
}
makepurchase(200);
console.log(bankaccount);
makepurchase(12);
console.log(bankaccount);

var buysomething = function(itemforsale1){
    if (itemforsale1 <= bankaccount){
        bankaccount -= itemforsale1;
        console.log("you have just bought this item")
    }
    else{
        console.log("insufficient")
    }
}

buysomething(10);
console.log(bankaccount)

var bankbusiness =[];
bankbusiness.push(buysomething);

var takeout = bankbusiness.indexOf(buysomething);
if (takeout > -1){
    bankbusiness.splice(takeout,1)
}
console.log(bankbusiness);







var trap =["atl"];

var slap = trap.indexOf("atl");
if (slap > -1){
    trap.splice(slap,1)
}
console.log(trap);




function batman(health,armour){
    this.health = health;
    this.armour = armour;
    this.comphitonce = compattck;
}

function compattck(){
    var comphit = 5 / 100 * this.armour;
    return comphit;
}
var player1 = new batman(100,100);
var player2 = new batman ()

console.log(player1.comphitonce())

function darkknight(att,powR){
    this.att = att;
    this.powR = powR;
    this.compattempt = compatt1;
}

function compatt1(){
    if (compStrength.att == 100 
&& compStrength.powR != 50){
      return  player1.health - 5;
        
    }
    else{
        console.log("not strong enough");
    }
}

var compStrength = new darkknight(100,100);

console.log(compStrength.compattempt());









// initialize;

//var bar = {name:"sippn slide",liqour:"overproof"}
//
//console.log(bar.name);
////  0R
//console.log(bar.liqour);
//var stud = {name:"MIley",
//            age:25,
//            sex:"female"
//           };
//console.log(stud.sex);
//console.log(stud["sex"]);
////  OOR
//var student23 = new Object();
//student23.alias = "feego";
//student23.zupto = "pluto";
//student23.age11 = 27;
//console.log(student23)
//
//var student0 = {};
//student0.name0 = "skye";
//student0.age0 = 2;
//student0.sex ="male";
//this.greetings(){
//    return "hey there "+this.sex;
//}
//console.log(student0);

//
//var students0 = new Object();
//students0.name0 = "Olanso";
//students0.sex0 = "male";
//students0.age0 = 21;
//
//var student1 ={name1:"feego",
//               sex1:"male",
//               age1:27,
//               
//}
//console.log(student1.greeting());
//
//var student2 ={};
//student2.name2="lonny";
//student2.sex2 ="female";
//student2.age2 = 44;
//console.log(student2["name2"])
//
//function Students(names,sexes,ages){
//    this.names = names;
//    this.sexes = sexes;
//    this.ages = ages;
//    this.greeting = function(){
//    return "my name is "+ this.name1 + " and I am "+ this.age1 +" years old"
//
//}
//var baby = new Students("Skye Grant","male",2);
//
//console.log(baby.greeting())
//
//    
//var pupils = [];
//pupils.push(students0);
//pupils.push(student1);
//pupils.push(student2);
//pupils.push(Students);
//
//
//for (varm tudor =0;tudor < pupils.length; tudor++)
//    
//console.log(pupils[tudor])
var bankcredit = 50;

 //freecoding
//var student0 ={firstname:"Orlanzo",
//               lastname:"grant", 
//               age:27,
//               greeting:function(){
//                 return  "this is the " +this.age +"th "+ "time I've done this..."
//               }
//
//              };
//console.log(student0.greeting());
//
////OOR
//var student1 ={};
//student1.firstname = "franklin";
//student1.lastname ="whyte";
//student1.age= 19;
//
////ORR
//var student2 = new Object();
//student2.firstname ="Bennedict";
//student2.lastname ="franklyn";
//student2.age = 14;
//
//// function object
//
//function Students(firstName,lastname,age,itemforpurcahase){
//    this.firstName = firstName;
//    this.lastname = lastname;
//    this.age = age;
//    this.itemforpurchase = itemforpurcahase;
//    this.greeting = function(){
//        return " hello my name is "+ this.firstName +" " +this.lastname +" and I am " + this.age + " years old";
//    
//
//
//    }
//     this.finalage = function(){
//    var agelimit = 28 - this.age;
//    return agelimit;
//
//     }
//    this.attempt = function(){
//    var transac = bankcredit - this.itemforpurchase;
//    return transac;
//}
//
//}
//
//
//
//var pupil = new Students("Jane", "Doe",8,23);
//console.log(pupil.age);
//console.log(pupil.attempt());
//console.log(pupil.finalage())
//
//var students =[];
//students.push(new Students("plies", "rodriquez",44));
//students.push(new Students("beyonce","knowles",38));
//students.push(new Students("clarence", "idiot",7));
//
//for (var index = 0; index < students.length; index++){
//    var student = students[index];
//    console.log(student.greeting());
//
//}
//
//
//
//
//
//
//function peoples(name,age){
//    this.name = name;
//    this.age = age;
//    this.elejh =function(){
//    var ageforjh = 5 + this.age;
//    return ageforjh;
//}
//    this
//}
//
//
//
//var trav = new peoples ("travis",9);
//console.log(trav.elejh())
//
//
//
//

var Crcard = 2000;



// BANKING APP-->
//function AcountInfo(firstName,lastName,address,purchases){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.address    = address;
//    this.purchases = purchases;
//    this.itemsbought = function(){
//        
//        var bought = Crcard - this.purchases;
//            return bought;s
//        
//    }
//    this.bank =function(){
//    if(Crcard >= purchases){
//        console.log("customer paid "+this.purchases+" "+" for this item");
//    }
//}
//    
//}
//
//
//
//
//
//
//
// 
////
////var person = new AcountInfo("Orlando","Grant","6d Camperdown Road Kingston 16",200)
//
//
//
//var  purchasehistory =[];
//
//purchasehistory.push(new AcountInfo("Orlando","Grant","6d Camperdown Road Kingston 16",200));
//purchasehistory.push(new AcountInfo("Oneal","Bailey","6d Camperdown Road Kingston 16",100));
//purchasehistory.push(new AcountInfo("Bobo","Jr","6d Camperdown Road Kingston 16",90));
//purchasehistory.push(new AcountInfo("Skye","Martinez","6d Camperdown Road Kingston 16",23));
//purchasehistory.push(new AcountInfo("Andrew","Draxler","6d Camperdown Road Kingston 16",200));
//purchasehistory.push(new AcountInfo("Dee","Dee","6d Camperdown Road Kingston 16",76));
//purchasehistory.push(new AcountInfo("J.K","Rowling","6d Camperdown Road Kingston 16",98.17));
//purchasehistory.push(new AcountInfo("Juaqin","Pheonix","6d Camperdown Road Kingston 16",12));
//purchasehistory.push(new AcountInfo("Denzel","Washington","6d Camperdown Road Kingston 16",20));
//purchasehistory.push(new AcountInfo("Terry","Crews","6d Camperdown Road Kingston 16",19));
//purchasehistory.push(new AcountInfo("Quintin","Terentino","6d Camperdown Road Kingston 16",35.99));






//for(var coede = 0; coede < purchasehistory.length; coede++){
//var bangz = purchasehistory[coede]
//console.log(.bank());
//}

//var triple= ["cars","bikes","plane"];
//var tirp = triple.join();
//console.log(tirp)
//
//triple.reverse();
//console.log(triple);
//triple.pop();
//console.log(triple);
//triple.push("bus");
//console.log(triple);
//var pinh = triple.join(' ');
//console.log(pinh);
//triple.sort();
//console.log(triple);
//triple.reverse();
//console.log(triple);
//var plap = triple.join();
//console.log(plap);
//
//var lpa = ["cons","true",12.4,9];
//
//var loop = lpa.concat(triple);
//console.log(loop);
//
//
//loop.reverse();
//console.log(loop);
//loop.sort();
//console.log(loop);
//console.log(loop[4]);
//for (var a =0; a < loop.length;a++){
//    console.log(loop[a]);
//}
//
//loop.pop()
//console.log(loop);

//
//var callout =prompt("welcome to:","")
//console.log(callout)
//
//var groceryList =["ham","turkey","cloves","cherry","pinappleslices"];
//groceryList.sort();
//var lime = groceryList.join(" <br/>");
//document.write(lime)
//orr
//
//for(var io=0;io<groceryList.length;io++){
//    var plc = groceryList[io]
//    document.write(plc,"<br/>")
//}




//var student0 ={firstname:"Orlando",
//               lastname:"Grant",
//               age:28
//              };
//
//
//console.log(student0.firstname);
//console.log(student0["lastname"]);
//
//
//var student1 ={};
//student1.firstname = "Ackeel";
//student1.lasname = "Brown";
//student1.age = 32;
//
//var student2 = new Object();
//student2.firstname = "Angela";
//student2.lastname = "Burke";
//student2.age = 55;
//
//
//function Students(firstname,lastname,age){
//    this.firstname = firstname;
//    this.lastname = lastname;
//    this.age =      age;
//    this.welcomeMsg = function(){
//        return "Bienvenidos! mi llamo "+ this.firstname + " " + this.lastname+" and I am "+ this.age + " years of age."
//    }
//}
//
//var bethy = new Students("Brenda", "Seguno", 21);
//console.log(bethy.welcomeMsg());
//
//
//
//
//var students =[];
//students.push(new Students("Florida", "James",26));
//students.push(new Students("James", "Earl_Jones",73));
//students.push(new Students("Rick","James_Bitch!", 63));
////
////students.push(student0);
////students.push(student1);
////students.push(student2);
//
//
//
//
//
//for (var index =0; index < students.length;index++){
//    var catche = students[index];
//        console.log(catche.welcomeMsg());
//}
//var pick = students[0];
//
//for (key in pick ){
//    console.log(pick[key]);
//}
//
//
//
//
//
////method OOP{
//
//


var damage = 5;
var health = 100;

//function plyer(health,armour){
//    this.health = health;
//    this.armour = armour;
//    this.attck = shot;
//}


//var shot = function(){
//    if (damage == 5){
//        return 5/ this.health;
//    }
//    else{
//        return this.health;
//    }
//}
//var shooter = new plyer(100,50);
//var demolition = new plyer(100,40);
//
//console.log(shooter.attck());


//function Attck(attckPwr,resistance){
//    this.attckPwr = attckPwr;
//    this.resistance = resistance;
//    this.holdout = function(){
//        if (damage == 5 && this.resistance < 40){
//    
//            console.log("did 10% damage to shooter")
//            return health - 10;
//        }else if(damage == 10){
//            return health - 5;
//        }
//        else{
//            console.log("did 0% damage");
//            return health;
//            
//        }
//
//    }
//    
//    
//}
//var demolition = new Attck(100,40);
//
//
//console.log(demolition.holdout());


//freestylin' trying to play cards


//var diamond =[1,2,3,4,5,6,7,8,9];
//var clubs = [1,2,3,4,5,6,7,8,9];
//var spade = [1,2,3,4,5,6,7,8,9];
//var heart = [1,2,3,4,5,6,7,8,9];
//var royals = ["King","Queen","Ace","Jack"];
//
//var rand1 = diamond[Math.floor(Math.random() * diamond.length)];
//
//console.log(rand1)
//
//    
//function dice(){
//    this.rollthedice = function(){
//        var roll = Math.round(Math.random()*6)+1
//        return roll;
//    
//    }
//}
//
//
//var player1 = new dice(1);
//console.log(player1.rollthedice())
//





var myArray = ['January', 'February', 'March'];

var rand = myArray[Math.floor(Math.random() * myArray.length)];

console.log(rand);


//I'm back


//var plan = ["one","two","three","four"];
//var addi = [];
//addi.push(plan[2])
//addi.push("five");
//console.log(addi)
//var takeoy = plan.indexOf("three");
//if (takeoy > -1){
//    plan.splice(takeoy,1);
//    
//}
//console.log(plan)
//var peace = plan.concat(addi);
//console.log(peace)
//var plac = peace.join();
//console.log(plac);
//peace.sort()
//peace.pop()
//console.log(peace)


var maine = function(){
    console.log("this is it!")
}
maine()
var add =function(left,right){
 var tan =   left +  right;
  return tan;  
}
 
console.log(add(2,4))

var tidy =[];
tidy.push(maine);
tidy.push(add);
console.log(tidy)

var people ={name:"lala",age:34,sex:"female"
};

var person = new Object();
person.name ="Cassie";
person.age =34;
person.sex="female";

var adult = {};
adult.name ="jimmy";
adult.age =34;
adult.sex= "female";

console.log(person.name);
console.log(adult.age);
console.log(people["name"])

function peoples(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex= sex;
    this.healthpack = function(){
        return "add healthpack to peoples";
    }
this.check = welcome;
    
}
    function welcome(){
    return "welcome my name is "+ this.name + " and I am "+ this.age;
}

var individuals =[];
var john = new peoples("lala",34,"female");
individuals.push(new peoples("lala,",34,"female"));
individuals.push(new peoples("joes",23,"male"));
individuals.push(new peoples("Cam",43,"male"))
console.log(john.healthpack());


//individuals.push(people);
//individuals.push(person);
//individuals.push(adult);
//console.log(individuals)

for (s =0; s < individuals.length;s++){
    var takene = individuals[s];
    console.log(takene.check())
}
    
    
for(var key in people ){
    console.log(people[key]);
}
   var numfield1 = document.getElementById("numfield1");
var numfield2 = document.getElementById("numfield2")
var Answer = document.getElementById("Answer")
numfield1.value = "test";
alert("hey")


function brainwash(){
    console.log("test")
}
brainwash() 
    