function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("name").innerText = name;
 }
 
 function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = date.getDay();
   var days= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"] 
   session=days[session-1]
   h = h > 10 ?  h : "0" + h ;
   m = m > 10 ?  m : "0" + m ;
   s = s > 10 ?  s : "0" + s;
 
   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }
 
 askName();
 showTime();