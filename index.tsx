const add = (a: number, b: number) => {
    return a + b
}

console.log(add(2, 3));


type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
