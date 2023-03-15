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

let firstTorielle = true;
let secondTorielle = true;

let firstSans = true;
let secondSans = false;
let thirdSans = false;

let firstDeltaCol = false;

let apples = 0;

let countOFSansFirstDialogue = 0;





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
    hero.move();
    torielleZone = true;
    window.addEventListener("keydown", keyboardHandler, true);


});

let firstTorielleDialogueInterval = setInterval(function(){
    if(torielleZone){
        torielle.move()
        if((hero.x  > torielle.x - 40 && hero.x < torielle.x + 25) &&  (hero.y > torielle.y && hero.y - 10 < torielle.y + 45)){
            if(firstTorielle){
                let ans = TorielleFirstDialogue();
                if(ans == 'no'){
                    firstTorielle = false;
                }
            }else if(secondTorielle){
                TorielleSecondDialogue();
                secondTorielle = false;
            }
        }
    
        if(!secondTorielle && torielleZone){
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
        if(hero.x > 570 && !secondTorielle){
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
        sans.move();
        if((hero.x  > sans.x - 40 && hero.x < sans.x + 35) &&  (hero.y > sans.y - 30 && hero.y - 10 < sans.y + 45)){
            if(firstSans){
                let ans = SansFirstDialogue();
                if(ans == 'ok' || ans == 'yes'){
                    firstSans = false;
                    secondSans = true;
                }else{
                    countOFSansFirstDialogue++;
                }
                if(countOFSansFirstDialogue > 2){
                    //game over;
                }
                }
            }
            if(secondSans){
                deltarune.move(200, 200);
                let firstDelta = setInterval(deltaruneCollision, 1000);
                let endDelta = setTimeout(function(){
                    clearInterval(firstDelta);
                    secondSans = false; 
                }, 5000);
            }
        }
        if(!secondSans && sansZone && !firstSans){
            context.beginPath();
            context.moveTo(0, 250);
            context.lineTo(350, 250);
            context.lineTo(350, 350);
            context.lineTo(0, 350);
            context.stroke();
            context.closePath();
            if(hero.x > 310 || hero.y < 250 || hero.y > 350 - 40){
                hero.move(290, 290);
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
let sansCollision = setInterval(function(){
    if(sansZone){
        if((hero.x  > sans.x - 15 && hero.x < sans.x + 35) &&  (hero.y > sans.y - 30 && hero.y - 10 < sans.y + 45)){
            hero.move(290, 290);
            sans.move();
            }
    }
}, 10)
    let deltaruneCollision = function() {
        if((hero.x  > deltarune.x - 15 && hero.x < deltarune.x + 35) &&  (hero.y > deltarune.y - 30 && deltarune.y - 10 < deltarune.y + 15)){
            deltarune.count++;
            deltarune.clear();
            hero.move(290, 290);
            console.log(deltarune.count);
            
        }
    }
        

