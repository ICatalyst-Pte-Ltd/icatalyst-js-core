"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsHTMLSafe = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const isHTMLSafe_1 = require("../../validations/isHTMLSafe");
let IsHTMLSafeConstraint = class IsHTMLSafeConstraint {
    validate(value, args) {
        return value !== null && value !== undefined && (0, isHTMLSafe_1.isHTMLSafe)(value);
    }
    defaultMessage(args) {
        return `The '${args.property}' property cannot contain script tags, potentially dangerous tags, or attributes like 'onload' or 'onerror'`;
    }
};
IsHTMLSafeConstraint = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsHTMLSafeConstraint);
function IsHTMLSafe() {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            validator: IsHTMLSafeConstraint,
        });
    };
}
exports.IsHTMLSafe = IsHTMLSafe;
//# sourceMappingURL=is-html-safe.validator.js.map