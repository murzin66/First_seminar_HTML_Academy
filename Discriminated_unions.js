function getArea(shape) {
    switch (shape.kind) {
        case "square":
            return Math.pow(shape.size, 2);
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
    }
}
var s = {
    kind: "square",
    size: 5
};
console.log(getArea(s));
/***
 * Discriminated unions - это шаблон,
 *который включает общее свойство (например, kind) в каждом элементе объединения, позволяющий
 *TypeScript точно определить, к какому типу относится значение.
 */ 
