"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRTL = void 0;
const isoLanguages_1 = require("./isoLanguages");
const getLanguageCodeFromString_1 = require("./getLanguageCodeFromString");
function isRTL(code) {
    if (!code) {
        return false;
    }
    const normalisedCode = (0, getLanguageCodeFromString_1.getLanguageCodeFromString)(code);
    return normalisedCode ? isoLanguages_1.isoRTLList.includes(normalisedCode) : false;
}
exports.isRTL = isRTL;
//# sourceMappingURL=isRTL.js.map