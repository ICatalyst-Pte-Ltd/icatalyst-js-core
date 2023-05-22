"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CryptoJS = tslib_1.__importStar(require("crypto-js"));
function base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
}
exports.default = base64url;
//# sourceMappingURL=base64url.js.map