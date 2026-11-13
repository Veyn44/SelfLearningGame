import { PALETTE } from '../palette.js';

export const TILE_SIZE = 48;

// 0 = prázdný vesmír (void), 1 = podlaha (floor), 2 = stěna (wall)
const LAYOUT = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

export function drawMap(ctx) {
    for (let row = 0; row < LAYOUT.length; row++) {
        for (let col = 0; col < LAYOUT[row].length; col++) {
            const tile = LAYOUT[row][col];

            if (tile === 1) {
                ctx.fillStyle = PALETTE.world.floor;
            } else if (tile === 2) {
                ctx.fillStyle = PALETTE.world.wall;
            } else {
                continue;
            }

            ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}