var textfield1 = document.getElementById('textfield1');
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


//var bankAccount = 500;
//
//function Makebuy(ItemCost){
//    if(bankAccount >= ItemCost){
//        bankaccount -= ItemCost;
//        console.log("You have just completed a purchase");
//    }else{
//        console.log("you have insufficient funds");
//    }
//}
//
//Makebuy(230.0);
//console.log(bankAccount);
//
















