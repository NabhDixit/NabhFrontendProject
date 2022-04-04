$(document).ready(function(){

    $("#fname_error_message").hide();
    $("#email_error_message").hide();
    $("#age_error_message").hide();
    $("#address_error_message").hide();
    $("#pwd_error_message").hide();
    $("#cpwd_error_message").hide();
       
    var error_fname = false ;
    var error_email = false ;
    var error_age = false;
    var error_pwd = false;
    var error_cpwd = false;

    $("#form_fname").keyup(function(){    //-------------function Calling--------------
        check_fname();               
    });
    $("#form_email").keyup(function(){
        check_email();               
    });
    $("#form_age").keyup(function(){
        check_age();
    });
    $("#form_pwd").keyup(function(){
        check_pwd();
    });
    $("#form_cpwd").keyup(function(){
        check_cpwd();
    });

    //--------------- Name Validation----------------------------------
    function check_fname(){
        var pattern= /^[a-zA-Z]*$/;
        var fname= $("#form_fname").val();   //------jiski id "form_fname h uski value 'fname variable me le li' "
        if(pattern.test(fname) && fname != ''){
            $("#fname_error_message").hide();
        }
        else{
           $("#fname_error_message").html("Should contain only Characters");
           $("#fname_error_message").show();
           $("#form_fname").css("border-bottom","2px solid #F90A0A");
           error_fname=true;
        }
    }
    
    //---------------------Email Validation------------------------------
    function check_email(){
        var pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email=$("#form_email").val();
        if(pattern.test(email) && email !=''){

           $("#email_error_message").hide();  

        }
        else{

           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           error_email=true;

        }
    }

    //------------------------------Age Validation----------------------------
    function check_age(){
        var age=$("#form_age").val();
        if(age>18 && age<50 && age !=""){
             $("#age_error_message").hide();
        }
        else{
            $("#age_error_message").html("only 18 + and 50 -");
            $("#age_error_message").show();  
            error_age = true;
        }
    }
 
    //---------------------------------Password Validation-----------------------------
    function check_pwd(){
        var pattern= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        var pwd = $("#form_pwd").val();
        if(pattern.test(pwd) && pwd !=""){
            $("#pwd_error_message").hide();
        }
        else{
            $("#pwd_error_message").show();
            $("#pwd_error_message").html("plz provide Strong Password");
            error_pwd = true;
        }
    }

    //--------------------------ConfirmPassword Validation-----------------------------
    function check_cpwd(){
        var pwd=$("#form_pwd").val();
        var cpwd=$("#form_cpwd").val();
        if(cpwd==pwd){
            $("#cpwd_error_message").hide();
        }
        else{
            $("#cpwd_error_message").show();
            $("#cpwd_error_message").html("Confirm Pwd din't match");
            error_cpwd = true;
        }
    }
    //----------------------On press Next---------------------------------------------------
    $("#next,#ball_2").click(function(){
       
        let form_name =$("#form_fname").val();
        let form_mail =$("#form_email").val();
        if(form_name !=="" && form_mail !== "" ){
            $("#fname_error_message").hide();
            $("#email_error_message").hide();
            $(".hidden1").show();
            $(".page1").hide();
            $("#ball_2").css("background-color","red");
            $("#ball_1").css("background-color","cadetblue");
            
        }
    
        else if(form_name == ""){
             $("#fname_error_message").show();
            // $("#form_fname").after("<p>Required*</p>");
           
        }
        else if(form_mail ==""){
            $("#email_error_message").show();
            // $("#form_email").after("<p>Required*</p>");
        }
           
    });
 
    $("#next1,#ball_3").click(function(){
        let form_age=$("#form_age").val();
        let form_addr=$("#form_address").val();
        if(form_age != "" && form_addr !=""){
            // $("#form_age").after("<p></p>");
            // $("#form_address").after("<p></p>");
            $("#age_error_message").hide();
            $("#address_error_message").hide();
            $(".hidden2").show();
            $(".hidden1").hide();
            $("#ball_2").css("background-color","cadetblue");
            $("#ball_3").css("background-color","red");
        }
        else if(form_age== ""){
           $("#age_error_message").show();
        }
        else if(form_addr== ""){
            $("#address_error_message").show();
        }
       
    });

    $("#back1").click(function(){
        $(".page1").show();
        $(".hidden1").hide();
        $("#ball_1").css("background-color","red");
        $("#ball_2").css("background-color","cadetblue");
    });

    $("#back2").click(function(){
        $(".hidden2").hide();
        $(".hidden1").show();
        $("#ball_2").css("background-color","red");
        $("#ball_3").css("background-color","cadetblue");
    });

    //------------------------for Submit-------------------------------
    $("#registraion_form").submit(function(){
        error_fname = false;
        error_email = false;
        error_age = false;
        error_pwd = false;
        error_cpwd = false;

        check_fname();
        check_email();
        check_age();
        check_pwd();
        check_cpwd();

        if(error_fname === false && error_email === false && error_age === false && error_pwd === false && 
            error_cpwd === false){
                alert("Registration Succesful");
                return true;
            }
        else{
            // alert("Please Fill the form Correctly");
               return false;
        }
    });


});
