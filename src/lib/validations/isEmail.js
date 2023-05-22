"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
const EMAIL_PATTERN = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const EMAIL_PATTERN =
//   /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
/**
 * Determines if the value passed in is a valid email address
 * @method isEmail
 * @param  {String}   value The email to check
 * @return {Boolean}        true if valid, false otherwise
 */
const isEmail = (value) => {
    return !!EMAIL_PATTERN.test(value);
};
exports.isEmail = isEmail;
//# sourceMappingURL=isEmail.js.map