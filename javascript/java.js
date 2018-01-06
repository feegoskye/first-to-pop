var name="Jack";
var age= 23;
var message ="my name is "+name+" and I am "+age+ " years old";


    console.log(message);
//oneals car
this.car = "bmw"

// my car
var Mycar={car:"lambo", 
    getcar:function(){
    return this.car;
}
         }

//park my car

console.log(Mycar.getcar);
var getcarnow = Mycar.getcar;

console.log(getcarnow());

var realgetcar = Mycar.getcar.bind(Mycar);
console.log(realgetcar());
