var textfield1 = document.getElementById('tetxtfield1');
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