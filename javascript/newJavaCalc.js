var numfield1= document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var formulate = document.getElementById('formulate');
var result = document.getElementById('result');
formulate.addEventListener('submit',function(event){
    if(!numfield1.value || !numfield2.value){
        alert("Please enter a number");
    }else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);
        
        //algorythm
        
     var answer  = x/y;
     var percent = answer * 100;
     result.innerText = "Answer: " + percent + "%";
     event.preventDefault(); 
        
    }
    
})


//oneal's car

this.car =" lambo with ugly spoiler";

//my car

var Mycar ={car:"bugatti",
            getcar:function(){
                return this.car;
    
}}

//park my car
console.log(Mycar.getcar());
var parkedMycar = Mycar.getcar;

console.log(parkedMycar());

var getMyrealCar = Mycar.getcar.bind(Mycar);
console.log(getMyrealCar());
// function workout
