//localStorage.clear()

const terrain1 = document.getElementById("terrain1");
const terrain2 = document.getElementById("terrain2");
const menu = document.getElementById("menuDad");
let score =0;
let highScore=localStorage.getItem("highScore");
let scoreClock=document.getElementById("scoreClock")
let highscoreClock=document.getElementById("highscoreClock")
let gameleft = document.getElementById("gameleft")
let gameright = document.getElementById("gameright")
scoreClock.innerHTML="Score: 0"
let startSoundEffect = document.getElementById("startSoundEffect")
let MusicTheme = document.getElementById("MusicTheme")
let switchSoundEffect = document.getElementById("switchSoundEffect")
if(highScore!=null)
{
    highscoreClock.innerHTML="Highscore: "+highScore;
}
else
{
    highscoreClock.innerHTML="Highscore: 0";
}
setInterval(isHiden, 100)
function start()
{
    startSoundEffect.play()
    setInterval(collisionCheck)
    terrain1.classList.add("slide")
    terrain2.classList.add("slide")
    menu.classList.remove("see")
    menu.classList.add("hide")
    scoreClock.innerHTML="Score: 0";
}
function clickRL(event)
{
   
    
        if(event.key==="ArrowLeft"){moveLeft();}
        if(event.key==="ArrowRight"){moveRight();}
        if(event.key==="a"){moveLeft();}
        if(event.key==="d"){moveRight();}
    
}
function clickW(event)
{

        if(event.key==="ArrowUp"){start()}
        if(event.key==="w"){start()}
    
}
function isHiden()
{
    if(menu.classList.contains("hide"))
    {
        document.removeEventListener("keydown", clickW)
        document.addEventListener("keydown", clickRL)
    }
    //if(menu.classList.contains("see"))
    else
    {
        document.removeEventListener("keydown", clickRL)
        document.addEventListener("keydown", clickW)           
    } 
}
    
    gameleft.addEventListener("click", moveLeft)
    gameright.addEventListener("click", moveRight)
    function fnscore()
    {

        score = score + 1;
        if(score>=highScore)
        {
            highScore=score;
            highscoreClock.innerHTML="Highscore: "+highScore
            localStorage.setItem("highScore", highScore);
        }
        scoreClock.innerHTML="Score: "+score
    }
    let dashSound = document.getElementById("DashSoundEffect")
    let dashSound2 = document.getElementById("DashSoundEffect2")

    function moveLeft()
    {
        dashSound.play()
        var left = parseFloat(window.getComputedStyle(auto).getPropertyValue('left'));
        var width = parseFloat(window.getComputedStyle(game).getPropertyValue('width'));
        
        if((width-left)<width*0.3)
        {
            left = (width*0.5)-30
        }
        else
        {
            left = (width*0.2)-30
        }
        auto.style.left = left +"px";  


    }
    function moveRight()
    {
        dashSound2.play()
        var left = parseFloat(window.getComputedStyle(auto).getPropertyValue('left'));
        var width = parseFloat(window.getComputedStyle(game).getPropertyValue('width'));

        if((width-left)>width*0.7)
        {
            left = (width*0.5)-30
        }
        else
        {
            left = (width*0.8)-30
        }
        auto.style.left = left +"px"; 
    }



    
    //const terrain1 = document.getElementById("terrain1");
    terrain1.addEventListener("animationiteration", drawPosition);

    function drawPosition()
    {

        var terrain1 = document.getElementById("terrain1");
        var position1 = Math.floor(Math.random() * 3)+1;
        switch(position1)
        {
            case 1:
                terrain1.style.left = "calc(20% - 28px)";
            break;
            case 2:
                terrain1.style.left = "calc(50% - 28px)";
            break;
            case 3:
                terrain1.style.left = "calc(80% - 28px)";
            break;
        }
        var terrain2 = document.getElementById("terrain2");   
        var position2 = Math.floor(Math.random() * 3)+1;
        switch(position2)
        {
            case 1:
                terrain2.style.left = "calc(20% - 28px)";
            break;
            case 2:
                terrain2.style.left = "calc(50% - 28px)";
            break;
            case 3:
                terrain2.style.left = "calc(80% - 28px)";
            break;
        }
        fnscore()
        /*console.log(position1 + "pos1")
        console.log(position2 + "pos2")*/

    }
    let crashSound = document.getElementById("crashSoundEffect")
    function collisionCheck()
    {
        
        var terrain1reset = document.getElementById("terrain1");
        var terrain2reset = document.getElementById("terrain2");
        var autoreset = document.getElementById("auto");

        var leftAuto = parseFloat(window.getComputedStyle(auto).getPropertyValue('left'));
        var rightAuto = parseFloat(window.getComputedStyle(auto).getPropertyValue('right'));
        var topAuto = parseFloat(window.getComputedStyle(auto).getPropertyValue('top'));
        
        var leftTerrain1 = parseFloat(window.getComputedStyle(terrain1).getPropertyValue('left'));
        var rightTerrain1 = parseFloat(window.getComputedStyle(terrain1).getPropertyValue('right'));
        var topTerrain1 = parseFloat(window.getComputedStyle(terrain1).getPropertyValue('top'));
        
        var leftTerrain2 = parseFloat(window.getComputedStyle(terrain2).getPropertyValue('left'));
        var rightTerrain2 = parseFloat(window.getComputedStyle(terrain2).getPropertyValue('right'));
        var topTerrain2 = parseFloat(window.getComputedStyle(terrain2).getPropertyValue('top'));

        if(((leftAuto>=leftTerrain1 && leftAuto<=leftTerrain1+56) || (rightAuto>=rightTerrain1 && rightAuto<=rightTerrain1+56))&&(topAuto<=topTerrain1 && topTerrain1<=(topAuto+214)))
        {
            
            terrain1.classList.remove("slide")
            terrain2.classList.remove("slide")
            menu.classList.remove("hide")
            menu.classList.add("see")
            crashSound.play()
            terrain1reset.style.left = "calc(20% - 28px)";
            terrain1reset.style.top = "-124px";
            terrain2reset.style.left = "calc(80% - 28px)";
            terrain2reset.style.top = "-124px";
            autoreset.style.left = "calc(50% - 30px)";
            score = 0
            
        }
        if(((leftAuto>=leftTerrain2 && leftAuto<=leftTerrain2+56) || (rightAuto>=rightTerrain2 && rightAuto<=rightTerrain2+56))&&(topAuto<=topTerrain2 && topTerrain2<=(topAuto+214)))
        {
            
            terrain1.classList.remove("slide")
            terrain2.classList.remove("slide")
            menu.classList.remove("hide")
            menu.classList.add("see")
            crashSound.play()
            terrain1reset.style.left = "calc(20% - 28px)";
            terrain1reset.style.top = "-124px";
            terrain2reset.style.left = "calc(80% - 28px)";
            terrain2reset.style.top = "-124px";
            autoreset.style.left = "calc(50% - 30px)";
            score = 0
            
        }

    }

let settingOptions = ["Customization","Difficulty","Music and sound"]
let settingName = document.getElementById("settingName")
let settingNumber=0
let mid = document.getElementById("mid"+settingNumber)
mid.classList.remove("hide")
mid.classList.add("see")
settingName.innerHTML = settingOptions[settingNumber]
function settingLeft()
{
    switchSoundEffect.play()
    mid.classList.remove("see")
    mid.classList.add("hide")
    settingNumber = settingNumber - 1
    
    if(settingNumber<0)
    {
        settingNumber=settingOptions.length-1
        console.log(settingOptions.length+" length")
    }
    settingName.innerHTML = settingOptions[settingNumber]
    /*if(settingOptions[settingNumber]=="Difficulty")
    {
        zaznacz()
    }*/
    mid = document.getElementById("mid"+settingNumber)
    mid.classList.remove("hide")
    mid.classList.add("see")
    console.log(mid)
}
function settingRight()
{
    
    switchSoundEffect.play()
    mid.classList.remove("see")
    mid.classList.add("hide")
    settingNumber = settingNumber + 1
    if(settingNumber == "01")
    {
        settingNumber=1
    }
    if(settingNumber>settingOptions.length-1)
    {
        settingNumber=0
    }
    settingName.innerHTML = settingOptions[settingNumber]
    /*if(settingOptions[settingNumber]=="Difficulty")
    {
        zaznacz()
    }*/
    mid = document.getElementById("mid"+settingNumber)
    console.log(settingNumber)
    mid.classList.remove("hide")
    mid.classList.add("see")
}


let autoSkins = ["default_red","default_green","default_blue","default_yellow"]
let autoHtml = document.getElementById("auto")
let autoPhoto = document.getElementById("autoPhoto")
let iSkins = localStorage.getItem("iSkins")

if(iSkins!=null || iSkins != undefined)
{

    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[iSkins]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[iSkins]+'.png'
}
else if(iSkins == undefined)
{
    iSkins= localStorage.setItem("iSkins", 0)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[0]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[0]+'.png'
}
else
{
    iSkins= localStorage.setItem("iSkins", 0)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[0]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[0]+'.png'
}
console.log(iSkins+" START")
function imageLeft()
{
    switchSoundEffect.play()
    /*localStorage.removeItem("iSkins")*/
    iSkins = iSkins - 1
    console.log(iSkins+" LEFT")
    if(iSkins<0)
    {
        iSkins=autoSkins.length-1
    }
    localStorage.setItem("iSkins", iSkins)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[iSkins]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[iSkins]+'.png'
}
function imageRight()
{
    switchSoundEffect.play()
    iSkins = iSkins + 1
    
    if(iSkins == "01")
    {
        iSkins=1
    }
    console.log(iSkins+" Right")
    if(iSkins>autoSkins.length-1)
    {
        iSkins=0
    }

    localStorage.setItem("iSkins", iSkins)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[iSkins]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[iSkins]+'.png'
}
function checkDiff()
{

}
function checkVolu()
{
    
}
function reset()
{
    let resetI = localStorage.getItem("resetI")
    
    if(resetI == null)
    {
        localStorage.clear()
        iSkins = 0
    }
    else
    {
        localStorage.setItem("resetI", 2)
    }
}
function startWindow()
{
    let startWindow=document.getElementById("startWindow")
    startWindow.classList.add("ghost")
    
    setTimeout(function()
    {
        startWindow.classList.add("hide")
    },1010)
    
    MusicTheme.play()
    
}