"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBytes = void 0;
/**
 * Converts the number of bytes passed in to a human readable format
 * @method formatBytes
 * @param  {[type]}    bytes        The number of bytes
 * @param  {Number}    [decimals=2] The maximum number of decimal places
 * @return {[type]}                 The human readable format
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
exports.formatBytes = formatBytes;
//# sourceMappingURL=formatBytes.js.map