// Sanidhya Anand 12-12-2020

// Game Class contains functions and constructors for World and Player objects 

class Game {
    constructor() {
        this.world = {
            background_color: "rgba(1.0,0.5,0.5,1)",

            mu: 0.5,
            g: 9.8,

            height: 200,
            width: 300,

            player: new Game.Player(), // initialise player
            
            // Function checks for collision
            collisionObject: function (object) {
                if (object.x < 0) { object.x = 0; object.velx = 0; }
                else if (object.x + object.width > this.width) { objext.x = this.width - object.width; object.velx = 0; }
                if (object.y < 0) { object.y = 0; object.vely = 0; }
                else if (object.y + object.height > this.height) { objext.y = this.height - object.height; object.vely = 0; }
            },

            // Updates player using world properties
            update:function() {

                this.player.vely += this.gravity;
                this.player.update();
          
                this.player.velx *= this.friction;
                this.player.vely *= this.friction;
          
                this.collideObject(this.player);
          
              }
        };
        
        // Ease of writing
        this.update = function() {

            this.world.update();
        
          };
    }

    // Player constructor method
    static Player(x, y) {
        this.x = 0;
        this.y = 0;
        this.velx = 0;
        this.vely = 0;
        this.height = 20;
        this.width = 20;
        this.color = "#ff0000";
        this.jumping    = true;
    }
}

Game.Player.prototype = {

    constructor : Game.Player,

    jump: function() {

        if (!this.jumping) {

        this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);// Change to random color
        /* toString(16) will not add a leading 0 to a hex value, so this: #0fffff, for example,
        isn't valid. toString would cut off the first 0. The code below inserts it. */
        if (this.color.length != 7) {

            this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);

        }

        this.jumping = true;
        this.vely -= 20;

        }

    },

    moveLeft: function()  { this.velx -= 0.5; },
    moveRight: function() { this.velx += 0.5; },

    update: function() {

        this.x += this.velx;
        this.y += this.vely;

    }

};