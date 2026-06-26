// ILUSTRACIONES POR: @quomyth en instagram. (˶˃ ᵕ ˂˶)♡
// Comandos en inglés para acortar palabras sin confundirme

//========================
// ESTADOS
//========================

const E = {
  NORMAL: 0,
  FEEDING: 1,
  BATHING: 2,
  PETTING: 3,
  EVOLVING: 4,
  DEAD: 5
};

let estado = E.NORMAL;

//========================
// PNGS OWL / PNGS ICONOS
//========================

let ogowl;
let feeding;
let bubbles;
let cute;
let evil = [];
let frameEvil = 0;

let FOOD;
let BATH;
let PETTING;
let EVOLVE;

//========================
// PROGRESO
//========================

let hizoFOOD = false;
let hizoBATH = false;
let hizoPETTING = false;

//========================
// PRELOAD
//========================

function preload(){

  ogowl = loadImage("ogowl.png");
  feeding = loadImage("feeding.png");
  bubbles = loadImage("bubbles.png");
  cute = loadImage("cute.png");
  
  for(let i = 0; i < 13; i++){

  evil[i] = loadImage("evil" + (i + 1) + ".png");

}

  FOOD = loadImage("FOOD.png");
  BATH = loadImage("BATH.png");
  PETTING = loadImage("PETTING.png");
  EVOLVE = loadImage("EVOLVE.png");

}

//========================
// SETUP
//========================

function setup(){

  createCanvas(600,400);
  colorMode(HSB,360,100,100,100);

}

//========================
// DRAW
//========================

function draw(){
  
  background(10,12,95);

  stroke(30,45,75);
  strokeWeight(2);

  fill(34,25,98);
  rect(-1,276,602,125);

  line(0,276,600,276);

//========================
// OWL
//========================

  imageMode(CENTER);

  switch(estado){

  case E.NORMAL:
   image(ogowl,300,200,250,250);
   break;

  case E.FEEDING:
   image(feeding,300,200,250,250);
   break;

  case E.BATHING:
   image(bubbles,300,200,250,250);
   break;

  case E.PETTING:
   image(cute,300,200,250,250);
   break;

  case E.EVOLVING:

  image(evil[frameEvil],300,200,250,250);

  if(frameCount % 5 == 0){
    frameEvil++
  }

  if(frameEvil >= 13){

    estado = E.DEAD;

  }

  break;

  case E.DEAD:

  background(0);

  fill(255);

  textAlign(CENTER, CENTER);

  textSize(45);
  text("GAME OVER", width/2, height/2);

  textSize(18);
  text("Presiona R para volver", width/2, height/2 + 50);

  return;

  }

  imageMode(CORNER);

  // CUADRO INFERIOR
  fill(40,8,98);
  rect(1,329,598,70);

//========================
// BOTONES
//========================

  image(FOOD,60,340,50,50);

  image(BATH,170,340,50,50);

  image(PETTING,280,340,50,50);

  // Solo aparece cuando haces todas las de arriba
  if(hizoFOOD && hizoBATH && hizoPETTING){

  image(EVOLVE,390,340,50,50);

};

  }

//========================
// CLICK
//========================

function mousePressed(){

  // COMIDA
  if(mouseX > 60 && mouseX < 110 &&
     mouseY > 340 && mouseY < 390){

    estado = E.FEEDING;
    hizoFOOD = true;

    setTimeout(function(){
      estado = E.NORMAL;
    },1000);

  }

  // BAÑAR
  if(mouseX > 170 && mouseX < 220 &&
     mouseY > 340 && mouseY < 390){

    estado = E.BATHING;
    hizoBATH = true;

    setTimeout(function(){
      estado = E.NORMAL;
    },1000);

  }

  // ACARICIAR
  if(mouseX > 280 && mouseX < 330 &&
  mouseY > 340 && mouseY < 390){

  estado = E.PETTING;
  hizoPETTING = true;

  setTimeout(function(){
  estado = E.NORMAL;
  },1000);

  }

  // EVOLUCIONAR
  if(hizoFOOD && hizoBATH && hizoPETTING){

  if(mouseX > 390 && mouseX < 440 &&
  mouseY > 340 && mouseY < 390){

  frameEvil = 0;      // Empieza desde evil1.png
  estado = E.EVOLVING;

  }

}

}

// REINICIAR
function keyPressed(){

  if(key == "r" || key == "R"){

  estado = E.NORMAL;

  hizoFOOD = false;
  hizoBATH = false;
  hizoPETTING = false;

  frameEvil = 0;

}

}
