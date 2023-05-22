"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = void 0;
function formatNumber(number) {
    if (number < 1000) {
        return number.toString();
    }
    const suffixes = ['', 'k', 'M', 'B', 'T', 'Q', 'Qi', 'S', 'Sp'];
    const suffixNum = Math.floor(Math.log10(number) / 3);
    const shortValue = number / Math.pow(1000, suffixNum);
    if (shortValue % 1 !== 0) {
        return shortValue.toFixed(1) + suffixes[suffixNum];
    }
    else {
        return shortValue.toFixed(0) + suffixes[suffixNum];
    }
}
exports.formatNumber = formatNumber;
//# sourceMappingURL=formatNumber.js.map