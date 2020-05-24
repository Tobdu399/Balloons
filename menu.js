let menu;

function Menu() {
  this.isOpen = false;

  this.show = function() {
    let position = 60;

    if (this.isOpen == true) {
      // Display menu
      image(menubg, position, position, width - position*2, height - position*2);
    }
  }
}

// Check if mouse is clicked on top of the menu icon
function mousePressed() {
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

function pause(stop) {
  for (let i=0; i<balloons.length; i++) {
    if (stop == true) {
      balloons[i].yspeed = 0;
    } else if (stop == false) {
      balloons[i].yspeed = -1;
    }
  }
}
