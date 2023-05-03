let deltarune = {
    count: 0,
    x: 1000,
    y: 1000,
    move: async function(x = this.x, y = this.y) {
        if (x < 10 || x > 590) return;
        if (y < 10 || y > 690) return;

        this.clear();

        this.x = x;
        this.y = y;
        context.beginPath();
        let image = await (() => {
            return new Promise((resolve, reject) => {
                let img = new Image()
                img.onload = () => resolve(img)
                img.onerror = reject
                img.src = '../img/delta.png';
            })
        })();
        // let img = (() => {
        //     let image = new Image();
        //     image.src = ;

        //     return image;
        // })();

        context.drawImage(image, this.x, this.y, 32, 30);
        // img.onload = function() {
            
        // };
        // img.src = '../img/delta.png'; 
        context.closePath();
        console.log(this.x, this.y);
    },

    clear: function() {
        context.clearRect(this.x, this.y, 32, 30);
    }
};