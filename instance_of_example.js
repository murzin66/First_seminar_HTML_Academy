function logValue(x) {
    if (x instanceof Date) { //(parameter) x: Date
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase()); //(parameter) x: string
    }
}
logValue(new Date(2011, 0, 1, 2, 3, 4, 567));
logValue('Date');
