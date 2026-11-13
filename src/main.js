import { PALETTE } from './palette.js';
import { drawMap } from './world/map.js';

const root = document.documentElement;
for (const [key, value] of Object.entries(PALETTE.ui)) {
    root.style.setProperty(`--ui-${key}`, value);
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function render() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = PALETTE.world.void;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawMap(ctx);
}

window.addEventListener("resize", render);
render();