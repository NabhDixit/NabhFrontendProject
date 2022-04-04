function add(event){
    let a=parseFloat(document.getElementById("f").value);
    let b=parseFloat(document.getElementById("l").value);    
    let sum=a+b;
    document.getElementById("res").innerHTML="<b>"+"Your answer is : " +"<b>"+ sum;
    }
    function subtract(event){
     let a=parseFloat(document.getElementById("f").value);
     let b=parseFloat(document.getElementById("l").value);  
    let minus=a-b;
    document.getElementById("res").innerHTML="Your answer is : "+minus;
    }
    function multiply(event){
    let a=parseFloat(document.getElementById("f").value);
    let b=parseFloat(document.getElementById("l").value);
    let product=a*b;
    document.getElementById("res").innerHTML="Your answer is : "+product;
    }
    function division(event){
    let a=parseFloat(document.getElementById("f").value);
    let b=parseFloat(document.getElementById("l").value);
    let divi=a/b;
    document.getElementById("res").innerHTML="Your answer is : "+divi;
    }
    function remainder(event){
    let a=parseFloat(document.getElementById("f").value);
     let b=parseFloat(document.getElementById("l").value);
     let rem=a%b;
    document.getElementById("res").innerHTML="Your answer is : "+rem;
    }