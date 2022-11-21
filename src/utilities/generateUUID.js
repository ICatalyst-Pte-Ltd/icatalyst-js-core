"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a random uuid.
 *
 * This should not be used for stored uuids as it is
 * intentionally fast over collision resistant.
 *
 * Generally this should be used to generate a temporary state
 */
function generateUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
exports.default = generateUUID;
//# sourceMappingURL=generateUUID.js.map