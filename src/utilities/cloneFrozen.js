"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cloneFrozen(target) {
    if (target === null || typeof target !== 'object') {
        return target;
    }
    const clone = target.constructor();
    for (const key in target) {
        const value = target[key];
        if (value && typeof value === 'object') {
            clone[key] = cloneFrozen(value);
        }
        else {
            clone[key] = value;
        }
    }
    return clone;
}
exports.default = cloneFrozen;
//# sourceMappingURL=cloneFrozen.js.map