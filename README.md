# String Therapy #
Yeah, the name is a play on "string theory" but the goal of this package is to provide some support to convert our strings we use in our code to a more friendly form that plays nice when used as keys and ID's.

## The Rundown ##
If you been developing for any amount of time, you'll understand that strings come from all directions. Be it from a user when they submit a form, parsing a document or simply sorting files. In many cases we might want to use these strings as an ID or key and thats where "String Therapy" comes in. This package has got the common case formatting that we tend to use plus a feature to revert the string to an "english" format, either way I hope you find it useful to some degree.

## Usage ##
Install it into your app first, of course!
```
npm i string-therapy
```
Next up, just add it into your project and use away!
```
//-- slap this package into your project
const st = require("string-therapy");
//-or-//
import st from "string-therapy";

//-- initiate it with your string
let newString = st("Your New string");

//-- call a method to tame that fella
newString.toCamelCase; //- outputs: yourNewString
/* Other methods defined below */
```

## The Deets ##
### toCamelCase ###
Converts your string to Camel Case format, possibly the most common format in Javascript.
```
const st = require("string-therapy");
let newString = st("Some String");
newString.toCamelCase; //- Outputs: someString
```
### toPascalCase ###
Converts your string to Pascal Case format, used often for class naming and templates.
```
const st = require("string-therapy");
let newString = st("Some String");
newString.toPascalCase; //- Outputs: SomeString
```
### toKebabCase ###
Converts your string to Kebab Case format, used often in CSS.
```
const st = require("string-therapy");
let newString = st("Some String");
newString.toKebabCase; //- Outputs: some-string
```
### toSnakeCase ###
Converts your string to Snake Case format, often found for ID's and DB related keys.
```
const st = require("string-therapy");
let newString = st("Some String");
newString.toCamelCase; //- Outputs: some_string
```
### toEnglish ###
Not actually english but you get the gist, it's supposed to convert your already code friendly strings to "english" format with spaces and all.
```
const st = require("string-therapy");
let newString = st("camelCaseString");
newString.toEnglish; //- Outputs: Camel case string
```

### Log ###
- 2.1.0 - Corrected "import"
- 2.0.0 - Using "getter" methods to help make things simpler
- 1.0.0 - Support for digits at end of string and corrected issue detecting an underscore (_) in conversions
- 0.1.0 - Declaration file for "import" support
- 0.0.2 - README added
- 0.0.1 - First Publish