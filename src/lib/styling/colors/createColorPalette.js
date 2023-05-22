"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColorPalette = void 0;
const tslib_1 = require("tslib");
const _tinycolor_1 = require("../../../libs/@tinycolor");
const createColorSwatch_1 = require("./createColorSwatch");
function createColorPalette(_a) {
    var { primary, secondary, warning = '#ed6c02', error = '#d32f2f', success = '#2e7d32', info = '#0288d1', tint = 75, background = undefined } = _a, rest = tslib_1.__rest(_a, ["primary", "secondary", "warning", "error", "success", "info", "tint", "background"]);
    const custom = Object.keys(rest || {}).reduce((acc, key) => {
        const colour = rest[key];
        acc[key] = (0, createColorSwatch_1.createColorSwatch)((0, _tinycolor_1.tinycolor)(colour).toHex8String());
        return acc;
    }, {});
    const severityTint = Math.min(10, 100 - tint);
    return Object.assign({ primary: (0, createColorSwatch_1.createColorSwatch)(primary), secondary: (0, createColorSwatch_1.createColorSwatch)(secondary), warning: (0, createColorSwatch_1.createColorSwatch)((0, _tinycolor_1.tinycolor)(warning).mix(primary, severityTint).toHex8String()), error: (0, createColorSwatch_1.createColorSwatch)((0, _tinycolor_1.tinycolor)(error).mix(primary, severityTint).toHex8String()), success: (0, createColorSwatch_1.createColorSwatch)((0, _tinycolor_1.tinycolor)(success).mix(primary, severityTint).toHex8String()), info: (0, createColorSwatch_1.createColorSwatch)((0, _tinycolor_1.tinycolor)(info).mix(primary, severityTint).toHex8String()), background: background
            ? {
                paper: background === null || background === void 0 ? void 0 : background.paper,
                default: background === null || background === void 0 ? void 0 : background.default,
            }
            : undefined }, custom);
}
exports.createColorPalette = createColorPalette;
//# sourceMappingURL=createColorPalette.js.map