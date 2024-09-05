let gameseq = [];
let userseq = [];

let btns=["yellow","red","blue","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
        if (started == false) {
            console.log("game is started");
            started = true;

            LevelUp();
        }
    });

    function gameflash(btn)
    {
        btn.classList.add("flash");
        setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
    }

    function userflash(btn)
    {
        btn.classList.add("userflash");
        setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
    }

function LevelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;


    // random btn choose 
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx)
    // console.log(randbtn);
    // console.log(randColor);

    gameseq.push(randColor);
    console.log(gameseq);

    gameflash(randbtn);
}

function check(idx)
{
    console.log("current Level:", level);

    if(userseq[idx] === gameseq[idx])
        {
            if(userseq.length== gameseq.length)
                {
                    setTimeout(LevelUp,1000)
                }
        }
        else
        {
            h2.innerHTML = `Game Over! Your Score was <b>${level}</b>
            <br> Press any key to start`; 
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },150)
            reset();
        }
}

function btnpress()
{
   
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    check(userseq.length-1);

};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
    {
        btn.addEventListener("click",btnpress);
    }


    function reset()
    {
        started = false;
        gameseq=[];
        userseq=[];
        level=0;
    }