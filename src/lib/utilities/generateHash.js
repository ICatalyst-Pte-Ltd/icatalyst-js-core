"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateHash(string) {
    let hash = 0;
    if (string.length === 0)
        return '';
    for (let i = 0; i < string.length; i++) {
        const chr = string.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}
exports.default = generateHash;
//# sourceMappingURL=generateHash.js.map