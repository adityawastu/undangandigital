AOS.init();

const params =
new URLSearchParams(window.location.search);

const guest =
params.get("to");

if(guest){
document.getElementById("guestName").innerText =
guest;
}

function openInvitation(){

document.getElementById("cover")
.style.display="none";

document.getElementById("main-content")
.classList.remove("hidden");

document.getElementById("music").play();

}

const target =
new Date("December 20, 2026 08:00:00").getTime();

setInterval(()=>{

let now = new Date().getTime();

let distance = target - now;

document.getElementById("days").innerHTML =
Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML =
Math.floor((distance%(1000*60))/1000);

},1000);