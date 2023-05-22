"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsName = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const validations_1 = require("../../validations");
let IsNameConstraint = class IsNameConstraint {
    validate(value, args) {
        return value !== null && value !== undefined && (0, validations_1.isName)(value);
    }
    defaultMessage(args) {
        return `The '${args.property}' property only allows spaces, underscores, and hyphens, and must start and end with a letter or number`;
    }
};
IsNameConstraint = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsNameConstraint);
function IsName() {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            validator: IsNameConstraint,
        });
    };
}
exports.IsName = IsName;
//# sourceMappingURL=is-name.validator.js.map