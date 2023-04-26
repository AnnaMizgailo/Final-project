let sans = {
    x: 360,
    y: 300,
    move: function(x = this.x, y = this.y) {
        // check area is out
        if (x < 10 || x > 590) return;
        if (y < 10 || y > 690) return;

        this.clear();

        this.x = x;
        this.y = y;
        context.beginPath();
        var img = new Image();  
        img.src = '../img/sans.png'; 
        context.fillRect = "red";
        context.fill();
        context.drawImage(img, this.x, this.y, 60, 74); 
        context.closePath();
    },
    clear: function() {
        context.clearRect(this.x, this.y, 60, 74);
    }
};