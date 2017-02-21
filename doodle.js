console.log("this is doodle")

//Question 5: The follow line doesn't work unless I put it into preload.
//I test it, doodle.js run first, then content.js, so I guess this might need a callback, right?
// console.log(document.getElementById("mouse"));

var num = 20;
var arr = [];

function preload() {
  var mouseURL = document.getElementById("mouse").src;
  img = loadImage(mouseURL);
}

function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
  for(var i = 0; i< num; i++){
    arr.push(new Particle());
  }
}


function draw(){
  background(255);
  arr.push(new Particle);
  arr.length = constrain(arr.length,0,20);
  for(var i = 0; i< arr.length; i++){
    arr[i].update();
    arr[i].display();
    if(arr[i].lifeSpan === 0 ){
      arr.splice(i,1);
    }
  }
}

var Particle = function(){
  this.pos = createVector(random(width),random(height));
  this.prev = this.pos.copy();
  this.mouse = createVector(0,0);
  this.speed = createVector(random(2),random(2));
  this.acc = createVector(0,0);
  this.color = color(255,0,0,this.lifeSpan);
  this.turnFactor = random(3,10);
  this.lifeSpan = 255;
  this.lifeSpanC = 1;
  this.size = 80+25;

  this.update = function(){
    this.prev = this.pos.copy();
    if(this.pos.x > width){
      this.pos.x = 0;
    }
    if(this.pos.x < 0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = height;
    }
    this.mouse.set(mouseX,mouseY);
    var attraction = createVector(this.mouse.x,this.mouse.y);
    attraction.sub(this.pos);
    this.acc.set(attraction);
    this.acc.normalize();
    this.acc.div(this.turnFactor);
    this.speed.add(this.acc);
    this.speed.limit(200/60);
    this.pos.add(this.speed);
    this.lifeSpan -= 1*this.lifeSpanC;
    this.size -= 1;
    this.size = constrain(this.size,25,100);
    // if(this.lifeSpan<=1||this.lifeSpanC>=255){
    //   this.lifeSpanC = this.lifeSpanC*-1;
    // }
  }

  this.display = function() {
    stroke(this.color);
    tint(255,this.lifeSpan);
    strokeWeight(1);
    push();
    translate(this.pos.x,this.pos.y);
    rotate(atan2(this.pos.y-mouseY,this.pos.x-mouseX));
    image(img,0,0,this.size,this.size);
    pop();
  }
}
