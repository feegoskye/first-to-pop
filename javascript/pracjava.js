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

var riverdale =function(){
    return "riverdale2";
}
console.log(riverdale());

function person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.calculateretirement = retire;
    
}
function retire(){
    return  65 - this.age ;
    
}
var terrycrews = new person("terry crews",42,"male");
console.log(terrycrews.name)
console.log(terrycrews.calculateretirement());