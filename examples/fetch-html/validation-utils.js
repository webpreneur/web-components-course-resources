export class ValidationUtils {
    static isString(value) {
        return typeof value === 'string';
    }
    static isObject(value) {
        return value instanceof Object;
    }
}