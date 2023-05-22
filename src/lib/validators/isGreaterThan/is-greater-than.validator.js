"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsGreaterThan = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsGreaterThanConstraint = class IsGreaterThanConstraint {
    validate(value, args) {
        const compareField = this.getComparator(args);
        if (compareField && (0, class_validator_1.isDefined)(value)) {
            return value > args.object[compareField];
        }
        // By default if the comparison field is not defined, then success
        return !compareField;
    }
    defaultMessage(args) {
        return `${args.property} must be greater than ${this.getComparator(args)}`;
    }
    getComparator(args) {
        return args.constraints.filter((prop) => (0, class_validator_1.isDefined)(args.object[prop]))[0];
    }
};
IsGreaterThanConstraint = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsGreaterThanConstraint);
function IsGreaterThan(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsGreaterThanConstraint,
        });
    };
}
exports.IsGreaterThan = IsGreaterThan;
//# sourceMappingURL=is-greater-than.validator.js.map