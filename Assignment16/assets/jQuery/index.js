$(document).ready(function(){
   $(".closebtn").click(function(){
       closeNav();
   });
   $("#main").click(function(){
       openNav();
   });

$(".capsule-menu").hide();
$("#capsule").click(function(){
    $(".capsule-menu").slideToggle(200);
});

$(".rockets-menu").hide();
$("#rockets").click(function(){
    $(".rockets-menu").slideToggle(200);
});

   function openNav(){
       $("#mySidenav").css("width","250px");
       $("#main").css("margin-left","250px");
    //    $("#flex_container").css("margin-left","250px");

   }
   function closeNav(){
       $("#mySidenav").css("width","0");
       $("#main").css("margin-left","100px");
    //    $("#flex_container").css("margin-left","116px");
      
   }
   $("#flex_container").hide();
   $("#all").click(function(){
    $("#flex_container").show();
    $("#flex_containerUpcoming").hide();
    $("#flex_containerPast").hide();
    $("#rocket-data").hide();
   });

   $("#flex_containerUpcoming").hide();
   $("#upcoming").click(function(){
    $("#flex_container").hide();
    $("#flex_containerPast").hide();
    $("#flex_containerUpcoming").show();
    $("#rocket-data").hide();
   });

   $("#flex_containerPast").hide();
   $("#past").click(function(){
       $("#flex_containerPast").show();
       $("#flex_containerUpcoming").hide();
       $("#flex_container").hide();
       $("#rocket-data").hide();
   });

   $("#rocket-data").hide();
   $("#allRocket").click(function(){
       $("#rocket-data").show();
       $("#flex_container").hide();
       $("#flex_containerUpcoming").hide();
       $("#flex_containerPast").hide();
   });

    $.ajax({

        url:"https://api.spacexdata.com/v3/capsules?limit=4&offset=0",
        type:"GET",
        success:function(response){
            console.log("response",response);

            let str = "";
            response.map(item =>{
            
            str +=`<div class="card col-sm-2">
                   <h2 style="text-align:center;color:orange">${item.capsule_serial}</h2>
                    <p class="capsul_id">${item.capsule_id}</p>
                    <p class="statu">${item.status}</p>
                    <p class="original_launc">${item.original_launch}</p>
                     <button data-toggle="modal" data-target="#myModal" style="padding:5px;border-radius:1em;border:none;background-color:#30336b;color:#eb4d4b;"
                      id="landing_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Landings Details</button>
                    </div>`;
             });

        $("#flex_container").html(str) 
      }
    });
// -----------------Upcomig-----------------------
    $.ajax({

        url:"https://api.spacexdata.com/v3/capsules/upcoming",
        type:"GET",
        success:function(response){
            console.log("response",response);

            let str = "";
            response.map(item =>{
            
            str +=`<div class="card col-sm-2">
                   <h2 style="text-align:center;color:orange">${item.capsule_serial}</h2>
                    <p class="capsul_id">${item.capsule_id}</p>
                    <p class="statu">${item.status}</p>
                    <p class="original_launc">${item.original_launch}</p>
                     <button data-toggle="modal" data-target="#myModal" style="padding:5px;border-radius:1em;border:none;background-color:#30336b;color:#eb4d4b;"
                      id="landing_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Landings Details</button>
                    </div>`;
             });

        $("#flex_containerUpcoming").html(str) 
      }
    });

    //---------------------------PAst--------------------------------
    $.ajax({

        url:"https://api.spacexdata.com/v3/capsules/past",
        type:"GET",
        success:function(response){
            console.log("response",response);

            let str = "";
            response.map(item =>{
            
            str +=`<div class="card col-sm-4">
                   <h2 style="text-align:center;color:orange">${item.capsule_serial}</h2>
                    <p class="capsul_id">${item.capsule_id}</p>
                    <p class="statu">${item.status}</p>
                    <p class="original_launc">${item.original_launch}</p>
                     <button data-toggle="modal" data-target="#myModal" style="padding:5px;border-radius:1em;border:none;background-color:#30336b;color:#eb4d4b;"
                      id="landing_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Landings Details</button>
                    </div>`;
             });

        $("#flex_containerPast").html(str) 
      }
    });
//------------------------------------Rocket------------------------------------------------

$.ajax({
    url:"https://api.spacexdata.com/v3/rockets?limit=20&offset=0",
    type:"get",
    success:function(response){
        console.log("response",response);

    let str ="";
     response.map(item=>{

              str+=`<div class="card col-sm-4">
                        <h2 style="text-align:center;color:orange">${item.rocket_name}</h2>
                       <img class="image-path" src="${item.flickr_images[0]}">
                        <button data-toggle="modal" data-target="#myModal" style="padding:5px;border-radius:1em;border:none;background-color:#30336b;color:#eb4d4b;"
                        id="rocket_details_${item.rocket_id}" data-id="${item.rocket_id}">Details</button>
                       </div>`;

                   


     });

     $("#rocket-data").html(str); 
        
    }
 });

});
$(document).on("click","button[id^=landing_details]",function(){
     let display=$(this).attr("data-id")

     $.ajax({

        url:"https://api.spacexdata.com/v3/capsules/"+display,
        type:"get",
        success:function(response){

            console.log("response2",response);

            $(".title").text(response.capsule_serial).css("background-color","red");
            $(".capsul_id").text(response.capsule_id);
            $(".statu").text(response.status);
            $(".original_launc").text(response.original_launch);
            $(".landing").text(response.landings);
            $(".details").text(response.details);
            // $("#landing-details").toggle();
        }

      
 })
});
$(document).on("click","button[id^=rocket_details_]",function(){


    let id=$(this).attr("data-id");

    $.ajax({

           url:"https://api.spacexdata.com/v3/rockets/"+id,
           type:"get",
           success:function(response){

               console.log("response2",response);

               $(".title").text(response.rocket_name)
               $(".detail-img").attr("src",response.flickr_images[1]);
               $(".cost_per_launch").text(response.cost_per_launch);
               $(".country").text(response.country);
            //    $("#rocket-details").show();
           }
        })
    });
         
   
    



