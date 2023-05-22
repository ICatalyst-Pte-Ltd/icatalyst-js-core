"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.PASSWORD_PATTERN = void 0;
exports.PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const isValidPassword = (value) => {
    return !!exports.PASSWORD_PATTERN.test(value);
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=isValidPassword.js.map