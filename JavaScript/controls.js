// 82: R
// 27: ESC

function keyPressed() {
  // Reload page if R is pressed
  if (keyCode === 82) {
    location.reload();
  }

  // Open and close menu if ESC is pressed
  else if (keyCode === 27 && running == true && menu.isOpen == false) {
    menu.isOpen = true;
    pause(true);
  } else if (keyCode === 27 && running == true && menu.isOpen == true) {
    menu.isOpen = false;
    pause(false);
  }
}

// Balloons
// Check if mouse is clicked on top of a balloon
function mouseClicked() {
  if (gameover == false && stop == false) {
    for (let i=0; i<balloons.length; i++) {
      if (balloons[i].isAlive == true &&
          mouseX >= balloons[i].x && mouseX < balloons[i].x + 90 &&
          mouseY >= balloons[i].y && mouseY < balloons[i].y + 80) {

        balloons[i].isAlive = false;
        score = score + 1;
        balloons[i].pop();
      }
    }
  }
}

// Menu
// Check if mouse is pressed on top of the menu icon
function mousePressed() {
  if (running == false) {
    // If user clicks mouse anywhere on the screen, the game begins
    running = true;
    song.play();    // Play the song in a loop
  } else {
    if (menu.isOpen === false &&
        mouseX >= 20 && mouseX < 56 &&
        mouseY >= 20 && mouseY < 56) {

      menu.isOpen = true;
      pause(true);
    } else if (menu.isOpen === true &&
        mouseX >= 20 && mouseX < 56 &&
        mouseY >= 20 && mouseY < 56) {

      menu.isOpen = false;
      pause(false);
    } else {
      return;
    }
  }
}
