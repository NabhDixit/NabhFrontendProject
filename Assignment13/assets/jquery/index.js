// $(document).ready(function(){
//  $("#fname").focusout(function(){
//          var fn= $("#fname").val();
//          if(fn=="")
//          alert("Invalid Name");
//  });

// });

     $(document).ready(function(){
         $("#fetchBtn1").click(function(){
            console.log("You click the fetchBtn");

            $.ajax({

                url:"https://jsonplaceholder.typicode.com/todos/2",
                type:"GET",
                success:function(data,status){
                    console.log(data);
                    console.log(status);
                }
            });
                
            });
       

       $("#myForm").submit(function(e){
            e.preventDefault();
           console.log("you clicked the UpdateBtn");
           $.ajax({
                url:"https://jsonplaceholder.typicode.com/posts",
                type:"POST",
                success:function(data){
                      console.log(data);
                      $("input[name=FirstName]").val("");

                }
           });
       });
    });
   

