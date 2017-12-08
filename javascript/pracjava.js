var xamfield1 = document.getElementById('xamfield1');
var xamfield2 = document.getElementById('xamfield2');
var formula   = document.getElementById('formula');
var result    = document.getElementById('result');

formula.addEventListener('submit',function(stopit ){
    if (!xamfield1.value || !xamfield2.value){
        alert("Please enter something in the provided fields");
    }else{
        var x = parseFloat(xamfield1.value);
        var y = parseFloat(xamfield2.value);
        
        var answer  = x/y;
        var answer2 = answer * 100;
        
        result.innerText ="Result: " + answer2 + "%"
        stopit.preventDefault();
    }
    
})