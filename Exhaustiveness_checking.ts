type Circle = {
    kind: 'circle';
    radius: number;
  };
  
  type Square = {
    kind: 'square';
    size: number;
  };
  
  type Triangle = {
    kind: 'triangle';
    base: number;
    height: number;
  };
  
  function getArea(shape: Circle | Square | Triangle): number {
    switch (shape.kind) {
      case "square":
        return shape.size ** 2;
      case "circle":
        return Math.PI * shape.radius ** 2;
      default:
        // Если забыть добавить новый тип, TypeScript укажет здесь на ошибку
        throw new Error("Unknown shape type");
    }
  }
  
  const c:Circle = { kind: 'circle', radius: 5 };
  const s:Square = { kind: 'square', size: 4 };
  const t:Triangle = { kind: 'triangle', base: 3, height: 4 };
  
  console.log(getArea(c)); // Выведет 78.53981633974483
  console.log(getArea(s)); // Выведет 16
  console.log(getArea(t)); // Вызовет ошибку
  
  /*
   * Исчерпывающая проверка гарантирует,
   * что все возможные случаи обработаны. Это особенно полезно при работе с дискриминированными объединениями,
   *  где TypeScript может убедиться, что все варианты типа были проверены
   */