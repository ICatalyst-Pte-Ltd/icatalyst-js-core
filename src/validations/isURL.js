"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isURL = void 0;
const URI_PATTERN = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z\\d-]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\(\\)\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
/**
 * Determines if the URL passed in is a valid url
 * @method isValidURI
 * @param  {String}   value The URL to check
 * @return {Boolean}        true if valid, false otherwise
 */
const isURL = (value) => {
    return !!URI_PATTERN.test(value);
};
exports.isURL = isURL;
//# sourceMappingURL=isURL.js.map