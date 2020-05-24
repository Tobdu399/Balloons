let balloonsAmount = 5;   // 10 in the beginning
let balloons = []
let gameover = false;

function Balloon() {
  this.x = random(40, width-140);
  this.y = random(height, height+400);
  this.isAlive = true;

  this.speed = random(-1, -3);
  this.yspeed = this.speed;

  this.update = function() {
    // Ball must be alive and below the "ceiling"
    if (this.isAlive == true && this.y > 0) {
      this.y += this.yspeed;
      image(balloonImg, this.x, this.y, 75, 95);
    } else if (this.y < 0) {

      // Image width: 355, height: 150 (px)
      gameover = true;
      image(gameoverImg, width/2 - 355/2, height/2 - 150/2);

      this.yspeed = 0;
      this.speed = 0;

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
    balloons[i] = new Balloon();
  }
}
