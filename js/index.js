let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = "600";
canvas.height = "600";
let context = canvas.getContext("2d");

let torielleZone = false;
let sansZone = false;
let undyneZone = false;
let papyrusZone = false;
let charaZone = false;

let firstStepIntoSansZone = true;
let firstSansAboutDeltarune = true;

let firstTorielle = true;
let secondTorielle = true;
let thirdTorielle = true;
let fourthTorielle = false;

let firstSans = true;
let secondSans = false;
let thirdSans = false;

let firstUndyne = true;

let firstPapyrus = true;
let secondPapyrus = false;

let papyrusCol = 0;


let firstDeltaCol = false;

let apples = 0;

let countOFSansFirstDialogue = 0;

let firstDelta, secondDelta;





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

let firstTorielleInterval = setInterval(function(){
    if(torielleZone){
        torielle.move()
        if(apples == 0){
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
            
        }
        if(hero.x > 570 && !secondTorielle && !firstTorielle){
            torielleZone = false;
            context.clearRect(0, 0, 600, 600);
            sansZone = true;
        }
        if(apples == 1 && !fourthTorielle){
            context.beginPath();
            context.moveTo(600, 350);
            context.lineTo(250, 350);
            context.lineTo(250, 0);
            context.moveTo(600, 250);
            context.lineTo(350, 250);
            context.lineTo(350, 0);
            context.stroke();
            context.closePath();
            if((hero.x > 350 && (hero.y > 350 || hero.y < 250)) || ((hero.x > 250 && hero.x < 350) && hero.y > 350) || hero.x < 250){
                hero.move(290, 290);
            }
            if(thirdTorielle && hero.x < 470){
                TorielleThirdDialogue();
                thirdTorielle = false;
            }
            if(!thirdTorielle && hero.y < 50){
                torielleZone = false;
                context.clearRect(0, 0, 600, 600);
                undyneZone = true;        
                hero.move(290, 570);
            }
        }
        if(fourthTorielle){
            context.beginPath();
            context.moveTo(600, 250);
            context.lineTo(350, 250);
            context.lineTo(350, 0);
            context.moveTo(0, 250);
            context.lineTo(250, 250);
            context.lineTo(250, 0);
            context.moveTo(0, 350);
            context.lineTo(600, 350);
            context.stroke();
            context.closePath();
            if(hero.y > 350 || (hero.x < 250 && hero.y < 250) || (hero.x > 350 && hero.y < 250)){
                hero.move(290, 290);
            }
            if(hero.x < 20){
                torielleZone = false;
                context.clearRect(0, 0, 600, 600);
                papyrusZone = true;    
                hero.move(570, 290);
            }
            if(hero.y < 30 && !firstPapyrus){
                torielleZone = false;
                context.clearRect(0, 0, 600, 600);
                undyneZone = true;    
                hero.move(290, 570);
            }
        }
    }
}, 100);

let firstSansInterval = setInterval(function(){
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
            if(secondSans){
                deltarune.move(200, 250);
                firstDelta = setInterval(deltaruneCollision, 1000);
                let checkDelta = setInterval(function(){
                    if(deltarune.count == 1){
                        clearInterval(firstDelta);
                        deltarune.clear();
                        apples++;
                        clearInterval(checkDelta);
                        
                    }
                }, 1000);
                secondSans = false; 
            }
        }
        if(!secondSans && !firstSans){
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
        }if(hero.x < 20 && !secondSans && !firstStepIntoSansZone && !firstSans){ 
            if(firstSansAboutDeltarune){
                SansSecondDialogue(deltarune.count);
                if(deltarune.count < 1){
                    apples++;
                }
            }
            sansZone = false;
            context.clearRect(0, 0, 600, 600);
            torielleZone = true;
            hero.move(570, 290);
        }
    }
}, 100);

let firstUndyneInterval = setInterval(function(){
    if(undyneZone){
        undyne.move();
        if(firstUndyne){
            if((hero.x  > undyne.x - 15 && hero.x < undyne.x + 35) &&  (hero.y > undyne.y - 30 && hero.y - 10 < undyne.y + 45)){
                let ans = UndyneFirstDialogue();
                firstUndyne = false;
                if(ans == 'no'){
                    firstUndyne = true;
                    hero.move(290, 290);
                }
            }

        }
        if(!firstUndyne && hero.y > 580 && hero.x < 350 && hero.x > 250){
            undyneZone = false;
            context.clearRect(0, 0, 600, 600);
            torielleZone = true;
            hero.move(290, 20);
        }
        if(!firstPapyrus && (hero.x  > undyne.x - 15 && hero.x < undyne.x + 35) &&  (hero.y > undyne.y - 30 && hero.y - 10 < undyne.y + 45)){
            UndyneSecondDialogue();
            deltarune.move();
            secondDelta = setInterval(deltaruneCollision, 1000);
            let checkDelta = setInterval(function(){
                if((apples == 0 && deltarune.count == 1) || deltarune.count == 2){
                    clearInterval(checkDelta);
                    deltarune.clear();
                    apples++;
                    clearInterval(checkDelta);
                    
                }
            }, 1000); 
        }
        
    }

}, 100);

let firstPapyrusInterval = setInterval(function(){
    if(papyrusZone){
        papyrus.move();
        if(hero.x < papyrus.x + 40 && hero.x > papyrus.x - 40 && hero.y > 250 && hero.y < 350 && firstPapyrus){
            PapyrusFirstDialogue();
            if(PapyrusFirstDialogue !== 'no'){
                firstPapyrus = false;
                hero.move(290, 290);
                secondPapyrus = true;
            }
            
        }
        if(!firstPapyrus && !secondPapyrus){
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
            if(hero.x > 570){
                papyrusZone = false;
                context.clearRect(0, 0, 600, 600);
                torielleZone = true;
                hero.move(20, 290);
            }
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
    if((hero.x  > deltarune.x - 15 && hero.x < deltarune.x + 35) &&  (hero.y > deltarune.y - 30 && hero.y - 10 < deltarune.y + 15)){
        deltarune.count++;
        deltarune.clear();
        hero.move(290, 290);
        console.log(deltarune.count);
        
    }
}

let undyneCollision = setInterval(function(){
    if(undyneZone){
        if((hero.x  > undyne.x - 15 && hero.x < undyne.x + 35) &&  (hero.y > undyne.y - 30 && hero.y - 10 < undyne.y + 45)){
            hero.move(290, 290);
            undyne.move();
        }
    }
}, 100);
    

let papyrusCollision = setInterval(function(){
    if(papyrusZone){
        if((hero.x  > papyrus.x - 15 && hero.x < papyrus.x + 35) &&  (hero.y > papyrus.y - 30 && hero.y - 10 < papyrus.y + 45)){
            hero.move(290, 290);
            papyrus.move();
            if(!firstPapyrus){
                papyrusCol++;
            }
            if(papyrusCol == 5 && secondPapyrus){
                PapyrusSecondDialogue();
                secondPapyrus = false;
            }
        }
    }
}, 100);

        

