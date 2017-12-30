var samp1 = document.getElementById('samp1');
var samp2 = document.getElementById('samp2');
var form  = document.getElementById('form');
var result = document.getElementById('result');

form.addEventListener('submit', function(event){
    if(!samp1.value || !samp2.value){
        console.log("Please enter values in the fields");
    }else{
        var x = parseFloat(samp1.value);
        var y = parseFloat(samp2.value);
        var div = x/y;
        var percentage = div *100;
        result.innerText = "Result : " + percentage + "%";
        event.preventDefault();
        
    }
})


//var person ={name:"Orlando",age:28,sex:"Male",greeting:function(){
//    return "I am " + this.name + " and I am " + this.age + " years old"
//}};
//
var person1 ={};
person1.name ="busy Signal";
person1.age = 35;
person1.sex ="male";
var personny = person1;
//var person2 = new Object();
//person2.name = "Pine";
//person2.age = 24;
//person.sex = "female";
//
//console.log(person.greeting());


var person = function(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.greeting = function(){
        return "my name is " + this.name + " and I am " + this.age + " Years old"
    }
}

var pi = new person("orlando",28,"male");

console.log(pi.greeting());

var count = [];

count.push(new person
("general",45,"male"));
count.push(new person("ghost",45,"male"));
count.push(new person("pine and ginja",23,"female"));

//for(var index = 0;index <count.length;index++){
//    var take = count[index];
//    console.log(take.greeting());
//}
for(var index in personny){
    console.log(personny[index]);
}
    
var cars = ["aslkajd","qsDWF","WAFQEFEQ"];
cars.push("YAPINGA");
cars.sort();
console.log(cars);
 var cars2 = cars.join(" ");
console.log(cars2);
cars.reverse();
console.log(cars);


var del = cars.indexOf("YAPINGA");
if (del >-1){
    cars.splice(del,1);
}
console.log(cars);
cars.pop();
console.log(cars)

var area=function (l,w){
 return l*w;
 
}
 console.log(area(3,4));
count.push(area);