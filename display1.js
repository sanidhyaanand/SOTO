
const Display = function(canvas) {

  // Buffer is the offscreen data storage element
  // Context refers to our on screen canvas
  this.buffer  = document.createElement("canvas").getContext("2d"),
  this.context = canvas.getContext("2d");
  
  // Draws our player rectangle
  this.drawRectangle = function(x, y, width, height, color) {
    this.buffer.fillStyle = color;
    // Change Math.floor(arg) to arg if you want a sort of malfunctioning
    // player character
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  // Fills main canvas buffer
  this.fill = function(image) {
    var pattern = this.buffer.createPattern(image, "repeat")
    this.buffer.fillStyle = pattern;
    this.buffer.fillRect(0, 0, image.width, image.height);
  };

  // Renders buffer content to on screen canvas
  this.render = function() { this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height); };

  // For handling resizing of the browser window
  this.resize = function(width, height, height_width_ratio) {
    if (height / width > height_width_ratio) {
      this.context.canvas.height = width * height_width_ratio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / height_width_ratio;
    }

    this.context.imageSmoothingEnabled = false;
  };
  
};
  
Display.prototype = {
  constructor : Display
};