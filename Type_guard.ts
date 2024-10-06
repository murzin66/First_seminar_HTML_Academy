function printText(text: string | number) {
  if (typeof text === "string") {
    console.log(text.toUpperCase()); // text  имеет тип string
  } else {
    console.log(text); // text  имеет тип number
  }
}
printText('text');
printText(2);

//с помощью оператора typeof можно проверить прост простые типы (string, number, boolean, symbol) и выбрать соответствующую if-else ветвь 