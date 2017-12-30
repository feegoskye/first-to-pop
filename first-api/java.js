var express = require('express');
var app = express();

app.get('/',function(request, response){
    response.send('My first API!');
     
});
app.get('/cheetos',function(req, res){
    res.send('I need my cheetos!');
});

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});

var colors = require('colors');
console.log('hello'.green);
console.log('I like cake and pies'.underline.red);
console.log('inverse the color'.inverse);
console.log('OMG Rainbows!'.rainbow);
console.log('Run the trap'.trap);
colors.setTheme({
    custom:['black','america']
});
console.log('chalkboard'.zebra);
console.log('random is best way to go'.random)
console.log('America heck yh!'.custom);


this.car =" benx";
// immitation benz

var mycar={car:"lambo",getcar 
           :function(){
           return this.car;
          }
};
console.log(mycar.getcar());
//store car

var storecarhere = mycar.getcar;
console.log(storecarhere());
var storereal = storecarhere.bind(mycar);
console.log(storereal());