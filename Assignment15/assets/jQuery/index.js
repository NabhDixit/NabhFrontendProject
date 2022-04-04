$(document).ready(function(){
   
    $.ajax({

        url:"https://api.spacexdata.com/v3/capsules?limit=4&offset=0",
        type:"GET",
        success:function(response){
            console.log("response",response);

            let str = "";
            response.map(item =>{
            
            str +=`<div class="card">
                   <h2 style="text-align:center;color:orange">${item.capsule_serial}</h2>
                    <p class="capsul_id">${item.capsule_id}</p>
                    <p class="statu">${item.status}</p>
                    <p class="original_launc">${item.original_launch}</p>
                     <button style="padding:5px;border-radius:1em;border:none;background-color:orange;color:#fff;margin-left:2.6em"
                      id="landing_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Landings Details</button>
                    </div>`;
             });

        $("#flex_cotainer").html(str) 
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
            $("#landing-details").show();
        }

      
 })
});