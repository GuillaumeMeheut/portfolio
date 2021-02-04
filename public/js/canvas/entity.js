export default class Entity {
  constructor(main, x, y) {
    this.mainWidth = main.width;
    this.mainHeight = main.height;

    this.main = main;

    this.width = 120;
    this.height = 120;

    this.nbOfEntityW = this.main.width / this.width;
    this.nbOfEntityH = this.main.height / this.height;

    this.position = {
      x: x,
      y: y,
    };
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(131, 158, 255, 0.02)";
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    ctx.closePath();
  }

  update() {}
}
