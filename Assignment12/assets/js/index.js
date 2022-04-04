var step =1;
const hide=()=>{     // on press next
    let el=document.getElementById("about");
    document.querySelectorAll(".errors").forEach(e=>e.remove());
    if(checkName() && checkEmail()){
        el.classList.add("hidden");    // add css class-Hidden to 'about' div on press next
        el.classList.remove("show");    // remove css class-show from 'about' div on press next 
    
        let eaddr=document.getElementById("addr");
        eaddr.classList.add("show");
        eaddr.classList.remove("hidden");
    }
    
}
const see=()=>{      //on press previous
    let el=document.getElementById("about");
    el.classList.add("show");
    el.classList.remove("hidden");
    let eaddr=document.getElementById("addr");
    eaddr.classList.add("hidden");
    eaddr.classList.remove("show");
}
const next1=()=>{
    let cpwd=document.getElementById("pwd");
    document.querySelectorAll(".errors").forEach(e=>e.remove());
    if(checkbirth() && checkAddr()){
        cpwd.classList.add("show");
        cpwd.classList.remove("hidden");

      let eaddr=document.getElementById("addr");
       eaddr.classList.add("hidden");
       eaddr.classList.remove("show");
    }
    
}
const see1=()=>{
    let cpwd=document.getElementById("pwd");
    cpwd.classList.remove("show");
    cpwd.classList.add("hidden");

    let eaddr=document.getElementById("addr");
    eaddr.classList.remove("hidden");
    eaddr.classList.add("show");
}

//Check NAME function

function checkName(event){
    var pname=document.getElementById("fname").value;
    let bool=true;
    if(pname.length<4 || pname.length>16){
        bool=false;
        let element=document.getElementById("fname");
        let html=`<p class="errors">Name should contain b/w 4 to 6 character(*)</p>`; // error class created here
        element.insertAdjacentHTML('afterend', html);
    }
    return bool;
}
function errorRemove(event){
    document.querySelectorAll(".errors").forEach(e=>e.classList.add("hidden"));
}

//Check Email 
function checkEmail(event){
    var eid=document.getElementById("emid").value;
    let bool=true;
    if(eid==""){
        bool=false;
        let el=document.getElementById("emid");
         let html=`<p class="errors">Plz provide email-Id(*)</p>`;
         el.insertAdjacentHTML('afterend',html);
    }
    return bool;
}
// check birth
function checkbirth(event){
    var birth=parseInt(document.getElementById("dob").value);
    let bool=true;
    if(birth==""){
        bool=false;
        let el=document.getElementById("dob");
        let html=`<p class="errors">you are not Eligible</p>`;
        el.insertAdjacentHTML('afterend', html);
    }return bool;
}
function checkAddr(event){
    var addr=document.getElementById("add").value;
    let bool=true;
    if(addr==""){
    bool=false;
    let el=document.getElementById("add");
         let html=`<p class="errors">Plz provide Address(*)</p>`;
         el.insertAdjacentHTML('afterend',html);
    }return bool;
}

function checkPwd(event){
    document.querySelectorAll(".errors").forEach(e=>e.remove());
    var p=document.getElementById("pword").value;
    
    var cp=document.getElementById("cp").value;
    let bool=true;
    if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(p)){
        bool=true;
    }
    else{
        bool=false;
        let el=document.getElementById("pword");
         let html=`<p class="errors">Plz make Strong Password(*)</p>`;
         el.insertAdjacentHTML('afterend',html);
    }
    
    return bool;
}
function checkCPwd(event){
    document.querySelectorAll(".errors").forEach(e=>e.remove());
    var p=document.getElementById("pword").value;
    var cp=document.getElementById("cp").value;
    let bool=true;
    if(cp!=p){
         bool=false;
         let el=document.getElementById("cp");
         let html=`<p class="errors">Confirm pwd should match with Pwd(*)</p>`;
         el.insertAdjacentHTML('afterend',html);
         
    }
    else if(p == 0 || cp==0){
        alert(`please provide a password`);
    }
    else{
        let ename=document.getElementById("fname").value;
        var eid=document.getElementById("emid").value;
        var birth=parseInt(document.getElementById("dob").value);
        var addr=document.getElementById("add").value;
        document.getElementById("res").innerHTML="your name is: " + "<b>"+ename+"</b>"+"<br>"+
        "your Email is : "+"<b>"+eid+"</b>"+"<br>"+
        "your Age is : "+"<b>"+birth+"</b>"+"<br>"+
        "your Addres is : "+"<b>"+addr+"</b>"+"<br>"; 
        document.getElementById("res1").innerHTML="Thank You!";
    }
    return bool;
}


    
    

/*function checkMail(event){
    
    if(/\S+@\S+\.\S+/.test(email_id)){
        bool=true;
    }
    else{
       bool=false;
       let element=document.getElementById("email");
       let html=`<p class="errors">Invalid email-Id(*)</p>`;
       element.insertAdjacentHTML('afterend', html);
    }

   return bool;
}*/
