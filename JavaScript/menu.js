let menu;
let stop = false;

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

function pause(pause) {
  stop = pause;

  for (let i=0; i<balloons.length; i++) {
    if (pause == true) {
      song.pause();
      balloons[i].yspeed = 0;
    } else if (pause == false) {
      song.loop();
      balloons[i].yspeed = balloons[i].speed;
    }
  }
}
