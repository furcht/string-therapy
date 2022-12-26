import ST from "./index.d";
export declare class StringTherapy extends String implements ST {
    private value;
    constructor(value: string);
    /**
     * Converts your string to Camel Case format
     * @returns {string} Some String -> someString
     */
    get toCamelCase(): string;
    /**
     * Converts your string to Pascal Case format
     * @returns {string} Some String -> SomeString
     */
    get toPascalCase(): string;
    /**
     * Converts your string to Snake Case format
     * @returns {string} Some String -> some_string
     */
    get toSnakeCase(): string;
    /**
     * Converts your string to Kebab Case format
     * @returns {string} Some String -> some-string
     */
    get toKebabCase(): string;
    /**
     * Reverts a string to an english style format
     * @returns {string} Reverts string (someString -> Some string)
     */
    get toEnglish(): string;
}
export default function Init(str: string): StringTherapy;
