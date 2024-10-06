function example(x, y) {
    if (x === y) {
        // Ветка отрабатывает при равенстве как параметров , так и их типов
        console.log(x.toLowerCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        //(parameter) x: string | number
        console.log(y);
        //(parameter) y: string | boolean
    }
}
example('TEXT1', 'TEXT1');
example('TEXT1', 'TEXT2');
