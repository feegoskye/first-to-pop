var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var form = document.getElementById('form');
var result = document.getElementById('result');

form.addEventListener('submit',function(event){
    if(!numfield1.value || !numfield2){
        alert("please enter values in the following fields");
        
    }else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);
        
        var Answer = x/y;
        var percentage = Answer * 100;
        result.innerText ="Result : " + percentage + "%";
        event.preventDefault();
        
    }
})