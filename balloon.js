let balloonsAmount = 5;   // 10 in the beginning
let balloons = []
let gameover = false;

function Balloon(color) {
  this.x = random(40, width-140);
  this.y = random(height, height+500);
  this.isAlive = true;

  this.speed = random(-1, -2.5);
  this.color = color;
  this.yspeed = this.speed;

  this.pop = function() {
    let soundToPlay = Math.floor(random(1, 3));

    if (soundToPlay == 1) {
      popSound1.play();
    } else if (soundToPlay == 2) {
      popSound2.play();
    }
  }

  this.update = function() {
    // Ball must be alive and below the "ceiling"
    if (this.isAlive == true && this.y > -10) {
      this.y += this.yspeed;
      image(color, this.x, this.y, 75, 95);
    }

    // If the y position is smaller than 0, game ends
    else if (this.y < 0) {
      // Image width: 355, height: 150 (px)
      gameover = true;
      image(gameoverImg, width/2 - 355/2, height/2 - 150/2);

      return;
    }

    if (isWaveComplete()) {
      displayBalloons();
    }
  }
}

function isWaveComplete() {
  let isComplete = false;
  let poppedBalloons = 0;

  for (let i=0; i<balloons.length; i++) {
    if (balloons[i].isAlive == false) {
      poppedBalloons += 1;
    }
  }

  if (poppedBalloons == balloonsAmount) {
    isComplete = true;
  }

  return isComplete;
}

function displayBalloons() {
  balloonsAmount += 5;  // Add five balloons more every round
  wave += 1;

  for (let i=0; i < balloonsAmount; i++) {
    let color = Math.floor(random(1, 4));

    if (color == 1) {
      color = balloonImgRed;
    } else if (color == 2) {
      color = balloonImgBlue;
    } else if (color == 3) {
      color = balloonImgYellow;
    }

    balloons[i] = new Balloon(color);
  }
}
