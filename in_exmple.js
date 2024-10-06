function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else if ("fly" in animal) {
        animal.fly();
    }
}
var f = {
    swim: function () { return console.log("Fish swims"); }
};
var b = {
    fly: function () { return console.log("Bird does not swim"); }
};
move(f);
move(b);
//in используется для проверки является ли  "swim" свойством объекта имеющего тип Fish|Bird
