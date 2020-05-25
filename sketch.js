let running = false;
let canvas;

let font;
let cloudImg;
let groundImg;

let balloonImgRed, balloonImgBlue, balloonImgYellow;

let playBtn;
let gameoverImg;
let menuBtn, menubg;

let song;
let popSound1, popSound2;

var score = 0;
var wave = 0;

function preload() {
  font = loadFont('Fonts/font.ttf');
  song = createAudio('SFX/song.mp3');
  popSound1 = loadSound('SFX/pop.mp3');
  popSound2 = loadSound('SFX/pop2.mp3');

  gameoverImg = loadImage('Pictures/gameover.png');
  cloudImg = loadImage('Pictures/clouds.png');
	groundImg = loadImage('Pictures/ground.png');

  balloonImgRed = loadImage('Pictures/balloonred.png');
  balloonImgBlue = loadImage('Pictures/balloonblue.png');
  balloonImgYellow = loadImage('Pictures/balloonyellow.png');

  playBtn = loadImage('Pictures/play.png');
  menuBtn = loadImage('Pictures/menu.png');
  menubg = loadImage('Pictures/menubg.png');
}

function setup() {
	frameRate(60);
	canvas = createCanvas(600, 600);

  displayBalloons();        // Display balloons
  menu = new Menu()         // Create menu object
}

function draw() {
  // Center canvas every 100ms
  setTimeout(function() {
    canvas.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
  }, 100);

  background(0, 200, 255);
	image(cloudImg, 0, 0, width, height);

  if (running == true) {
    for (let i=0; i<balloons.length; i++) {
      balloons[i].update();
    }

    image(menuBtn, 20, 20);
    image(groundImg, 0, height-80, width);

    fill(100);
    textSize(30);
    textFont(font);
    text("Points: " + score, width-180, 45);

    fill(200);
    text("Wave: " + wave, 20, height-10);

    menu.show();  // Menu should be displayed on top
  } else {
    // Image width: 265, Image height: 175
    image(playBtn, 0, 0, width, height);
  }
}
