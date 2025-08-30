
// love button start----
let count = 0;
document.getElementById("heart-btn-nav")
.addEventListener("click", function(e){
    e.preventDefault()
    count++;
     document.getElementById("number").innerText = count;
})

//--- call button start------
document.getElementById("call-btn-National")
.addEventListener("click", function(e){
     e.preventDefault()
     alert("জাতীয় জরুরি সেবা")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আর কমানো যাবে না! কয়েন শেষ।");
   }
})
