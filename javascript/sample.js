var textfield1 = document.getElementById('textfield1');
var textfield2 = document.getElementById('textfield2');
var grabber = document.getElementById('grabber');
var result = document.getElementById('result');

grabber.addEventListener('submit',function(event){
    
    if (!textfield1.value || !textfield2){
      alert("please enter something in the fields"); 
    
    }
    else{
        var x = parseFloat(textfield1.value);
        var y = parseFloat(textfield2.value);
        
        //algorithm
        var answer = x / y;
        var percent = answer * 100;
        
        result.innerText = "Result: " +percent + "%";
        
        event.preventDefault();
        
    }
        
    
});


var bankAccount = 500;

var Makebuy = function(ItemCost){
    if(bankAccount >= ItemCost){
        bankAccount -= ItemCost;
        console.log("You have just completed a purchase");
    }else{
        console.log("you have insufficient funds");
    }
}
//
Makebuy(230.0);
console.log(bankAccount);
Makebuy(300);
console.log(bankAccount)

var cars =["ferari", "enzo","bugatti","austin martin"];

cars.reverse()
console.log(cars);
cars.sort();
console.log(cars);

var newt = cars.join(" ");
console.log(newt);

var Hypercars =["lambo","zonda","koeinsegg"];
var Supercars = Hypercars.concat(cars);
console.log(Supercars);
Supercars.sort();
console.log(Supercars);





var person = {firstname:"Orlando",lastname:"Grant",age:28};
console.log(person.lastname);

var person1 = new Object();
person1.firstname ="Lanny";
person1.lastname ="Onemoretime";
person1.age = 36;

var person2 = {};
person.firstname = "Erica";
person2.lastname = "Kane";
person2.age = 5;

var students = [];



//
//
//students.push(person);
//students.push(person1);
//students.push(person2);

function person3(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age =      age;
    this.greeting = function(){
        return "hello my name is "+this.firstname + " " +this.lastname +" and I am "+this.age +" years old"
    }
    
    
    
}
var jenny = new person3("jenny","loggins",15)
console.log(jenny.greeting());

students.push(new person3("marcia","garfield",12));
students.push(new person3 ("long-john","silver",104));
students.push(new person3("cornel","kentucky",22));



for (var index = 0; index < students.length; index++){
    var grab = students[index];
    console.log(grab.greeting());
}


console.log(students);

var badstudent = students.indexOf("long-john"[1]);
if (badstudent > -1){
    students.splice(badstudent,1);
    
}
console.log(students)
students.pop();
console.log(students);

students.reverse();
console.log(students)


//oneals car
this.car ="civic with ugly spoiler";

var FeegoCar={car:"lambo aventador", getcar:function(){
    return this.car;
}
    }
console.log(FeegoCar.getcar());
//store car til end of the day

var storecarhere = FeegoCar.getcar;
//day is over so now im ready to collect car;

console.log(storecarhere());

// sorting out my correct car

var myrealcar = storecarhere.bind(FeegoCar);
console.log(myrealcar());

//COMEBACK TO THIS















function player(attk,def){
    this.attk = attk;
    this.def = def;
    
}












