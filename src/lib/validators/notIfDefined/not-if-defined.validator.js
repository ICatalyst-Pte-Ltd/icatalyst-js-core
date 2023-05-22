"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotIfDefined = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let NotIfDefinedConstraint = class NotIfDefinedConstraint {
    validate(value, args) {
        if ((0, class_validator_1.isDefined)(value)) {
            return this.getRestrictedFields(args).length === 0;
        }
        return true;
    }
    defaultMessage(args) {
        return `${args.property} cannot be specified if [${this.getRestrictedFields(args).join(', ')}] is specified`;
    }
    getRestrictedFields(args) {
        return args.constraints.filter((prop) => (0, class_validator_1.isDefined)(args.object[prop]));
    }
};
NotIfDefinedConstraint = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], NotIfDefinedConstraint);
/**
 * Determines if a property should be validated based on the presence of the specified properties.
 * If none of the properties are specified the decorator will indicate that this should be validated
 * If any of the properties are specified the decorator will indicate that validation for this property
 * should be skipped
 * @param props the properties to check for existence
 * @returns the decorator function
 */
function validateIfNotPresent(props) {
    return function (object, propertyName) {
        return Boolean((0, class_validator_1.isDefined)(propertyName) ||
            props.every((prop) => !(0, class_validator_1.isDefined)(object[prop])));
    };
}
/**
 * Determines if any of the specified properties exist on the decorated object
 * @param props the properties to check for non existence
 * @param validationOptions
 * @returns the decorator function
 */
function IsNotPresent(props, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: props,
            validator: NotIfDefinedConstraint,
        });
    };
}
/**
 * Used to decorate a DTO property where a property should not be specified if other properties are
 * also specified
 * @param props the properties that the decorated property cannot exist alongside
 * @param validationOptions
 * @returns the decorator function
 */
function NotIfDefined(props, validationOptions) {
    const notPresent = IsNotPresent(props);
    const validateIf = (0, class_validator_1.ValidateIf)(validateIfNotPresent(props));
    return function (object, propertyName) {
        notPresent(object, propertyName);
        validateIf(object, propertyName);
    };
}
exports.NotIfDefined = NotIfDefined;
//# sourceMappingURL=not-if-defined.validator.js.map