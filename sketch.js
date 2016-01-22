

var x = 0
var bob;
var lil_bobs = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    stroke(0); 
    fill(150);
    bob = loadImage("assets/afro.gif"); 
    background(255);
}

function draw() {
    
    //background(255);
    image(bob, mouseX-100, mouseY-100);
    
    update_bobs()
    render_bobs()
    
}

function update_bobs(){
    for (var i = 0; i < lil_bobs.length;i++) {
        lil_bobs[i][0] += lil_bobs[i][2]
        lil_bobs[i][1] += lil_bobs[i][3]
    }
}

function render_bobs() {
    
    for (var i = 0; i < lil_bobs.length;i++) {
        image(bob, lil_bobs[i][0],lil_bobs[i][1]);
        //fill('black')
        //ellipse(lil_bobs[i][0],lil_bobs[i][1],20,20)
    }
}



function mouseClicked() {
    console.log(lil_bobs[0])
    var dx = Math.random()* (1 - (-1)) + (-1)
    var dy = Math.random()* (1 - (-1)) + (-1)
    lil_bobs.push([mouseX-100,mouseY-100,dx,dy])
    
}

