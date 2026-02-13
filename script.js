let screens=document.querySelectorAll(".screen");
let current=0;

function nextScreen(){
screens[current].classList.remove("active");
current++;
screens[current].classList.add("active");

if(current===1||current===3){
typeText();
}

if(current===2){
startSlideshow();
document.getElementById("music").play();
}
}

let texts=[
"Hey my love ❤️\nI made something special just for you…",
"From the moment you came into my life, everything became brighter, warmer, and happier.\nEvery smile of yours is my favorite moment.\nEvery laugh is my favorite sound.\nAnd every second with you is my favorite memory.",
"",
"So I have something to ask you…"
];

function typeText(){
let element=screens[current].querySelector(".type");
let text=texts[current];
let i=0;
element.innerHTML="";

let typing=setInterval(()=>{
element.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(typing);
},40);
}

typeText();

let photos=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"];
let index=0;

function startSlideshow(){
let img=document.getElementById("slideshow");

setInterval(()=>{
index=(index+1)%photos.length;
img.style.opacity=0;

setTimeout(()=>{
img.src=photos[index];
img.style.opacity=1;
},800);

},3000);
}

function yesClicked(){
document.getElementById("result").innerText=
"You just made me the happiest person alive 💖";
}

function moveNo(){
let btn=document.getElementById("noBtn");
btn.style.position="absolute";
btn.style.left=Math.random()*80+"%";
btn.style.top=Math.random()*80+"%";
}
