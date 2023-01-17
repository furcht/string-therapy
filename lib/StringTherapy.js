"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StringTherapy_value;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTherapy = void 0;
class StringTherapy {
    constructor(value) {
        _StringTherapy_value.set(this, void 0);
        __classPrivateFieldSet(this, _StringTherapy_value, value, "f");
    }
    /**
     * Converts your string to Camel Case format
     * @returns {string} Some String -> someString
     */
    get toCamelCase() {
        // remove spaces at ends
        let str = __classPrivateFieldGet(this, _StringTherapy_value, "f").trim().toLowerCase();
        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '').replace("_", "-");
        // find and replace all first character casing
        str = str.replace(/(?:^\w|[A-Z_]|\b\w)/g, (letter, index) => {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        });
        // remove any remaining non-word characters
        return str.replace(/(?:\W)+/g, '');
    }
    /**
     * Converts your string to Pascal Case format
     * @returns {string} Some String -> SomeString
     */
    get toPascalCase() {
        // remove spaces at ends
        let str = __classPrivateFieldGet(this, _StringTherapy_value, "f").trim().toLowerCase();
        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d|_)+/g, '').replace("_", "-");
        // find and replace all first character casing
        str = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => {
            return letter.toUpperCase();
        });
        // remove any remaining non-word characters
        return str.replace(/(?:\W|_)+/g, '');
    }
    /**
     * Converts your string to Snake Case format
     * @returns {string} Some String -> some_string
     */
    get toSnakeCase() {
        // remove spaces at ends and lower case all characters
        let str = __classPrivateFieldGet(this, _StringTherapy_value, "f").trim().toLowerCase();
        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '');
        // convert remaining characters to "_"
        return str.replace(/\W+/g, "_");
    }
    /**
     * Converts your string to Kebab Case format
     * @returns {string} Some String -> some-string
     */
    get toKebabCase() {
        // remove spaces at ends and lower case all characters
        let str = __classPrivateFieldGet(this, _StringTherapy_value, "f").trim().toLowerCase();
        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '');
        // convert remaining characters to "-"
        return str.replace(/(?:\W|_)+/g, "-");
    }
    /**
     * Reverts a string to an english style format
     * @returns {string} Reverts string (someString -> Some string)
     */
    get toEnglish() {
        // remove spaces at ends and lower case all characters
        let str = __classPrivateFieldGet(this, _StringTherapy_value, "f").trim().toLowerCase();
        // remove special characters at beginning or end of string
        str = str.replace(/^(?:\W+|_)+|(?:\W+)+$/g, '');
        str = str.replace(/\d[a-zA-Z]/g, (group, index) => {
            let splitted = group.split("");
            splitted.push(splitted[1]);
            splitted[1] = " ";
            return splitted.join('');
        });
        str = str.replace(/^\w/, (letter) => {
            return letter.toUpperCase();
        });
        // replace special characters with spaces
        return str.replace(/\W|_/g, ' ');
    }
}
exports.StringTherapy = StringTherapy;
_StringTherapy_value = new WeakMap();
