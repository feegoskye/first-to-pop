var busy = require('express');
var stayso = busy();

stayso.get ('/', function(req,res){
    res.send("this is your first apI");
});
stayso.get('/basically/insane',function(request,response){
    response.send("a nuff a dem stay so");
})

stayso.listen(3000,function(){
    console.log("stayso running on port 3000");
});
