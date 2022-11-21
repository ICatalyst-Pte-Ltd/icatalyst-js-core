import { ValidationOptions } from 'class-validator';
export declare function IsGreaterThan(property: string, validationOptions?: ValidationOptions): (object: unknown, propertyName: string) => void;
