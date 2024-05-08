let sales = 123456789;
let numberCount;
let course = "TypeScript";
let Language;
let isLearned = false;
let isActive;
let level;
level = 1;
level = "first";
level = true;
level;
const render = (document) => {
    console.log(document);
};
const greetings = (userName, isSpanish) => {
    console.log("isSpanish:", isSpanish);
    if (isSpanish) {
        console.log("Hola, " + userName);
    } else {
        console.log("Hello, " + userName);
    }
};
greetings("Pratyush", true);
greetings("Pratyush", false);
