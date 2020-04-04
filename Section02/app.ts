// Number
const add = (n1: number, n2: number, showRes: boolean, phrase: string) =>
  showRes ? console.log(`${phrase}${n1 + n2}`) : n1 + n2;

const num1 = 5;
const num2 = 3.8;
const printRes = true;
const resPhrase = "Result is: ";

console.log("Print res");
add(num1, num2, printRes, resPhrase);
console.log("Don't print res");
add(num1, num2, !printRes, "");

// Good practise
let futureNumber: number;
futureNumber = 6;
// futureNumber = '6'; //ERROR
console.log("Print res with new number");
add(num1, futureNumber, printRes, resPhrase);

// Objects
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Tomek",
  age: 29,
  hobbies: ["Snooker", "Football"],
};

console.log(person.name);

// Arrays
let favouriteActivities: string[];
favouriteActivities = ["Cooking"];
// favouriteActivities = ['Cooking', 2] // ERROR

let anyFavouriteActivities: any[];
anyFavouriteActivities = ["Cooking", 2];

console.log("Hobbies------");
person.hobbies.forEach((hobby) => console.log(hobby.toUpperCase()));

// Tuple - fixed length array

// without type
const role = [2, "author"];
role.push("admin");
role[1] = 10;

let role2: [number, string] = [2, "author"];
// role2[1] = 10; // ERROR
role2.push("admin"); // IT WORKS!!
// role2 = [2, 'author', 'test2'] ERROR

// ENUM - Only in TS

enum Club {
  REAL, // 0
  WISLA, // 1
  JUVENTUS, // 2
}

enum Club_higher_number {
  REAL = 5,
  WISLA, // 6
  JUVENTUS, // 7
}

enum Club_totally_custom {
  REAL = "x",
  WISLA = "y",
  JUVENTUS = "z",
}

console.log("Clubs--------------");
const newPerson1 = {
  name: "Tomek",
  age: 29,
  club: Club.WISLA,
};

const newPerson2 = {
  name: "Jozek",
  age: 27,
  club: Club.JUVENTUS,
};

if (newPerson1.club === Club.WISLA || newPerson2.club === Club.WISLA) {
  console.log("Ave Wisła");
}
if (newPerson1.club === Club.JUVENTUS || newPerson2.club === Club.JUVENTUS) {
  console.log("Juve!!");
}

// Union type
type NumberOrString = number | string; // type alias/custom types

console.log("Union type----------------");
const combine = (
  i1: number | string,
  i2: NumberOrString,
  additionalInfo: Club | string | number,
  status: "warning" | "info" // literal type
) => {
  if (typeof i1 === "number" && typeof i2 === "number") {
    console.log(`Number! ${additionalInfo} ${i1 + i2}`);
  } else if (typeof i1 === "string" && typeof i2 === "string") {
    console.log(`String! ${additionalInfo} ${i1 + i2}`);
  }
};

combine(30, 60, Club.REAL, "warning");
combine("30", "60", "custom text", "info");
// combine("30", "60", "custom text", 'xx'); // no such type as "xx"

// return type
console.log("return type------------");
const strictAdd = (n1: number, n2: number): number => n1 + n2;

const printResult = (n1: number): void => console.log("Result: " + n1);

console.log(strictAdd(4, 2));
console.log(printResult(5));

// IMPORTANT!
let someUndefined: undefined; // undefined is valid type is TS, but when function doesn't have return statement it's void...

const printResultAndReturnUndefined = (n1: number): undefined => {
  console.log("Result: " + n1);
  return;
};

console.log(printResultAndReturnUndefined(8));

// Function types
console.log("Function types---------------------------");
let someFunction: () => number; //any function with no params and returns number
let someAddFunction: (a: number, b: number) => number; //any function with two number params and returns number
someAddFunction = strictAdd;
// someAddFunction = 5 ERROR
// someAddFunction = printResult; ERROR when detiled function type defined
console.log(someAddFunction(6, 2));

const addWithCallback = (n1: number, n2: number, cb: (n: number) => void) => {
  const res = n1 + n2;
  cb(res);
};

addWithCallback(5, 10, printResult);

// Unknown and never types
let userInput: unknown;
let userString: string;
let userAny: any;

userInput = 5;
userInput = "666";
userAny = true;

// userString = userInput ERROR
if (typeof userInput === "string") {
  userString = userInput;
}

userString = userAny;

const generateError = (msg: string, code: number): never => {
  throw { message: msg, errorCode: code };
};

const resultFromErrorFun = generateError("test msg", 105);
