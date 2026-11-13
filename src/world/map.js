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

export const MAP_WIDTH = LAYOUT[0].length * TILE_SIZE;
export const MAP_HEIGHT = LAYOUT.length * TILE_SIZE;

export function drawMap(ctx, camera, showGrid) {
    const size = showGrid ? TILE_SIZE - 1 : TILE_SIZE;

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

            const screenX = col * TILE_SIZE - camera.x;
            const screenY = row * TILE_SIZE - camera.y;
            ctx.fillRect(screenX, screenY, size, size);
        }
    }
}