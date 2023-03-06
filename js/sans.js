let torielle = {
    x: 400,
    y: 290,
    move: function(x = this.x, y = this.y) {
        // check area is out
        if (x < 10 || x > 590) return;
        if (y < 10 || y > 690) return;

        this.clear();

        this.x = x;
        this.y = y;
        context.beginPath();
        var img = new Image();  
        img.src = '../img/sans.jpg'; 
        context.fillRect = "red";
        context.fill();
        context.drawImage(img, this.x, this.y, 35, 43); 
        context.closePath();
    },
    clear: function() {
        context.clearRect(this.x, this.y, 35, 43);
    }
};