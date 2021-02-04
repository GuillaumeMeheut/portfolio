export default class Particle {
  constructor(main, x, y, timingRedirection) {
    this.mainWidth = main.width;
    this.mainHeight = main.height;

    this.main = main;

    this.width = 50;
    this.height = 0;

    this.nbOfEntityW = this.main.width / this.width;
    this.nbOfEntityH = this.main.height / this.height;

    this.position = {
      x: x,
      y: y,
    };

    this.speed = {
      x: 3,
      y: 0,
    };

    this.color = "rgba(131, 158, 255, 0.1)";

    this.redirection = false;
    this.timingRedirection = timingRedirection;
  }

  lineDirection(ctx) {
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
  }

  draw(ctx) {
    ctx.beginPath();
    this.lineDirection(ctx);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision on left&right
    if (this.position.x < 0 || this.position.x > this.mainWidth) {
      this.speed.x = -this.speed.x;
    }

    //collision on top&bottom
    if (this.position.y < 0 || this.position.y > this.mainHeight) {
      this.speed.y = -this.speed.y;
    }

    if (
      this.position.x % 120 == 0 &&
      this.position.y % 120 == 0 &&
      this.redirection == false
    ) {
      this.redirection = true;
      let temp = this.speed.y;
      this.speed.y = this.speed.x;
      this.speed.x = temp;

      temp = this.height;
      this.height = this.width;
      this.width = temp;

      setTimeout(() => {
        this.redirection = false;
      }, this.timingRedirection);
    }
  }
}
