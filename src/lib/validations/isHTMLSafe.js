"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLSafe = void 0;
const CLEAN_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const SANITIZE_PATTERN = /<(?:applet|base|embed|frame|iframe|link|meta|object|script|style|svg|xml|xss)(?![a-zA-Z])(?![^>]*)/gi;
const SCRIPT_PATTERN = /\bon[a-z]+\s*=\s*(?:(['"]).+?\1|(?:\S+?\(.*?\)(?=[\s>])))/gi;
/**
 * Rejects any values that contain dangerous HTML tags or attributes
 * @param value the value to check
 * @returns true if okay, false otherwise
 */
function isHTMLSafe(value) {
    if (typeof value !== 'string') {
        return false;
    }
    // Remove all script tags and their contents
    const cleanedValue = value.replace(CLEAN_PATTERN, '');
    // Remove all potentially dangerous tags and attributes
    const sanitizedValue = cleanedValue.replace(SANITIZE_PATTERN, '');
    // Remove any event scripts
    const cleanScriptValue = sanitizedValue.replace(SCRIPT_PATTERN, '');
    return cleanScriptValue === value;
}
exports.isHTMLSafe = isHTMLSafe;
//# sourceMappingURL=isHTMLSafe.js.map