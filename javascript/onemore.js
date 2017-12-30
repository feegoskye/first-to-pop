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
