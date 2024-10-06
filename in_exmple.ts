type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) { 
    animal.swim(); 
  } else if ("fly" in animal) { 
    animal.fly();
  }
}

const f: Fish = {
  swim: () => console.log("Fish swims")
};

const b: Bird = {
  fly: () => console.log("Bird does not swim")
};

move(f); 
move(b); 
//in используется для проверки является ли  "swim" свойством объекта имеющего тип Fish|Bird