let undyne = {
    x: 283,
    y: 200,
    move: function(x = this.x, y = this.y) {
        // check area is out
        if (x < 10 || x > 590) return;
        if (y < 10 || y > 690) return;

        this.clear();

        this.x = x;
        this.y = y;
        context.beginPath();
        var img = new Image();  
        img.src = '../img/undyne.png'; 
        context.fillRect = "red";
        context.fill();
        context.drawImage(img, this.x, this.y, 53, 105); 
        context.closePath();
    },
    clear: function() {
        context.clearRect(this.x, this.y, 53, 105);
    }
};