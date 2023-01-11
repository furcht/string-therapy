export class StringTherapy implements StringTherapyInterface {
    private value:string;

    constructor(value:string) {
        this.value = value;
    }

    /**
     * Converts your string to Camel Case format
     * @returns {string} Some String -> someString
     */
    get toCamelCase() {
        // remove spaces at ends
        let str = this.value.trim().toLowerCase();

        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '').replace("_","-");

        // find and replace all first character casing
        str = str.replace(/(?:^\w|[A-Z_]|\b\w)/g, (letter, index) => {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        })

        // remove any remaining non-word characters
        return str.replace(/(?:\W)+/g, '');
    }

    /**
     * Converts your string to Pascal Case format
     * @returns {string} Some String -> SomeString
     */
    get toPascalCase() {
        // remove spaces at ends
        let str = this.value.trim().toLowerCase();

        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d|_)+/g, '').replace("_","-");

        // find and replace all first character casing
        str = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => {
            return letter.toUpperCase();
        })

        // remove any remaining non-word characters
        return str.replace(/(?:\W|_)+/g, '');
    }

    /**
     * Converts your string to Snake Case format
     * @returns {string} Some String -> some_string
     */
    get toSnakeCase() {
        // remove spaces at ends and lower case all characters
        let str = this.value.trim().toLowerCase();

        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '');

        // convert remaining characters to "_"
        return str.replace(/\W+/g,"_");
    }

    /**
     * Converts your string to Kebab Case format
     * @returns {string} Some String -> some-string
     */
    get toKebabCase() {
        // remove spaces at ends and lower case all characters
        let str = this.value.trim().toLowerCase();

        // remove special characters or digits at beginning of string
        str = str.replace(/^(?:\W+|\d)+/g, '');

        // convert remaining characters to "-"
        return str.replace(/(?:\W|_)+/g,"-");
    }

    /**
     * Reverts a string to an english style format
     * @returns {string} Reverts string (someString -> Some string)
     */
    get toEnglish() {
        // remove spaces at ends and lower case all characters
        let str = this.value.trim().toLowerCase();

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
        })

        // replace special characters with spaces
        return str.replace(/\W|_/g, ' ');
    }
}