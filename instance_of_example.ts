function logValue(x: Date | string) {

  if (x instanceof Date) {  //(parameter) x: Date
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());  //(parameter) x: string
  }
}

logValue( new Date(2011, 0, 1, 2, 3, 4, 567));

logValue('Date')

//В данном примере выполнение ветки в оответствии с типом, который проверяется за счет оператора instanceof - проверка является ли один объект экземпляром другого