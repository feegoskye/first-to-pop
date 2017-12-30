var poppy = function(stayingalive){
	console.log(stayingalive);
}

module.exports = poppy;

var gettyi = require('readline-sync');

 var name = gettyi.question("what is your name");
console.log("your name is " + name);
