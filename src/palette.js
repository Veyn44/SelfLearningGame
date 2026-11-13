const SWATCHES = {
    deepVoid: "#0b0e14",
    asteroidHull: "#151b26",
    steelSlate: "#2a3447",
    starlightWhite: "#e2e8f0",
    cosmicDust: "#7f8ea3",
    neonCyan: "#00f5d4",
    laserCrimson: "#b81d3a",
    laserGlow: "#ff1e42"
};

export const PALETTE = {
    ui: {
        background: SWATCHES.deepVoid,
        panel: SWATCHES.asteroidHull,
        border: SWATCHES.steelSlate,
        textPrimary: SWATCHES.starlightWhite,
        textSecondary: SWATCHES.cosmicDust,
        accent: SWATCHES.neonCyan,
        frame: SWATCHES.laserCrimson,
        frameGlow: SWATCHES.laserGlow
    },
    world: {
        void: SWATCHES.deepVoid,
        floor: SWATCHES.asteroidHull,
        wall: SWATCHES.steelSlate
    }
};