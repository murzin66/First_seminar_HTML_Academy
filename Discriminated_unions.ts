type Square = { kind: "square"; size: number; };
type Circle = { kind: "circle"; radius: number; };

function getArea(shape: Square | Circle) {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
const s:Square ={
    kind:"square",
    size:5
}
console.log(getArea(s));
/***
 * Discriminated unions - это шаблон, 
 *который включает общее свойство (например, kind) в каждом элементе объединения, позволяющий 
 *TypeScript точно определить, к какому типу относится значение.
 */