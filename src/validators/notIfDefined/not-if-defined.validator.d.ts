import { ValidationOptions } from 'class-validator';
/**
 * Used to decorate a DTO property where a property should not be specified if other properties are
 * also specified
 * @param props the properties that the decorated property cannot exist alongside
 * @param validationOptions
 * @returns the decorator function
 */
export declare function NotIfDefined(props: string[], validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
