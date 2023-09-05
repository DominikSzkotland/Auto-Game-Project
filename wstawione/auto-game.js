/*document.addEventListener("keydown", event =>
{
    if(event.key==="ArrowUp"){game();}
})*/
/*function start()
{
    console.log("start")
    game()
}
function game()
{*/
const terrain1 = document.getElementById("terrain1");
const terrain2 = document.getElementById("terrain2");
const menu = document.getElementById("menuDad");
let score =0;
let highScore=0;
let scoreClock=document.getElementById("scoreClock")
let highscoreClock=document.getElementById("highscoreClock")
scoreClock.innerHTML="Score: 0"
highscoreClock.innerHTML="Highscore: 0"
function start()
{
    scoreClock.innerHTML="Score: 0"
    terrain1.classList.add("slide")
    terrain2.classList.add("slide")
    menu.classList.remove("see")
    menu.classList.add("hide")
}
    
    document.addEventListener("keydown", event =>
    {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
    })
    
    function fnscore()
    {

        score = score + 1;
        if(score>=highScore)
        {
            highScore=score;
            highscoreClock.innerHTML="Highscore: "+highScore
        }
        scoreClock.innerHTML="Score: "+score
    }
    function moveLeft()
    {
        var left = parseFloat(window.getComputedStyle(auto).getPropertyValue('left'));
        var width = parseFloat(window.getComputedStyle(game).getPropertyValue('width'));
        /*console.log(left)
        console.log(width)*/
        
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
        var left = parseFloat(window.getComputedStyle(auto).getPropertyValue('left'));
        var width = parseFloat(window.getComputedStyle(game).getPropertyValue('width'));
        /*console.log(left)
        console.log(width)*/

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
    setInterval(collisionCheck)
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
            terrain1reset.style.left = "calc(20% - 28px)";
            terrain1reset.style.top = "60%";
            autoreset.style.left = "calc(50% - 30px)";
            score = 0
        }
        else if(((leftAuto>=leftTerrain2 && leftAuto<=leftTerrain2+56) || (rightAuto>=rightTerrain2 && rightAuto<=rightTerrain2+56))&&(topAuto<=topTerrain2 && topTerrain2<=(topAuto+214)))
        {
            
            terrain1.classList.remove("slide")
            terrain2.classList.remove("slide")
            menu.classList.remove("hide")
            menu.classList.add("see")
            terrain2reset.style.left = "calc(80% - 28px)";
            terrain2reset.style.top = "60%";
            autoreset.style.left = "calc(50% - 30px)";
            score = 0
        }

    }
function imageLeft()
{

}
function imageRight()
{

}