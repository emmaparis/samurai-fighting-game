//Video ended at 29:35

//creating canvas and context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//Defining canvas size
canvas.width = 1024;
canvas.height = 576;

//Drawing a rectangle
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

//Creating a sprite class
class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;   
        this.height = 150;
}

//Drawing the sprite
draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, 50, 150)
       }

//Updating the sprite
update() {
    this.draw();

    this.position.y += this.velocity.y;
    
    
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0;
    } else this.velocity.y += gravity;
}
}

//Creating a player sprite
const player = new Sprite({
    position: {
    x: 0, 
    y: 0
},
velocity: {
    x: 0,
    y: 0
}
});

//Creating an enemy sprite
const enemy = new Sprite({
        position: {
        x: 400, 
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});
enemy.draw();

console.log(player)

//Animating the sprite
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();
}

animate();

//Adding event listeners
window.addEventListener('keydown', (event) => {
    console.log(event);
});
