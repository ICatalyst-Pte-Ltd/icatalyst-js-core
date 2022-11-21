"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreferredLanguage = void 0;
function getPreferredLanguage() {
    return Intl.DateTimeFormat().resolvedOptions().locale;
}
exports.getPreferredLanguage = getPreferredLanguage;
//# sourceMappingURL=getPreferredLanguage.js.map