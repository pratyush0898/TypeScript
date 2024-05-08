// TypeScript has additional features compared to JavaScript.

// JavaScript types
let sales: number = 123_456_789; // Using underscores for readability in big numbers
let numberCount: 123_456_789; // Corrected to specify the type as 'number'
let course: string = "TypeScript";
let Language: "TypeScript"; // Corrected to specify the type as 'string'
let isLearned: boolean = false;
let isActive: true; // Corrected to specify the type as 'boolean'

// TypeScript Types
let level: any; // When no type is specified, it defaults to 'any'

// Changing the 'any' type
level = 1;
level = "first";
level = true;
level; // The value of 'level' will be 'true' at this point

// Function with 'any' type parameter
const render = (document: any /* specify the type of 'document' as 'any' or 'boolean' to avoid 'noImplicitAny' error */) => {
    console.log(document);
}

// Function with specified types
const greetings = (userName: string, isSpanish: boolean) => {
    console.log("isSpanish:", isSpanish); // Add this line for debugging

    if (isSpanish) {
        console.log("Hola, " + userName);
    } else {
        console.log("Hello, " + userName);
    }
}

greetings("Pratyush", true);
greetings("Pratyush", false);

