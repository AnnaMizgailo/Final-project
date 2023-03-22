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