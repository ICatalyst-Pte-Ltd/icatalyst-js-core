"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageCodeFromString = void 0;
const isoLanguages_1 = require("./isoLanguages");
function getLanguageCodeFromString(code) {
    if (!code) {
        return null;
    }
    // First check long form
    if (isoLanguages_1.languages[code.toLowerCase()]) {
        return code.toLowerCase();
    }
    const normalisedCode = code.replace(/[^A-Za-z].+$/, '').toLowerCase();
    return normalisedCode && isoLanguages_1.languages[normalisedCode] ? normalisedCode : null;
}
exports.getLanguageCodeFromString = getLanguageCodeFromString;
//# sourceMappingURL=getLanguageCodeFromString.js.map