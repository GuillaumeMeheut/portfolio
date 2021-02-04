import Main from "./main.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight;

let main = new Main(canvas.width, canvas.height);

function animationLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  main.update();
  main.draw(ctx);

  requestAnimationFrame(animationLoop);
}

requestAnimationFrame(animationLoop);
