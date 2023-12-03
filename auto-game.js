/**
 * The function checks if the device supports touch events.
 * @returns a boolean value. It returns true if the device supports touch events, and false if it does
 * not.
 */
function isTouchDevice() 
{
    return !!('ontouchstart' in window || navigator.maxTouchPoints);
};
const isDeviceMobile = isTouchDevice()
const terrain1 = document.getElementById("terrain1");
const terrain2 = document.getElementById("terrain2");
const menu = document.getElementById("menu");
let score = 0;
let highScoreEasy = localStorage.getItem("highScoreEasy");
let highScoreNormal = localStorage.getItem("highScoreNormal");
let highScoreHard = localStorage.getItem("highScoreHard");
let MobileControleType = MobileControleTypeReturn()
let strip1 = document.getElementById("streetStrip1");
let strip2 = document.getElementById("streetStrip2");
let strip3 = document.getElementById("streetStrip3");
let scoreClock=document.getElementById("scoreClock")
let highscoreClock=document.getElementById("highscoreClock")
const game = document.getElementById("game");
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
/**
 * The start function initializes the game by resetting the terrain and auto positions, adjusting the
 * difficulty of the game, adding collision detection, and hiding the menu.
 */
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
    updateControls()
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
/**
 * The function `clickRL` checks if the startWindow element is hidden and then moves left or right
 * based on the key pressed.
 * @param event - The event parameter is an object that represents the event that triggered the
 * function. In this case, it is likely a keyboard event, such as a key press.
 */
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
/**
 * The function `clickW` checks if the start window is hidden and locked, and if so, it starts the game
 * when the "ArrowUp" key or "w" key is pressed.
 * @param event - The event parameter represents the event object that is passed to the clickW function
 * when it is called. This object contains information about the event that triggered the function,
 * such as the key that was pressed.
 */
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
/**
 * The function checks if a menu element has the "hide" class and adds or removes event listeners
 * accordingly.
 */
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
  
    var initialX = null;
  
    /**
     * The startTouch function captures the initial X coordinate of a touch event.
     * @param e - The parameter "e" is an event object that contains information about the touch event
     * that occurred.
     */
    function startTouch(e)
    {
        initialX = e.touches[0].clientX;
    };
  
    /**
     * The function `moveTouch` is used to detect the direction of a touch movement and call the
     * appropriate functions `moveRight` or `moveLeft` based on the direction.
     * @param e - The parameter "e" is an event object that represents the touch event. It contains
     * information about the touch, such as the touch position and other details.
     * @returns If the initialX variable is null, the function will return without performing any
     * further actions.
     */
    function moveTouch(e) 
    {
        if (initialX === null) 
        {
            return;
        }

        var currentX = e.touches[0].clientX;
        var diffX = initialX - currentX;

            if(diffX < 0)
            {
                if(MobileControleTypeReturn() == "swipe")
                {
                    moveRight()
                }
            }
            else if(diffX > 0)
            {
                if(MobileControleTypeReturn() == "swipe")
                {
                    moveLeft()
                }
            }
        
        initialX = null;
        e.preventDefault();
    };
    /**
     * The function updates the score and high score in a game and displays them on a web page.
     */
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

    /**
     * The function updates the score and high score in a game and displays them on a web page.
     */
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

    /**
     * The function updates the score and high score in a game and displays them on a webpage.
     */
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

    /**
     * The function "moveLeft" moves an element with the id "auto" to the left by a certain amount
     * based on the width of the element with the id "game".
     */
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
    /**
     * The function moveRight moves an element to the right within a game based on its current position
     * and the width of the game.
     */
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

    /**
     * The function "drawPosition" randomly positions two elements on the screen and adjusts their
     * opacity based on the selected difficulty level.
     */
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
    /**
     * The function `collisionCheck()` checks for collisions between the auto and the terrain elements
     * in a game and performs certain actions if a collision occurs.
     */
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

let settingOptions = ["Customization","Difficulty","Music and sound","Controls"]
let isSettingOnlyMobile = [false,false,false,true]
let settingName = document.getElementById("settingName")
let settingNumber=0
let mid = document.getElementById("mid"+settingNumber)
mid.classList.remove("hide")
mid.classList.add("see")
settingName.innerHTML = settingOptions[settingNumber]
/**
 * The function "settingLeft" is used to navigate to the previous setting option and update the display
 * accordingly.
 */
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
    if(isSettingOnlyMobile[settingNumber] == true && isDeviceMobile == false)
    {
        settingNumber = settingNumber - 1
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
/**
 * The function "settingRight" is used to navigate through different settings options and update the
 * display accordingly.
 */
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
    if(isSettingOnlyMobile[settingNumber] == true && isDeviceMobile == false)
    {
        settingNumber = settingNumber + 1
        if(settingNumber>settingOptions.length-1)
        {
            settingNumber=0
        }
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
/**
 * The function "imageLeft" is used to switch the background image and source of an HTML element to the
 * previous image in an array of auto skins.
 */
function imageLeft()
{
    switchSoundEffect.play()
    iSkins = iSkins - 1
    if(iSkins<0)
    {
        iSkins=autoSkins.length-1
    }
    localStorage.setItem("iSkins", iSkins)
    autoHtml.style.backgroundImage = 'url(Grafika/'+autoSkins[iSkins]+'.png)'
    autoPhoto.src = 'Grafika/'+autoSkins[iSkins]+'.png'
}

/**
 * The function "imageLeft" is used to switch the background image and source of an HTML element to the
 * previous image in an array of auto skins.
 */
function imageRight()
{
    switchSoundEffect.play()
    iSkins = iSkins + 1
    
    if(iSkins == "01")
    {
        /*some issue with datatypes*/
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

/**
 * The function "reset" checks if a variable called "resetI" is stored in the browser's local storage,
 * and if not, it sets the variable to 2 and reloads the page.
 * @returns In the if statement, if resetI is null, the function returns false. Otherwise, if resetI is
 * not null, the function does not have a return statement, so it implicitly returns undefined.
 */
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
/**
 * The function "startWindowBye" sets the "startWindowLock" variable to false, adds the "ghost" class
 * to the "startWindow" element, hides the "startWindow" element after a delay, and plays the
 * "MusicTheme" audio.
 */
function startWindowBye()
{
    startWindowLock = false;
    startWindow.classList.add("ghost")
    updateControls()
    setTimeout(function()
    {
        startWindow.classList.add("hide")
    },1010)
    
    MusicTheme.play()
    
}
/**
 * The function "volumeControle" is used to control the volume of music and sound effects in a web
 * page, and it also saves the volume settings in the local storage.
 */
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
let DiffBlock1Difficulty = document.getElementById("Easy")
let DiffBlock2Difficulty = document.getElementById("Normal")
let DiffBlock3Difficulty = document.getElementById("Hard")
if(Difficultylvl == null)
{
    localStorage.setItem("Difficultylvl", "slideNormal")
}
else
{
    if(Difficultylvl == "slideEasy")
    {
        DiffBlock1Difficulty.classList.add("checkIt")
    }
    if(Difficultylvl == "slideNormal")
    {
        DiffBlock2Difficulty.classList.add("checkIt")
    }
    if(Difficultylvl == "slideHard")
    {
        DiffBlock3Difficulty.classList.add("checkIt")
    }
}


/**
 * The function checks if a certain class is present in an element, and if not, it adds the class to
 * the element and updates the highscore display.
 */
function checkIt1Difficulty()
{
    if(DiffBlock1Difficulty.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1Difficulty.classList.remove("checkIt")
        DiffBlock2Difficulty.classList.remove("checkIt")
        DiffBlock3Difficulty.classList.remove("checkIt")
        DiffBlock1Difficulty.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideEasy")
        highscoreClock.innerHTML="Highscore: "+highScoreEasy+" - Easy"
    }
}  
/**
 * The function checks if a certain class is present in an element, and if not, it adds the class to
 * the element and updates the highscore display.
 */
function checkIt2Difficulty()
{  
    if(DiffBlock2Difficulty.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1Difficulty.classList.remove("checkIt")
        DiffBlock2Difficulty.classList.remove("checkIt")
        DiffBlock3Difficulty.classList.remove("checkIt")
        DiffBlock2Difficulty.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideNormal")
        highscoreClock.innerHTML="Highscore: "+highScoreNormal+" - Normal"
    }
}
/**
 * The function checks if a certain class is present in an element, and if not, it adds the class to
 * the element and updates the highscore display.
 */
function checkIt3Difficulty()
{
    if(DiffBlock3Difficulty.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1Difficulty.classList.remove("checkIt")
        DiffBlock2Difficulty.classList.remove("checkIt")
        DiffBlock3Difficulty.classList.remove("checkIt")
        DiffBlock3Difficulty.classList.add("checkIt")
        localStorage.setItem("Difficultylvl","slideHard")
        highscoreClock.innerHTML="Highscore: "+highScoreHard+" - Hard"
    }
    
}
const DiffBlock1Controls = document.getElementById("Click")
const DiffBlock2Controls = document.getElementById("Swipe")
if(MobileControleType == null)
{
    checkIt1Controls()
}
/**
 * The function updates the controls based on the type of mobile control selected.
 */
function updateControls()
{
    if(MobileControleTypeReturn() == "click")
    {
        game.removeEventListener("touchstart", startTouch, false);
        game.removeEventListener("touchmove", moveTouch, false);
        gameleft.addEventListener("touchstart", moveLeft)
        gameright.addEventListener("touchstart", moveRight)
        DiffBlock1Controls.classList.add("checkIt")
    }
    else if(MobileControleTypeReturn() == "swipe")
    {
        gameleft.removeEventListener("touchstart", moveLeft)
        gameright.removeEventListener("touchstart", moveRight)
        game.addEventListener("touchstart", startTouch, false);
        game.addEventListener("touchmove", moveTouch, false);
        DiffBlock2Controls.classList.add("checkIt")
    }
}
/**
 * The function checks if a certain class is present in an element, and if not, it adds the class to
 * the element and updates the highscore display.
 */
function checkIt1Controls()
{
    if(DiffBlock1Controls.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1Controls.classList.remove("checkIt")
        DiffBlock2Controls.classList.remove("checkIt")
        DiffBlock1Controls.classList.add("checkIt")
        localStorage.setItem("MobileControleType","click")
    }
    
}
/**
 * The function checks if a certain class is present in an element, and if not, it adds the class to
 * the element and updates the highscore display.
 */
function checkIt2Controls()
{
    if(DiffBlock2Difficulty.classList.contains("checkIt"))
    {}
    else
    {
        DiffBlock1Controls.classList.remove("checkIt")
        DiffBlock2Controls.classList.remove("checkIt")
        DiffBlock2Controls.classList.add("checkIt")
        localStorage.setItem("MobileControleType","swipe")
    }
    
}
/**
 * The function Difficulty retrieves the value of the "Difficultylvl" key from the localStorage.
 * @returns The value of the "Difficultylvl" key in the localStorage.
 */
function Difficulty()
{
    return localStorage.getItem("Difficultylvl")
}
/**
 * The function returns the value of the "MobileControleType" item stored in the browser's local
 * storage.
 * @returns the value of the "MobileControleType" key from the localStorage.
 */
function MobileControleTypeReturn()
{
    return localStorage.getItem("MobileControleType")
}
/**
 * The function `pickTerrain` randomly selects two terrain images from an array and sets them as the
 * background images for two elements.
 */
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
/**
 * The function `preloadImage` creates a new image object and sets its source to the specified URL.
 * @param url - The `url` parameter is a string that represents the URL of the image that you want to
 * preload.
 * @returns an image object.
 */
function preloadImage(url){
    const img = new Image();
    img.src = url;
    return img
  }
  
  /**
   * The function `preloadImages` takes in a variable number of image URLs as arguments and returns an
   * array of preloaded image objects.
   * @returns The function `preloadImages` returns an array of preloaded images.
   */
  function preloadImages() {
    const images = []
    for (var i = 0; i < arguments.length; i++) {
      images[i] = preloadImage(arguments[i])
    }
    return images
  }
  const images = preloadImages(
    "Grafika/terrain_default1.png",
    "Grafika/terrain_default2.png",
    "Grafika/thrashes_1.png",
    "Grafika/thrashes_2.png",
    "Grafika/tree_1.png",
    "Grafika/tree_2.png",
    "Grafika/tree_3.png",
    "Grafika/default_blue.png",
    "Grafika/default_red.png",
    "Grafika/default_green.png",
    "Grafika/default_yellow.png",
    "Grafika/sharp_green.png",
    "Grafika/sharp_orange.png",
    "Grafika/sharp_red.png",
    "Grafika/sharp_violet.png",
    "Grafika/autoGameIcon.png",
    "Grafika/autoGameIcon.ico",
    "Muzyka/CrashSoundEffect.mp3",
    "Muzyka/DashSoundEffect.mp3",
    "Muzyka/MusicTheme.mp3",
    "Muzyka/StartSoundEffect.mp3",
    "Muzyka/SwitchSoundEffect.mp3"
  )