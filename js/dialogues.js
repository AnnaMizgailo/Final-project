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
    if(ans != 'yes'){
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
    alert('I`ll give you this apple and you go away from where you came and never return');
    let ans = prompt('deal?');
    if(ans == 'ok'){
        alert('I knew you would choose this');
    }else{
        alert('don`t you know that this world is cyclical');
        alert('I will not let you out of here');
    }
    return ans;
}