let message: string = 'Hello world';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

// function
const greeting = (name: string): string => {
  return `Hi ${name}`;
}

console.log(greeting('ss'));

// number
const setCounter = (max: number = 100) => {
  return max;
}

console.log(setCounter(23));

const increment = (counter: number) => {
  return counter++;
}

let items: (number | string)[] = [1, 2, 3, 'hi'];

console.log(items);

// object
let employee: {
  firstName: string,
  lastName: string
} = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log(employee.firstName);

// array
let scores: (string | number)[];
scores = ['Programming', 5, 4];

console.log(scores);

// tuple
let skill: [String, number] = ['programming', 5];

let rgb: [number, number, number] = [255, 0, 0];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// enum
enum Month {
  Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
};

console.log(Month[3]);

const isItSummer = (month: Month) => {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Apr));

// void
const log = (message: string): void => {
  console.log(message);
}

function logm(message: string): void {
  console.log(message);
}

// never
const raiseError = (message: string) => {
  throw new Error(message);
}

// union
const add = (a: number | string, b: number | string): number | string => {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    return a + b;
  }
  else if (typeof (a) === 'string' && typeof (b) === 'string') {
    return a.concat(b);
  }
  throw new Error('Wrong data type');
}

console.log(add(3, 4));
console.log(add('yes, ', 'no'));

// type alias
type Alphanumeric = string | number;
let input: Alphanumeric;
input = 100;
input = 'yes';

// string literal
let click: 'click';
click = 'click';
// click = 'yes' // don't work
// combine with union type
let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
// combine with type alias
type ME = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
let mE: ME;

// rest parameter
const getTotal = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach((num: number) => total += num);
  return total;
}

console.log(getTotal());
console.log(getTotal(3, 5));
console.log(getTotal(3, 5, 7));

// function overloading: if a, b both number, return number; if both string, return string
const add1: {
  (a: number, b: number): number;
  (a: string, b: string): string;
} = (a: any, b: any): any => {
  return a + b;
}

console.log(add1(3, 5));
console.log(add1('yes, ', 'no'));

// function overloading with optional parameters
const sum = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
}

console.log(sum(3, 4, 5));
console.log(sum(2, 9));

// class
class Person {
  ssn: number;
  firstName: string;
  lastName: string;

  constructor(ssn: number, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

let dave = new Person(123, 'Dave', 'Smith');

console.log(dave.getFullName());

// access modifiers and readonly
class Person1 {
  private _ssn: number;
  private _firstName: string;
  private _lastName: string;
  private readonly birthDate: Date;
// getter and setter
  constructor(ssn: number, firstName: string, lastName: string, birthDate: Date) {
    this._ssn = ssn;
    this._firstName = firstName;
    this._lastName = lastName;
    this.birthDate = birthDate;
  }

  public get ssn(): number {
    return this._ssn;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }
  // getter without setting up in constructor
  public get fullName(): string {
    return this._firstName + ' ' + this._lastName;
  }
}

const John = new Person1(123456, 'John', 'Howie', new Date(1990, 12, 15));
John.firstName = 'Dean';
console.log(John.ssn);
console.log(John.lastName);
console.log(John.firstName);
console.log(John.fullName);

// function parameter as object:
function getFullName(person: {
  firstName: string;
  lastName: string
}) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(getFullName(person));

// interface
interface IPerson {
  firstName: string;
  lastName: string;
}

const getFullName1 = (person: IPerson): string => {
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName1(person));

let jane = {
  firstName: 'Jane',
  middleName: 'K.',
  lastName: 'Doe',
  age: 22
};

// interface: optional property
interface IPerson1 {
  firstName: string;
  middleName?: string;
  lastName: string;
}

const getFullName2 = (person: IPerson1): string => {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName2(person));
console.log(getFullName2(jane));

// interface: readonly property
interface IPerson2 {
  readonly ssn: string;
  firstName: string;
  lastName: string; 
}

let person2: IPerson2 = {
  ssn: '123',
  firstName: 'Mike',
  lastName: 'Doe'
}

console.log(person2);

// interface: function types
interface IStringFormat {
  (str: string, isUpper: boolean): string
}

let format: IStringFormat;

format = (src: string, upper: boolean) => {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
}

console.log(format('hi', true));
