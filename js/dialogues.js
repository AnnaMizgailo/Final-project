function TorielleFirstDialogue(){
    alert('Hello');
    alert('I haven`t seen you in a while');
    alert('How are you today?');
    let ans = prompt('Are you tired?');
    return ans;
}
function TorielleSecondDialogue(){
    alert('Dear, can you help me with an apple pie?');
    alert('I know you like it');
    let ans = prompt('So... maybe you can pick 3 golden apples for me?');
    if(ans == 'yes' || ans == 'ok'){
        alert('Great!');
    }else{
        alert('CaN`t YoU jUsT hElP yOuR mOtHeR?!?!')
        alert('*glitch*');
    }
    alert('I`m so happy you can help!');
}
function SansFirstDialogue(){
    alert('Yo');
    alert('How are you, kiddo?');
    alert('Nevermind, it`s better to ask why a you still here');
    alert('it`s very dangerous down there');
    alert('let`s have a deal');
    alert('your mama can cook a small apple pie with only 1 apple, right?');
    alert('I`ll give you deltarune, which you an exchange on whatever you want, so you can buy an apple and go away from where you came and never return');
    let ans = prompt('deal?');
    if(ans == 'ok' || ans == 'yes'){
        alert('I knew you would choose this');
        alert('Take it before you go');
    }else{
        alert('don`t you know that this world is cyclical');
        alert('I will not let you out of here');
    }
    return ans;
}

function SansSecondDialogue(x){
    if(x == 0){
        alert('Are you sure you don`t wanna take deltarune?');
        alert('Well, that`s your choice');
        clearInterval(firstDelta);
        deltarune.clear();
    }else{
        alert('Keep your promise');
    }
}

function TorielleThirdDialogue(){
    alert('Hi there!');
    alert('How are you?');
    let ans = prompt('Have you found the way to get an apple?');
    if(ans == 'yes'){
        alert('I`m so proud of you!');
        alert('Keep it going!');
        if(deltarune.count == 0){
            // - в карму муахахахха
        }
    }else{
        if(deltarune.count == 1){
            alert('You`re trying to hide something from me...');
            alert('WHY?!!!!!!!!!!!!!');
            alert('*glitch*')
        }
        alert('Anyway... keep it going');
    }
}

function TorielleFourthDialogue(){
    alert('Sweetheart');
    ans1 = prompt('Do you get atleast one apple?');
    if(deltarune.count > 0 && ans1 == 'yes'){  
        alert('It`s so cool, I have no doubt you would handle it');
        alert('Good luck and always remember that I am with you');
    }
    else if(deltarune.count == 0 && ans1 == 'no'){
        alert('Oh honey, there is know sense to go deeper');
        alert('Just stay with me... FOREVER');
    }else{
        alert('Oh...');
        alert('I fEeL ThIs SmElL oF dIrTy LiE');
        alert('Uh-h-h-h...');
        alert('(in a whisper) I need to hold back');
        setTimeout(function(){
            alert('Why are you lying to mommy?');
            alert('Don`t u know that`s very bad');
            alert('Deal with her yourself, no help at my side');
        }, 3000);
    }
}

function UndyneFirstDialogue(){
    alert('Hey!');
    alert('Why did you come on my territory?!');
    let ans = prompt('What do you want?');
    if(ans == "apple" || ans == "deltarune"){
        if(ans == "apple"){
            alert('Soo... you want an apple?');
            alert('I have something else...');
        }
        alert('I can give you deltarune');
        alert('But in exchange I want you to give me a sword');
        alert('Sure, you can do it, you smell...');
        alert('...special.');
        fourthTorielle = true;
    }else{
        alert('Haven`t got an idea what are you talking about');
        return 'no';
    }
}
function PapyrusFirstDialogue(){
    alert('Yo');
    alert('Heyyyy, what the heck is going on&!&!&&');
    alert('It`s unbelievable...');
    alert('What the human is doing here in undeground????');
    let ans = prompt('What do you want??');
    if(ans == 'sword'){
        alert('HAHHHHAHHAHAHAHAHAHAHAHAHAHHA');
        alert('no way I give you any of my swords...');
    }else{
        alert('Bro, I haven`t got an idea what are you talking about');
        return 'no';
    }
}
function PapyrusSecondDialogue(){
    alert('Okk, I`ll give you a sword, you`ve been very itchy');
    alert('Just get outta here'); 
}

function UndyneSecondDialogue(){
    alert('Oh, you bring me a sword!');
    alert('Take your deltarune');
}

function CharaFirstDialogue(){
    alert('Hi, my old friend');
    setTimeout(function(){
        alert('Oh... You don`t remember me?');
        alert('I am you');
        alert('That`s why everyone are suspicious about you');
        alert('I know everything about you');
        alert('I know what are you looking for');
        alert('Are you really think you`ll get rid of me that fast?');

    }, 5000);
}

function CharaHappyEndDialogue(){
    alert('Mom really loves us, isn`t she?');
    alert('She will be upset if you won`t come back');
    alert('And she will be angry if I kill you');
    alert('Take the last deltarune and good luck');
}
function CharaImpossibleDialogue(){
    alert('You are not worthy');
    alert('Huh... Me too');
    alert('So... I will give you another torture');
}
function CharaBadEnding(){
    alert('You lied to our mother');
    alert('How could you?');
    alert('You must receive a punishment');
    alert('I will torture you');
    alert('...till the end');
}

function CharaLastDialogue(){
    alert('Oh, maybe you are worthy');
    alert('But still I am not');
    alert('Farewell')
}