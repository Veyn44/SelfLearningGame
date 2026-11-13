import { PALETTE } from './palette.js';

const root = document.documentElement;
for (const [key, value] of Object.entries(PALETTE.ui)) {
    root.style.setProperty(`--ui-${key}`, value);
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.fillStyle = PALETTE.world.floor;
ctx.fillRect(20, 70, 48, 48);