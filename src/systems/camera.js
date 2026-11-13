export const camera = {
    x: 0,
    y: 0,
    speed: 8
};

export function centerCamera(viewWidth, viewHeight, worldWidth, worldHeight) {
    camera.x = Math.round((worldWidth - viewWidth) / 2);
    camera.y = Math.round((worldHeight - viewHeight) / 2);
}

export function updateCamera(keys) {
    if (keys["KeyW"] || keys["ArrowUp"]) camera.y -= camera.speed;
    if (keys["KeyS"] || keys["ArrowDown"]) camera.y += camera.speed;
    if (keys["KeyA"] || keys["ArrowLeft"]) camera.x -= camera.speed;
    if (keys["KeyD"] || keys["ArrowRight"]) camera.x += camera.speed;
}