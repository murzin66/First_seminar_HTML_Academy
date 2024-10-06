function getArea(shape) {
    switch (shape.kind) {
        case "square":
            return Math.pow(shape.size, 2);
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        default:
            // Если забыть добавить новый тип, TypeScript укажет здесь на ошибку
            throw new Error("Unknown shape type");
    }
}
var c = { kind: 'circle', radius: 5 };
var s = { kind: 'square', size: 4 };
var t = { kind: 'triangle', base: 3, height: 4 };
console.log(getArea(c)); // Выведет 78.53981633974483
console.log(getArea(s)); // Выведет 16
console.log(getArea(t)); // Вызовет ошибку
/*
 * Исчерпывающая проверка гарантирует,
 * что все возможные случаи обработаны. Это особенно полезно при работе с дискриминированными объединениями,
 *  где TypeScript может убедиться, что все варианты типа были проверены
 */ 
