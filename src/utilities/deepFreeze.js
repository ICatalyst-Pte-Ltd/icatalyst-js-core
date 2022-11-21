"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepFreeze(target) {
    if (!target) {
        return target;
    }
    if (Array.isArray(target)) {
        return target.map((v) => deepFreeze(v));
    }
    const propNames = Object.getOwnPropertyNames(target);
    for (const name of propNames) {
        const value = target[name];
        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    }
    return Object.freeze(target);
}
exports.default = deepFreeze;
//# sourceMappingURL=deepFreeze.js.map