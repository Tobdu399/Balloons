let balloonsAmount = 5;   // 10 in the beginning
let balloons = []

function Balloon() {
  this.x = random(40, width-140);
  this.y = height - 70;
  this.isAlive = true;

  this.yspeed = -1;

  this.update = function() {
    // Ball must be alive and below the "ceiling"
    if (this.isAlive == true && this.y > 0) {
      this.y += this.yspeed;
      image(balloonImg, this.x, this.y, 75, 95);
    } else {
      // console.log("Game over!");
    }
  }

  this.check = function() {
    let poppedBalloons = 0;

    for (let i=0; i<balloons.length; i++) {
      if (balloons[i].isAlive == false) {
        poppedBalloons += 1;
      }
    }
  }
}

function displayBalloons() {
  balloonsAmount += 5;  // Add five balloons more every round
  wave += 1;

  setTimeout(function() {
    for (let i=0; i < balloonsAmount; i++) {
      balloons[i] = new Balloon();
    }
  }, 2000);
}

function mouseClicked() {
  for (let i=0; i<balloons.length; i++) {
    if (balloons[i].isAlive == true &&
        mouseX >= balloons[i].x && mouseX < balloons[i].x + 80 &&
        mouseY >= balloons[i].y && mouseY < balloons[i].y + 75) {

      balloons[i].isAlive = false;
      score = score + 1;
    }
  }
}
