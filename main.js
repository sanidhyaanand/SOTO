// Sanidhya Anand 12-12-2020

/*The seperation of our entire logic is done according to the MVC approach  
This is all I can say */

window.addEventListener("load", function(event) {

    var keyDownUp = function(event) {
        controller.keyDownUp(event.type, event.keyCode);
    };

    var resize = function() {
        display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
        display.render();
    };

    var render = function() {
        game.setBG("Images/city_bg.jpg");
        display.fill(game.world.background); // Clear background to game's background color.
        // Render character
        display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
        display.render();
    };

    var update = function() {

        if (controller.left.active)  { game.world.player.moveLeft();  }
        if (controller.right.active) { game.world.player.moveRight(); }
        if (controller.up.active)    { game.world.player.jump(); controller.up.active = false }
    
        game.update();
    
    };
    
    // Initialise objects
    var controller = new Controller();
    var display    = new Display(document.querySelector("canvas"));
    var game       = new Game();
    var engine     = new Engine(1000/30, render, update);

    // Initialise display canvas
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;

    // Configure button inputs
    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup",   keyDownUp);
    window.addEventListener("resize",  resize);

    resize();

    engine.start();
});