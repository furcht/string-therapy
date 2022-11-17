import StringInterface from "./index.d";
export default class StringTherapy extends String implements StringInterface {
    private value;
    constructor(value: string);
    /**
     * Converts your string to Camel Case format
     * @returns {string} Some String -> someString
     */
    toCamelCase(): string;
    /**
     * Converts your string to Pascal Case format
     * @returns {string} Some String -> SomeString
     */
    toPascalCase(): string;
    /**
     * Converts your string to Snake Case format
     * @returns {string} Some String -> some_string
     */
    toSnakeCase(): string;
    /**
     * Converts your string to Kebab Case format
     * @returns {string} Some String -> some-string
     */
    toKebabCase(): string;
    /**
     * Reverts a string to an english style format
     * @returns {string} Reverts string (someString -> Some string)
     */
    toEnglish(): string;
}
