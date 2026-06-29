import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



/* LOADING */

const loadingText = document.getElementById("loadingText");
const loading = document.getElementById("loading");

const text = "A little surprise for you... ❤️";

let i = 0;


function typeWriter(){

    if(i < text.length){

        loadingText.innerHTML += text[i];

        i++;

        setTimeout(typeWriter,70);

    }

    else {

        setTimeout(()=>{

            loading.style.opacity="0";

            setTimeout(()=>{

                loading.style.display="none";

                showEnvelope();

            },1000);


        },1000);

    }

}


typeWriter();






/* ENVELOPE */


const envelope =
document.getElementById("envelope");


const envelopeScreen =
document.getElementById("envelopeScreen");


const mainContent =
document.getElementById("mainContent");



function showEnvelope(){

    envelopeScreen.style.display="flex";

}



envelope.addEventListener("click",()=>{


    envelope.classList.add("open");


    setTimeout(()=>{


        envelopeScreen.style.opacity="0";


        setTimeout(()=>{


            envelopeScreen.style.display="none";


            mainContent.style.opacity="1";

            mainContent.style.pointerEvents="auto";


        },700);



    },1500);



});







/* NO BUTTON 😂 */


const yesBtn =
document.getElementById("yesBtn");


const noBtn =
document.getElementById("noBtn");


const message =
document.getElementById("message");



function moveNoButton() {
    const noBtn = document.getElementById("noBtn");

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}




noBtn.addEventListener(
"mouseover",
moveNoButton
);


noBtn.addEventListener(
"touchstart",
moveNoButton
);







/* HEARTS */


function createHeart(){


const heart =
document.createElement("div");


heart.className="floating-heart";


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
(3 + Math.random()*3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}




/* YES ❤️ */


yesBtn.addEventListener(
"click",
async()=>{

   const music = document.getElementById("music");

music.currentTime = 95; // 60 seconds = 1:00
music.play().catch(err => console.log(err));

message.innerHTML =
"finally, damzani dalley yes";
confetti({

particleCount:150,

spread:100,

origin:{
y:0.6
}

});



yesBtn.style.display="none";

noBtn.style.display="none";



document.getElementById("dateDetails").style.display="block";



setInterval(createHeart,300);





try{


await addDoc(
collection(db,"dates"),
{

answer:"YES ❤️",

time:serverTimestamp()

}

);


console.log("Saved ☁️❤️");


}

catch(error){

console.log(error);

}



});




const saveDate =
document.getElementById("saveDate");


saveDate.addEventListener(
"click",
async()=>{


const date =
document.getElementById("datePicker").value;


const time =
document.getElementById("timePicker").value;


const place =
document.getElementById("placePicker").value;



if(!date || !time || !place){

alert("Choose everything first ❤️");

return;

}



await addDoc(
collection(db,"dates"),
{

answer:"YES",

date:date,

time:time,

place:place,

savedAt:serverTimestamp()

}

);



document.getElementById("savedMessage").innerHTML =
"Perfecto, I saved our date";
startCountdown(date,time);

document.getElementById("countdown").style.display="block";


});
function startCountdown(date,time){


const target =
new Date(date + " " + time);



setInterval(()=>{


const now = new Date();


const difference =
target - now;



if(difference <= 0){

document.getElementById("timer").innerHTML =
"It's time";

return;

}



const days =
Math.floor(difference / (1000*60*60*24));


const hours =
Math.floor((difference / (1000*60*60)) % 24);


const minutes =
Math.floor((difference / (1000*60)) % 60);



document.getElementById("timer").innerHTML =
`${days} days ${hours} hours ${minutes} minutes ❤️`;



},1000);



}
