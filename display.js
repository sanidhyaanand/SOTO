// Sanidhya Anand 12-12-2020

class Display {
    constructor(canvas) {
        this.buffer = document.createElement("canvas").getContext("2d"),
        this.context = canvas.getContext("2d");
        
        // For drawing our character
        this.drawRectangle = function(x, y, height, width, color){
            this.buffer.fillStyle = color;
            this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
        };
        
        // For filling the canvas (sending information to buffer)
        this.fill = function(color) {
            this.buffer.fillStyle = color;
            this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height)
        };

        // Renders buffer content
        this.render = function() { 
            this.context.drawImage(this.buffer.canvas, 0, 0, 
                this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, 
                this.context.canvas.width, this.context.canvas.height); 
        };

        // For resizing the window
        this.resize = function(width, height, height_width_ratio) {
            // If height is increased, update height
            if (height / width > height_width_ratio) {
              this.context.canvas.height = width * height_width_ratio;
              this.context.canvas.width = width;
            } 
            // If width is increased, update width
            else {
              this.context.canvas.height = height;
              this.context.canvas.width = height / height_width_ratio;
            }

            this.context.imageSmoothingEnabled = false;
        };
    }
}