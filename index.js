
// love button start----
let count = 0;
document.getElementById("heart-btn-nav")
.addEventListener("click", function(e){
    e.preventDefault()
    count++;
     document.getElementById("number").innerText = count;
})

//---1  call button start------
document.getElementById("call-btn-National")
.addEventListener("click", function(e){
     e.preventDefault()
     alert("📞 Calling National Emergency 999...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---1  call button toggel start------

  document.getElementById("call-btn-National")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       callInfo.style.display = "block"
       callInfo.innerText =`জাতীয় জরুরি সেবা : ${new Date().toLocaleTimeString()}  999`;
  })
 
// 1  clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});



//---2  call button start------
document.getElementById("pulish-btn")
.addEventListener("click", function(e){
     e.preventDefault()
     alert("📞 Calling pulish Emergency 999...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---2  call button toggel start------

  document.getElementById("pulish-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`পুলিশ জরুরি সেবা : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 2  clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});




//---3  call button start------
document.getElementById("Fire-btn-Service")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Fire Service  999...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---3  call button toggel start------

  document.getElementById("Fire-btn-Service")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`ফায়ার সার্ভিস সেবা : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 3  clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});


//---4  call button start------
document.getElementById("Ambulance-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Ambulance Service  999...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---4  call button toggel start------

  document.getElementById("Ambulance-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`অ্যাম্বুলেন্স সেবা : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 4  clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});


//---5  call button start------
document.getElementById("Women-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Women & Child Helpline Service  999...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---5  call button toggel start------

  document.getElementById("Women-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`নারী ও শিশু সহায়তা : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 5  clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});


//---6  call button start------
document.getElementById("Anti-Corruption-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Anti-Corruption Service  106...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---6  call button toggel start------

  document.getElementById("Anti-Corruption-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`দুদক সহায়তা : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 6 clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});



//---7  call button start------
document.getElementById("Electricity Outage-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Electricity Outage Service  106...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---7  call button toggel start------

  document.getElementById("Electricity Outage-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`বিদ্যুৎ বিভ্রাট : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 7 clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});



//---7  call button start------
document.getElementById("Electricity Outage-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Electricity Outage Service  106...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---7  call button toggel start------

  document.getElementById("Electricity Outage-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`বিদ্যুৎ বিভ্রাট : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 7 clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});


//---8  call button start------
document.getElementById("Brac-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Brac Service  106...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---8  call button toggel start------

  document.getElementById("Brac-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`ব্র্যাক : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 8 clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});

//---9  call button start------
document.getElementById("Bangladesh-Railway-btn")
.addEventListener("click", function(e){ 
     e.preventDefault()
     alert("📞 Calling Bangladesh Railway Service  106...")  
   let coinElement = document.getElementById("coin");
   let coinAmount = parseInt(coinElement.innerText);
   if(coinAmount >= 20){
    coinAmount -= 20;
    coinElement.innerText = coinAmount
   }else{
    alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই, কল করতে হলে কমপক্ষে ২০টা কয়েন লাগবে।");
    return;
   }
//    const callHistory = document.getElementById("call-history");

})

//---9  call button toggel start------

  document.getElementById("Bangladesh-Railway-btn")
  .addEventListener("click", function(){
       const callInfo = document.getElementById("call-info")
       const newEntry = document.createElement("p");
       callInfo.innerText =`বাংলাদেশ রেলওয়ে : ${new Date().toLocaleTimeString()}  999`;
       callInfo.appendChild(newEntry);
       callInfo.style.display = "block";
       
  })
 
// 9 clear button ---------
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-info").innerHTML = "";
});
