const digitalClock=()=>{
let a=new Date();
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
 h= h<10?"0"+h:h;
 m= m<10?"0"+m:m;
 s= s<10?"0"+s:s;
let clock = document.getElementById("clock");
clock.innerText= h + ":" + m + ":" + s ;
let date=document.getElementById("date");
date.innerText="Date: " + a.toDateString();
}

setInterval(digitalClock,1000);
