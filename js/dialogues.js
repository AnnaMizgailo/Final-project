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