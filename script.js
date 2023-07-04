//your JS code here. If required.
let dateTime = document.querySelector("#date");


setInterval(()=>{
let val = new Date().toLocaleString();
dateTime.innerHTML = val;
},1000)