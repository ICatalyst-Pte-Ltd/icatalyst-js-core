"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripHtml(htmlString) {
    const replacements = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&nbsp;': ' ',
    };
    return htmlString.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;|&nbsp;|<([^>]+)>)/gi, function (matched) {
        const coercedKey = matched;
        return replacements[coercedKey] || '';
    });
}
exports.default = stripHtml;
//# sourceMappingURL=stripHTML.js.map