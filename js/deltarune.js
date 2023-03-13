let deltarune = {
    count: 0,
    x: 1000,
    y: 1000,
    move: function(x = this.x, y = this.y){
        if (x < 10 || x > 590) return;
        if (y < 10 || y > 690) return;

        this.clear();

        this.x = x;
        this.y = y;
        context.beginPath();
        let img = new Image();  debugger;
        img.src = '../img/delta.png'; 
        context.drawImage(img, this.x, this.y, 30, 30); 
        context.closePath();
        console.log(this.x, this.y);
    },
    clear: function() {
        context.clearRect(this.x, this.y, 30, 30);
    }
};