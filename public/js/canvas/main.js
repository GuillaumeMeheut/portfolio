import Entity from "./entity.js";
import Particle from "./particle.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class Main {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.entities = [(this.entity = new Entity(this, 0, 0))];

    for (let i = 0; i < this.entity.nbOfEntityW; i++) {
      for (let j = 0; j < this.entity.nbOfEntityH; j++) {
        this.entities.push(
          (this.entity = new Entity(
            this,
            i * this.entity.width,
            j * this.entity.height
          ))
        );
      }
    }

    this.particles = [
      (this.particle = new Particle(this, 400, 240, getRandomInt(3000) + 2000)),
    ];

    for (
      let i = 0;
      i < this.entity.nbOfEntityW * this.entity.nbOfEntityH * 2;
      i++
    ) {
      this.particles.push(
        (this.particle = new Particle(
          this,
          getRandomInt(this.width),
          getRandomInt(this.entity.nbOfEntityH + 1) * this.entity.height,
          getRandomInt(3000) + 2000
        ))
      );
    }
  }

  draw(ctx) {
    this.entities.map((x) => x.draw(ctx));
    this.particles.map((x) => x.draw(ctx));
  }

  update() {
    this.entities.map((x) => x.update());
    this.particles.map((x) => x.update());
  }
}
