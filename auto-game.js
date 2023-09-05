//localStorage.clear()

const terrain1 = document.getElementById("terrain1");
const terrain2 = document.getElementById("terrain2");
const menu = document.getElementById("menu");

let score =0;
let highScoreEasy=localStorage.getItem("highScoreEasy");
let highScoreNormal=localStorage.getItem("highScoreNormal");
let highScoreHard=localStorage.getItem("highScoreHard");
let strip1 = document.getElementById("streetStrip1");
let strip2 = document.getElementById("streetStrip2");
let strip3 = document.getElementById("streetStrip3");
let scoreClock=document.getElementById("scoreClock")
let highscoreClock=document.getElementById("highscoreClock")
let gameleft = document.getElementById("gameleft")
let gameright = document.getElementById("gameright")
scoreClock.innerHTML="Score: 0"
let startSoundEffect = document.getElementById("startSoundEffect")
let MusicTheme = document.getElementById("MusicTheme")
let SoundTheme = document.getElementsByClassName("SoundTheme")
let switchSoundEffect = document.getElementById("switchSoundEffect")
let arrLeft = document.getElementById("left")
let arrRight = document.getElementById("right")
let startWindow=document.getElementById("startWindow")
let startWindowLock = true;

let MusicVolumePack = localStorage.getItem("MusicVolumePack")
if(MusicVolumePack == null )
{
    localStorage.setItem("MusicVolumePack", 50)
}
else
{

    MusicTheme.volume = MusicVolumePack / 100
}
MusicVolume.value = MusicVolumePack

let SoundVolumePack = localStorage.getItem("SoundVolumePack")
if(SoundVolumePack == null)
{
    localStorage.setItem("SoundVolumePack", 50)
}
else
{

    for(let n=0; n < SoundTheme.length; n++)
    {
        SoundTheme[n].volume = SoundVolumePack / 100
    }
}
SoundVolume.value = SoundVolumePack


if(highScoreEasy!=null)
{
    if(Difficulty() == "slideEasy")
    {
        highscoreClock.innerHTML="Highscore: " + highScoreEasy + " - Easy";
    }
}
else
{
    if(Difficulty() == "slideEasy")
    {
        highscoreClock.innerHTML="Highscore: 0 - Easy";
    }
    localStorage.setItem("highScoreEasy",0)
}


if(highScoreNormal!=null)
{
    if(Difficulty() == "slideNormal")
    {
        highscoreClock.innerHTML="Highscore: " + highScoreNormal + " - Normal";
    }
}
else
{
    if(Difficulty() == "slideNormal")
    {
        highscoreClock.innerHTML="Highscore: 0 - Normal";
    }
    localStorage.setItem("highScoreNormal",0)
}


if(highScoreHard!=null)
{
    if(Difficulty() == "slideHard")
    {
        highscoreClock.innerHTML="Highscore: " + highScoreHard + " - Hard";
    }
}
else
{
    if(Difficulty() == "slideHard")
    {
        highscoreClock.innerHTML="Highscore: 0 - Hard";
    }
    localStorage.setItem("highScoreHard",0)
}

setInterval(isHiden, 100)
function start()
{

    var terrain1reset = document.getElementById("terrain1");
    var terrain2reset = document.getElementById("terrain2");
    var autoreset = document.getElementById("auto");

    startSoundEffect.play()
    terrain1reset.style.left = "calc(20% - 40px)";
    terrain1reset.style.top = "-124px";
    terrain2reset.style.left = "calc(80% - 40px)";
    terrain2reset.style.top = "-124px";
    autoreset.style.left = "calc(50% - 30px)";

    if(Difficulty() == "slideEasy")
    {
        strip1.classList.remove("stripSlideNormal")
        strip1.classList.remove("stripSlideHard")

        strip2.classList.remove("stripSlideNormal")
        strip2.classList.remove("stripSlideHard")

        strip3.classList.remove("stripSlideNormal")
        strip3.classList.remove("stripSlideHard")

        strip1.classList.add("stripSlideEasy")
        strip2.classList.add("stripSlideEasy")
        strip3.classList.add("stripSlideEasy")
    }
    else if(Difficulty() == "slideNormal")
    {
        strip1.classList.remove("stripSlideEasy")
        strip1.classList.remove("stripSlideHard")

        strip2.classList.remove("stripSlideEasy")
        strip2.classList.remove("stripSlideHard")

        strip3.classList.remove("stripSlideEasy")
        strip3.classList.remove("stripSlideHard")

        strip1.classList.add("stripSlideNormal")
        strip2.classList.add("stripSlideNormal")
        strip3.classList.add("stripSlideNormal")
    }
    else if(Difficulty() == "slideHard")
    {
        strip1.classList.remove("stripSlideEasy")
        strip1.classList.remove("stripSlideNormal")

        strip2.classList.remove("stripSlideEasy")
        strip2.classList.remove("stripSlideNormal")

        strip3.classList.remove("stripSlideEasy")
        strip3.classList.remove("stripSlideNormal")

        strip1.classList.add("stripSlideHard")
        strip2.classList.add("stripSlideHard")
        strip3.classList.add("stripSlideHard")
    }
    setInterval(collisionCheck)
    terrain1.classList.add(Difficulty())
    terrain2.classList.add(Difficulty())
    menu.classList.remove("see")
    menu.classList.add("hide")
    scoreClock.innerHTML="Score: 0";
    
}
function clickRL(event)
{
   
    if(startWindow.classList.contains("hide"))
    {
        if(event.key==="ArrowLeft"){moveLeft();}
        if(event.key==="ArrowRight"){moveRight();}
        if(event.key==="a"){moveLeft();}
        if(event.key==="d"){moveRight();}
    }
}
function clickW(event)
{
    if(startWindow.classList.contains("hide")&&startWindow.classList.contains("ghost"))
    {
        if(event.key==="ArrowUp"){start()}
        if(event.key==="w"){start()}
    }
    else if(startWindowLock == true)
    {
        if(event.key==="ArrowUp"){startWindowBye()}
        if(event.key==="w"){startWindowBye()}
    }
}
function isHiden()
{
    if(menu.classList.contains("hide"))
    {
        document.removeEventListener("keydown", clickW)
        document.addEventListener("keydown", clickRL)
    }
    else
    {
        document.removeEventListener("keydown", clickRL)
        document.addEventListener("keydown", clickW)           
    } 
}
    
    gameleft.addEventListener("touchstart", moveLeft)
    gameright.addEventListener("touchstart", moveRight)

    function functionScoreEasy()
    {
        score = score + 1;
        if(score>=highScoreEasy)
        {
            highScoreEasy=score;
            localStorage.setItem("highScoreEasy", highScoreEasy);
        }
        highscoreClock.innerHTML="Highscore: "+highScoreEasy+" - Easy"
        scoreClock.innerHTML="Score: "+score
    }

    function functionScoreNormal()
    {
        score = score + 1;
        if(score>=highScoreNormal)
        {
            highScoreNormal=score;
            localStorage.setItem("highScoreNormal", highScoreNormal);
        }
        highscoreClock.innerHTML="Highscore: "+highScoreNormal+" - Normal"
        scoreClock.innerHTML="Score: "+score
    }

    function functionScoreHard()
    {

        score = score + 1;
        if(score>=highScoreHard)
        {
            highScoreHard=score;
            localStorage.setItem("highScoreHard", highScoreHard);
        }
        highscoreClock.innerHTML="Highscore: "+highScoreHard+" - Hard"
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

    terrain1.addEventListener("animationiteration", drawPosition);

    function drawPosition()
    {
        pickTerrain()
        var terrain1 = document.getElementById("terrain1");
        var position1 = Math.floor(Math.random() * 3)+1;
        switch(position1)
        {
            case 1:
                terrain1.style.left = "calc(20% - 40px)";
            break;
            case 2:
                terrain1.style.left = "calc(50% - 40px)";
            break;
            case 3:
                terrain1.style.left = "calc(80% - 40px)";
            break;
        }
        var terrain2 = document.getElementById("terrain2");   
        var position2 = Math.floor(Math.random() * 3)+1;
        switch(position2)
        {
            case 1:
                terrain2.style.left = "calc(20% - 40px)";
            break;
            case 2:
                terrain2.style.left = "calc(50% - 40px)";
            break;
            case 3:
                terrain2.style.left = "calc(80% - 40px)";
            break;
        }
        if(position1 == position2)
        {
            terrain2.style.opacity = "0" 
        }
        else
        {
            terrain2.style.opacity = "1" 
        }
        if(Difficulty() == "slideEasy")
        {
            functionScoreEasy()
        }
        if(Difficulty() == "slideNormal")
        {
            functionScoreNormal()
        }
        if(Difficulty() == "slideHard")
        {
            functionScoreHard()
        }
        
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

        if(((leftAuto>=leftTerrain1 && leftAuto<=leftTerrain1+80) || (rightAuto>=rightTerrain1 && rightAuto<=rightTerrain1+80))&&(topAuto<=topTerrain1 && topTerrain1<=(topAuto+210)))
        {
            
            terrain1.classList.remove("slideEasy")
            terrain2.classList.remove("slideEasy")
            terrain1.classList.remove("slideNormal")
            terrain2.classList.remove("slideNormal")
            terrain1.classList.remove("slideHard")
            terrain2.classList.remove("slideHard")
            strip1.classList.remove("stripSlideEasy")
            strip1.classList.remove("stripSlideNormal")
            strip1.classList.remove("stripSlideHard")
            strip2.classList.remove("stripSlideEasy")
            strip2.classList.remove("stripSlideNormal")
            strip2.classList.remove("stripSlideHard")
            strip3.classList.remove("stripSlideEasy")
            strip3.classList.remove("stripSlideNormal")
            strip3.classList.remove("stripSlideHard")
            menu.classList.remove("hide")
            menu.classList.add("see")
            crashSound.play()
            terrain1reset.style.left = "calc(20% - 40px)";
            terrain1reset.style.top = "-124px";
            terrain2reset.style.left = "calc(80% - 40px)";
            terrain2reset.style.top = "-124px";
            terrain2.style.opacity = "1"
            autoreset.style.left = "calc(50% - 30px)";
            terrain1.style.backgroundImage = 'url(Grafika/flag_right.png)';
            terrain2.style.backgroundImage = 'url(Grafika/flag_left.png)';
            score = 0

            
        }
        if(((leftAuto>=leftTerrain2 && leftAuto<=leftTerrain2+80) || (rightAuto>=rightTerrain2 && rightAuto<=rightTerrain2+80))&&(topAuto<=topTerrain2 && topTerrain2<=(topAuto+210)))
        {
            terrain1.classList.remove("slideEasy")
            terrain2.classList.remove("slideEasy")
            terrain1.classList.remove("slideNormal")
            terrain2.classList.remove("slideNormal")
            terrain1.classList.remove("slideHard")
            terrain2.classList.remove("slideHard")
            strip1.classList.remove("stripSlideEasy")
            strip1.classList.remove("stripSlideNormal")
            strip1.classList.remove("stripSlideHard")
            strip2.classList.remove("stripSlideEasy")
            strip2.classList.remove("stripSlideNormal")
            strip2.classList.remove("stripSlideHard")
            strip3.classList.remove("stripSlideEasy")
            strip3.classList.remove("stripSlideNormal")
            strip3.classList.remove("stripSlideHard")
            menu.classList.remove("hide")
            menu.classList.add("see")
            crashSound.play()
            terrain1reset.style.left = "calc(20% - 40px)";
            terrain1reset.style.top = "-124px";
            terrain2reset.style.left = "calc(80% - 40px)";
            terrain2reset.style.top = "-124px";
            autoreset.style.left = "calc(50% - 30px)";
            terrain1.style.backgroundImage = 'url(Grafika/flag_right.png)';
            terrain2.style.backgroundImage = 'url(Grafika/flag_left.png)';
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
    }
    settingName.innerHTML = settingOptions[settingNumber]
    if(settingNumber == 2)
    {
        volumeControle()
    }
    if(settingNumber != 0)
    {
        arrLeft.classList.remove("see")
        arrRight.classList.remove("see")
        arrLeft.classList.add("hide")
        arrRight.classList.add("hide")
    }
    else
    {
        arrLeft.classList.remove("hide")
        arrRight.classList.remove("hide")
        arrLeft.classList.add("see")
        arrRight.classList.add("see")
    }
    mid = document.getElementById("mid"+settingNumber)
    mid.classList.remove("hide")
    mid.classList.add("see")
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
    if(settingNumber == 2)
    {
        volumeControle()
    }
    if(settingNumber != 0)
    {
        arrLeft.classList.remove("see")
        arrRight.classList.remove("see")
        arrLeft.classList.add("hide")
        arrRight.classList.add("hide")
    }
    else
    {
        arrLeft.classList.remove("hide")
        arrRight.classList.remove("hide")
        arrLeft.classList.add("see")
        arrRight.classList.add("see")
    }
    mid = document.getElementById("mid"+settingNumber)
    mid.classList.remove("hide")
    mid.classList.add("see")
}


let autoSkins = ["default_red","default_green","default_blue","default_yellow","sharp_orange","sharp_red","sharp_violet","sharp_green"]
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
function imageLeft()
{
    switchSoundEffect.play()
    /*localStorage.removeItem("iSkins")*/
    iSkins = iSkins - 1
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
    if(iSkins>autoSkins.length-1)
    {
        iSkins=0
    }

    localStorage.setItem("iSkins", iSkins)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[iSkins]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[iSkins]+'.png'
}

function reset()
{
    let resetI = localStorage.getItem("resetI")
    
    if(resetI == null)
    {
        localStorage.setItem("resetI", 2)
        location.reload();
        return false;
    }
    else
    {
        localStorage.setItem("resetI", 2)
        
    }
}
function startWindowBye()
{
    startWindowLock = false;
    startWindow.classList.add("ghost")
    
    setTimeout(function()
    {
        startWindow.classList.add("hide")
    },1010)
    
    MusicTheme.play()
    
}
function volumeControle()
{
    

    let MusicVolume = document.getElementById("MusicVolume");
    MusicVolume.addEventListener("input", function(e) {
    MusicTheme.volume = e.currentTarget.value / 100;
    localStorage.setItem("MusicVolumePack",e.currentTarget.value)
    })

    let SoundVolume = document.getElementById("SoundVolume");
    SoundVolume.addEventListener("input", function(e) {
        for(let n=0; n < SoundTheme.length; n++)
        {
            SoundTheme[n].volume = e.currentTarget.value / 100;
            
        }
        localStorage.setItem("SoundVolumePack",e.currentTarget.value)
    })
}
let Difficultylvl = localStorage.getItem("Difficultylvl")
let DiffBlock1 = document.getElementById("Easy")
let DiffBlock2 = document.getElementById("Normal")
let DiffBlock3 = document.getElementById("Hard")
if(Difficultylvl == null)
{
    localStorage.setItem("Difficultylvl", "slideNormal")
}
else
{
    if(Difficultylvl == "slideEasy")
    {
        DiffBlock1.classList.add("checkIt")
    }
    if(Difficultylvl == "slideNormal")
    {
        DiffBlock2.classList.add("checkIt")
    }
    if(Difficultylvl == "slideHard")
    {
        DiffBlock3.classList.add("checkIt")
    }
}


function checkIt1()
{
    if(DiffBlock1.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1.classList.remove("checkIt")
        DiffBlock2.classList.remove("checkIt")
        DiffBlock3.classList.remove("checkIt")
        DiffBlock1.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideEasy")
        highscoreClock.innerHTML="Highscore: "+highScoreEasy+" - Easy"
    }
}  
function checkIt2()
{  
    if(DiffBlock2.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1.classList.remove("checkIt")
        DiffBlock2.classList.remove("checkIt")
        DiffBlock3.classList.remove("checkIt")
        DiffBlock2.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideNormal")
        highscoreClock.innerHTML="Highscore: "+highScoreNormal+" - Normal"
    }
}
function checkIt3()
{
    if(DiffBlock3.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1.classList.remove("checkIt")
        DiffBlock2.classList.remove("checkIt")
        DiffBlock3.classList.remove("checkIt")
        DiffBlock3.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideHard")
        highscoreClock.innerHTML="Highscore: "+highScoreHard+" - Hard"
    }
    
}
function Difficulty()
{
    return localStorage.getItem("Difficultylvl")
}
function pickTerrain()
{
    let TerrainTable = ["terrain_default1","thrashes_1","thrashes_2","tree_1","tree_2","tree_3","terrain_default2"]
    var picked1 = Math.floor(Math.random() * TerrainTable.length)+1;
    var picked2 = Math.floor(Math.random() * TerrainTable.length)+1;
    if(picked1 == picked2)
    {
        pickTerrain()
    }
    else
    {
        switch(picked1)
        {
            case 1:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[0]+'.png)';
            break;

            case 2:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[1]+'.png)';
            break;

            case 3:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[2]+'.png)';
            break;

            case 4:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[3]+'.png)';
            break;

            case 5:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[4]+'.png)';
            break;

            case 6:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[5]+'.png)';
            break;

            case 7:
                terrain1.style.backgroundImage = 'url(Grafika/'+TerrainTable[6]+'.png)';
            break;
        }
        switch(picked2)
        {
            case 1:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[0]+'.png)';
            break;

            case 2:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[1]+'.png)';
            break;

            case 3:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[2]+'.png)';
            break;

            case 4:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[3]+'.png)';
            break;

            case 5:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[4]+'.png)';
            break;

            case 6:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[5]+'.png)';
            break;

            case 7:
                terrain2.style.backgroundImage = 'url(Grafika/'+TerrainTable[6]+'.png)';
            break;
        }
    }
}