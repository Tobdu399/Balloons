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

function pause(stop) {
  for (let i=0; i<balloons.length; i++) {
    if (stop == true) {
      balloons[i].yspeed = 0;
    } else if (stop == false) {
      balloons[i].yspeed = balloons[i].speed;
    }
  }
}
