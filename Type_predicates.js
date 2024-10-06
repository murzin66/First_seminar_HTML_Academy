function isString(test) {
    return typeof test === "string";
}
function printText(text) {
    if (isString(text)) {
        console.log(text.toUpperCase());
    }
}
printText("Test");
// Type predicates - использование специальных функций, позволяющих понять какой тип имеет переменная, такой функцией является isString,
// предикат - test is string
