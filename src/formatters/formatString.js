"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = void 0;
function formatString(str, ...parameters) {
    return str.replace(/\\?{(\d+)}/g, (match, number) => {
        if (match.startsWith('\\')) {
            return match.substring(1);
        }
        return parameters[number] !== undefined && parameters[number] !== null ? parameters[number].toString() : '';
    });
}
exports.formatString = formatString;
//# sourceMappingURL=formatString.js.map