// Sanidhya Anand 12-12-2020

class Controller {
    constructor(){
        this.right = new Controller.Input();
        this.left = new Controller.Input();
        this.up = new Controller.Input();
        
        // Tracks key input
        this.keyDownUp = function(type, key_code) {

            var down = (type == "keydown") ? true : false;
        
            switch(key_code) {
        
              case 37: this.left.getInput(down);  break;
              case 38: this.up.getInput(down);    break;
              case 39: this.right.getInput(down);
        
            }
        
        };
    }
    
    static Input(){
        this.active = this.down = false;
    }
}

Controller.Input.prototype = {

    constructor: Controller.Input,
  
    getInput: function(down) {
      if (this.down != down) this.active = down;
      this.down = down;
    }
  
};