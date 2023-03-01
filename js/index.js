let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = "600";
canvas.height = "600";
let context = canvas.getContext("2d");

let torielleZone = false;
let sansZone = false;
let andyneZone = false;
let papyrusZone = false;
let charaZone = false;

let firstStepIntoSansZone = true;

let first = true;
let second = true;





function keyboardHandler(event) {

    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }
    if(hero.x > 10 || hero.x < 590 || hero.y > 10 || hero.y < 570){
        switch(event.code) {
            case "ArrowDown":
                hero.move(hero.x, hero.y + 20);
                break;
            case "ArrowUp":
                hero.move(hero.x, hero.y - 20);
                break;
            case "ArrowLeft":
                hero.move(hero.x - 20, hero.y);
                break;
            case "ArrowRight":
                hero.move(hero.x + 20, hero.y);
                break;
            case "Space":
                makeBullet();
                break;
        }
    }
    
    
    if (event.code !== "Tab") {
        // Consume the event so it doesn't get handled twice,
        // as long as the user isn't trying to move focus away
        event.preventDefault();
    }
};

// кнопка старта
const startButton = document.getElementById('start');

startButton.addEventListener('click', function() {
    alert('Welcome');
    hero.move();
    torielleZone = true;
    window.addEventListener("keydown", keyboardHandler, true);


});

let firstTorielleDialogueInterval = setInterval(function(){
    if(torielleZone){
        torielle.move()
        if((hero.x  > torielle.x - 40 && hero.x < torielle.x + 25) &&  (hero.y > torielle.y && hero.y - 10 < torielle.y + 45)){
            if(first){
                let ans = TorielleFirstDialogue();
                if(ans == 'no'){
                    first = false;
                }
            }else if(second){
                TorielleSecondDialogue();
                second = false;
            }
        }
    
        if(!second && torielleZone){
            context.beginPath();
            context.moveTo(600, 250);
            context.lineTo(250, 250);
            context.lineTo(250, 350);
            context.lineTo(600, 350);
            context.stroke();
            context.closePath();
            if(hero.x < 250 || hero.y < 250 || hero.y > 350 - 40){
                hero.move(290, 290);
            }
        }
        if(hero.x > 570 && !second){
            torielleZone = false;
            context.clearRect(0, 0, 600, 600);
            sansZone = true;
        }
    }
}, 100);

let firstSansDialogueInterval = setInterval(function(){
    if(sansZone){
        if(firstStepIntoSansZone){
            hero.move(10, hero.y);
            firstStepIntoSansZone = false;
        }
        
    }
}, 100);




let torielleCollision = setInterval(function(){
    if(torielleZone){
        if((hero.x  > torielle.x - 15 && hero.x < torielle.x + 35) &&  (hero.y > torielle.y - 30 && hero.y - 10 < torielle.y + 45)){
            hero.move(290, 290);
            torielle.move();
            }
    }
}, 10)
