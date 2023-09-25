var timer = 61;
var randHit = 0;
var scoreCard = 0;

function randomHit(){
    randHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerText = randHit;
}

function increaseScore(){
    scoreCard += 10;
    document.querySelector("#scoreval").textContent = scoreCard;
}

function makeBubble(){
    var flag = "";

    for(var i = 0 ; i < 119 ; i++){
        let random = Math.floor(Math.random(1) * 10);
        flag += `<div class="bubbli">${random}</div>`;
    }

    document.querySelector(".bubble").innerHTML = flag;
}

function timerStart(){
    var count = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }else{
            alert("Game is over and your score is" + scoreCard);
            clearInterval(count);
        }
       
    },1000);
}

document.querySelector("#bodyContainer")
.addEventListener("click" , function(dets){
    var clickedNum = Number(dets.target.innerText);
    if(clickedNum === randHit){
        increaseScore();
        makeBubble();
        randomHit();
    }
})




timerStart();

makeBubble();

randomHit();
