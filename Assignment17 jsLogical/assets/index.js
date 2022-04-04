$(document).ready(function(){
    //------------------------------difference----------------------------
   $("#difference").click(function(){
       showDifference();
   });
   function showDifference(){
       var input=[];
       input = $("#v1").val();
       var newarr=input.split(",");
       var inputLength=newarr.length;
       for(var j=0;j<inputLength-1;){
           for(var k=1;k<inputLength;k++){
               var c=newarr[k]-newarr[j];
               j++;
               $("#res1").append(","+c);
           }
       }
   }
// ----------------------------------Removing Char------------------------

    $("#remove").click(function(){
        removeChar();
    });
    function  removeChar(){
        var str=$("#v2").val();
        var remChar=$("#v3").val();
        var len=str.length;
          for(var i=0;i<len;i++){
           
           if(str[i]!=remChar){
               $("#res2").append(str[i]);
           }
       }
    }   

// ---------------------------Removing Duplicate char---------------------------

  $("#btn3").click(function(){
     removeDouble();
  });

    function removeDouble(){
           var x=[];
           x=$("#v4").val();
          console.log(x);
          var afterRemove=[...new Set(x)];
          console.log(afterRemove);
         $("#res3").append(afterRemove);
     }

//--------------------showHigest-----------------------------------
  $("#btn4").click(function(){
    bigNum();
  });
function bigNum(){
    var inpu=[];
     inpu = $("#v5").val();
    var newar=inpu.split(",");
    
     console.log(inpu);
     console.log(newar);
     console.log(Array.isArray(newar));
     newar.sort(function(a,b){
       return b-a;
     });
     console.log("higest: ", newar[0]);
     $("#res4").append(newar[0]);
     $("#res5").append(newar[newar.length-1]);
}

//------------------------------------find Average------------------
   $("#btn5").click(function(){
       average();
   });
   function average(){
       var avg=0;
       var avgInput=[];
       avgInput=$("#v6").val();
        var avgArr=avgInput.split(",");
        console.log(avgArr);
        console.log(Array.isArray(avgArr));
        var arrOfnum=avgArr.map(str =>{         // This convert String Array to Num Arry
            return Number(str);
        });
        console.log(arrOfnum);
        console.log(Array.isArray(arrOfnum));
        var lenArrOfNum=arrOfnum.length;
        for(var i=0;i<lenArrOfNum;i++){
            avg +=arrOfnum[i];
        }
        var avgAns=avg/lenArrOfNum;
        $("#res6").append("average:"+avgAns);
     }
//------------------check String Palindrome-----------------------------------
   $("#btn6").click(function(){
       var revStr;
       var str1=[];
       str1=$("#v8").val();
       console.log(str1);
       revStr=str1.split("").reverse().join("");
       console.log(revStr);
       if(str1!=revStr){
           $("#res7").append("Not Palindrome");
       }
       else{
           $("#res7").append("yes Palindrome");
       }
   });

//    ----------------------Factorial-----------------------------------------

    $("#btn7").click(function(){
        findFactorial();
    });
        function findFactorial(){
            var fact=1;
            var num=$("#v9").val();
            for(let x=1;x<=num;x++){
                fact=fact*x;
            }
            console.log(fact);
            $("#res8").append("factorial of "+num+"="+fact);
        }

  //====================Strong Number=====================================
  $("#btn8").click(function(){
      checkStrong();
  }); 
  function checkStrong(){
      var sum=0,fact=1;
      var num=($("#v10").val());
      var numlen=num.length;
      for(let x=0;x<numlen;x++){
          var digit=num%10;
          for(let y=1;y<=digit;y++){
              fact=fact*y;
              sum =sum+fact;
             
          }
          num=num/10;
          console.log(num);
      }
      
      console.log(sum)    
    
  }
});