import { PALETTE } from './palette.js';
import { drawMap, MAP_WIDTH, MAP_HEIGHT } from './world/map.js';
import { camera, centerCamera, updateCamera } from './systems/camera.js';

const root = document.documentElement;
for (const [key, value] of Object.entries(PALETTE.ui)) {
    root.style.setProperty(`--ui-${key}`, value);
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let showGrid = true;
const gridBtn = document.getElementById("toggle-grid");
gridBtn.addEventListener("click", () => {
    showGrid = !showGrid;
    gridBtn.textContent = showGrid ? "GRID: ON" : "GRID: OFF";
});

const keys = {};
window.addEventListener("keydown", (e) => { keys[e.code] = true; });
window.addEventListener("keyup", (e) => { keys[e.code] = false; });

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();
centerCamera(canvas.width, canvas.height, MAP_WIDTH, MAP_HEIGHT);

function gameLoop() {
    updateCamera(keys);

    ctx.fillStyle = PALETTE.world.void;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawMap(ctx, camera, showGrid);

    requestAnimationFrame(gameLoop);
}

gameLoop();