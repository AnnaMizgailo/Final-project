let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = "600";
canvas.height = "600";
let context = canvas.getContext("2d");

let torielleMusic = document.getElementById("torielle-music");
torielleMusic.loop = true;
let undyneMusic = document.getElementById("undyne-music");
undyneMusic.loop = true;
let sansMusic = document.getElementById("sans-music");
sansMusic.loop = true;
let papyrusMusic = document.getElementById("papyrus-music");
papyrusMusic.loop = true;
let charaMusic = document.getElementById("chara-music");
charaMusic.loop = true;
let happyMusic = document.getElementById("win-music");

let badMusic = document.getElementById("game-over-music");


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
let fifthTorielle = true;

let firstSans = true;
let secondSans = false;
let thirdSans = false;

let firstUndyne = true;
let secondUndyne = true;

let firstPapyrus = true;
let secondPapyrus = false;

let firstChara = true;

let papyrusCol = 0;


let firstDeltaCol = false;

let apples = 0;

let countOFSansFirstDialogue = 0;

let ans1, ending, he;

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
        document.getElementsByTagName('canvas')[0].style.backgroundImage = 'url(../img/torielle_int.png)';
        sansMusic.pause();
        charaMusic.pause();
        undyneMusic.pause();
        papyrusMusic.pause();
        torielleMusic.play();
        torielle.move()
        if(apples == 0){
            if((hero.x + 75 > torielle.x) &&  (hero.y > torielle.y && hero.y - 10 < torielle.y + 45)){
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
        if(fourthTorielle && secondUndyne){
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
        if(!secondUndyne && ans1 !== 'no'){
            context.beginPath();
            context.moveTo(250, 0);
            context.lineTo(250, 250);
            context.lineTo(0, 250);
            context.moveTo(0, 350);
            context.lineTo(250, 350);
            context.lineTo(250, 600);
            context.moveTo(350, 600);
            context.lineTo(350, 350);
            context.lineTo(600, 350);
            context.moveTo(350, 0);
            context.lineTo(350, 250);
            context.lineTo(600, 250);
            context.stroke();
            context.closePath();
            if((hero.x < 250 && (hero.y < 250 || hero.y > 350)) || (hero.x > 350 && (hero.y < 250 || hero.y > 350))){
                hero.move(290, 290);
            } 
            if(hero.y > 250){
                
                if(fifthTorielle){
                    TorielleFourthDialogue();
                    fifthTorielle = false;
                }
                if(hero.y > 550){
                    torielleZone = false;
                    context.clearRect(0, 0, 600, 600);
                    charaZone = true;    
                    hero.move(290, 200);
                }
                
            }    
            if(ans1 == 'no'){
                context.clearRect(0, 0, 600, 600);
                torielle.move();
                hero.move(290, 290);
                setInterval(function(){
                    context.beginPath();
                    context.moveTo(250, 250);
                    context.lineTo(250, 350);
                    context.lineTo(350, 350);
                    context.lineTo(350, 250);
                    context.lineTo(250, 250);
                    context.stroke();
                    context.closePath();
                    if(hero.x - 50 < 250 || hero.x + 50 > 350 || hero.y - 50 < 250 || hero.y + 50 > 350){
                        hero.move(290, 290);
                    } 
                }, 100);
                setTimeout(() => {
                    alert('I certainly didn`t see this coming...');
                    alert('And it getting harder to calm down');
                    alert('Die')
                    GameOver();
                }, 10000);

            }   
        }
        if(ending){
            if(hero.y  < torielle.y + 150){
                TorielleLastDialogue();
                torielleZone = false;
                context.clearRect(0, 0, 600, 600);
                he = true;
                hero.move();
            }
        }
    }
}, 100);

let firstSansInterval = setInterval(function(){
    if(sansZone){
        document.getElementsByTagName('canvas')[0].style.backgroundImage = 'url(../img/sans_int.png)';
        sansMusic.play();
        torielleMusic.pause();
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
                    alert('I have warned you');
                    alert('I see you are not paying attention to your actions')
                    alert('A fool');
                    GameOver();
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
        document.getElementsByTagName('canvas')[0].style.backgroundImage = 'url(../img/undyne_int.jpg)';
        document.getElementsByTagName('canvas')[0].style.background = 'contain';
        undyneMusic.play();
        torielleMusic.pause();
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
            secondUndyne = false;
        }
        
    }

}, 100);

let firstPapyrusInterval = setInterval(function(){
    if(papyrusZone){
        document.getElementsByTagName('canvas')[0].style.backgroundImage = 'url(../img/papyrus_int.jpg)';
        papyrusMusic.play();
        torielleMusic.pause();
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

let firstCharaInterval = setInterval(function(){
    if(charaZone){
        document.getElementsByTagName('canvas')[0].style.backgroundImage = 'url(../img/chara_int.png)';
        charaMusic.play();
        torielleMusic.pause();
        if(firstChara){
            chara.move();
            CharaFirstDialogue();
            firstChara = false;
            let firstCharaFight = setInterval(charaFight, 1000);
            setTimeout(() => {
                clearInterval(firstCharaFight);
                let secondCharaFight = setInterval(charaFight, 700);
                setTimeout(() => {
                    clearInterval(secondCharaFight);
                    let thirdCharaFight = setInterval(charaFight, 500);
                    setTimeout(() => {
                        clearInterval(thirdCharaFight);
                        console.log(ans1);
                        if(ans1 == 'yes' && deltarune.count == 2){
                            CharaHappyEndDialogue();
                            deltarune.move(290, 220);
                            ending = true;
                        }else if(ans1 == 'yes' && deltarune.count == 1){
                            CharaImpossibleDialogue();
                            let lastCharaFight = setInterval(charaFight, 100);
                            setTimeout(() => {
                                clearInterval(lastCharaFight);
                                CharaLastDialogue();
                                deltarune.move(290, 200);
                                chara.clear();
                                ending = true;
                            }, 50000);
                        }else{
                            CharaBadEnding();
                            GameOver();
                        }
                        if(ending){
                            let drawWalls = setInterval(function(){
                                context.beginPath();
                                context.moveTo(250, 0);
                                context.lineTo(250, 350);
                                context.lineTo(350, 350);
                                context.lineTo(350, 0);
                                context.stroke();
                                context.closePath();
                                if(hero.x > 350 || hero.x < 250 || hero.y > 350){
                                    hero.move(290, 290);
                                }
                                if(hero.y < 220){
                                    clearInterval(drawWalls);
                                    charaZone = false;
                                    context.clearRect(0, 0, 600, 600);
                                    torielleZone = true;
                                    hero.move(290, 570);
                                }
                            }, 100);
                        }
                    }, 20000);
                }, 20000);
               
            }, 20000);
           
        }
    }

}, 100);

let HappyEndingInterval = setInterval(() => {
    if(he){
        torielleMusic.pause();
        happyMusic.play();
        torielle.move(torielle.x, 200);
        papyrus.move(papyrus.x, 200);
        sans.move(sans.x, 200);
        undyne.move(undyne.x, 200);
        if(deltarune.count == 3){
            chara.move(papyrus.x + 80, 200);
        }
        context.beginPath();
        var img = new Image();  
        img.src = '../img/congrats.png'; 
        context.fillRect = "red";
        context.fill();
        context.drawImage(img, 100, 282, 400, 36); 
        context.closePath();
    }
}, 100);




let torielleCollision = setInterval(function(){
    if(torielleZone){
        if((hero.x + 50 > torielle.x && hero.x < torielle.x + 60) &&  (hero.y + 63 > torielle.y && hero.y < torielle.y + 85)){
            hero.move(290, 290);
            torielle.move();
            }
    }
}, 10)
let sansCollision = setInterval(function(){
    if(sansZone){
        if((hero.x  > sans.x - 15 && hero.x < sans.x + 35) &&  (hero.y > sans.y - 60 && hero.y - 10 < sans.y + 45)){
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
        if((hero.x  > undyne.x - 15 && hero.x < undyne.x + 35) &&  ( hero.y < undyne.y + 80)){
            hero.move(290, 290);
            undyne.move();
        }
    }
}, 100);
    

let papyrusCollision = setInterval(function(){
    if(papyrusZone){
        if((hero.x  > papyrus.x - 30 && hero.x < papyrus.x + 60) &&  (hero.y > papyrus.y - 60 && hero.y < papyrus.y + 120)){
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

let charaCollision = setInterval(function(){
    if(charaZone){
        if((hero.x  > chara.x - 40 && hero.x < chara.x + 40) &&  (hero.y > chara.y - 30 && hero.y < chara.y + 30)){
            GameOver();
        }
    }
}, 100);
let charaRoomCollision = setInterval(() => {
    if(charaZone){
        if(hero.y < 180){
            hero.clear();
            hero.y = 200;
        }
    }
}, 100)





function charaFight(){
    if(chara.x < hero.x){
        chara.clear();
        chara.move(chara.x + 20, chara.y);
    }else if(chara.x > hero.x){
        chara.clear();
        chara.move(chara.x - 20, chara.y);
    }
    if(chara.y < hero.y){
        chara.clear();
        chara.move(chara.x, chara.y + 20);
    }else if(chara.y > hero.y){
        chara.clear();
        chara.move(chara.x, chara.y - 20);
    }
}

async function GameOver(){

    window.removeEventListener('keydown', keyboardHandler, true);

    torielleMusic.pause();
    sansMusic.pause();
    charaMusic.pause();
    badMusic.play();
    clearInterval(firstCharaInterval);
    clearInterval(firstTorielleInterval);
    clearInterval(firstPapyrusInterval);
    clearInterval(firstSansInterval);
    clearInterval(firstUndyneInterval);
    clearInterval(torielleCollision);
    clearInterval(sansCollision);
    clearInterval(undyneCollision);
    clearInterval(papyrusCollision);
    clearInterval(charaCollision);
    torielleZone = false;
    sansZone = false;
    undyneZone = false;
    papyrusZone = false;
    charaZone = false;

    firstStepIntoSansZone = true;
    firstSansAboutDeltarune = true;

    firstTorielle = true;
    secondTorielle = true;
    thirdTorielle = true;
    fourthTorielle = false;
    fifthTorielle = true;

    firstSans = true;
    secondSans = false;
    thirdSans = false;

    firstUndyne = true;
    secondUndyne = true;

    firstPapyrus = true;
    secondPapyrus = false;

    firstChara = true;

    papyrusCol = 0;


    firstDeltaCol = false;

    apples = 0;

    countOFSansFirstDialogue = 0;

    document.getElementsByTagName('canvas')[0].style.backgroundColor = 'white';
    context.clearRect(0, 0, 600, 600);
    context.beginPath();
    let image = await (() => {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img)
            img.onerror = reject
            img.src = '../img/gameover.png';
        })
    })();
    context.drawImage(image, 0, 236, 600, 128);
    context.closePath();

    ans1 = '';
    ending = false;
    he = false;
    alert('You`ve lost');

}

        

