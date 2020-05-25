let font;
let cloudImg;
let groundImg;

let balloonImgRed, balloonImgBlue, balloonImgYellow;

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

  menuBtn = loadImage('Pictures/menu.png');
  menubg = loadImage('Pictures/menubg.png');
}

function setup() {
	frameRate(60);
	let canvas = createCanvas(600, 600);

  displayBalloons();        // Display balloons
  menu = new Menu()         // Create menu object
  song.loop();
}

function draw() {
	background(0, 200, 255);
	image(cloudImg, 0, 0, width, height);
  image(menuBtn, 20, 20);

  fill(100);
  textSize(30);
  textFont(font);
  text("Points: " + score, width-180, 45);

  for (let i=0; i<balloons.length; i++) {
    balloons[i].update();
  }

	image(groundImg, 0, height-80, width);

  fill(200);
  textSize(30);
  textFont(font);
  text("Wave: " + wave, 20, height-10);

  menu.show();  // Menu should be on top
}
