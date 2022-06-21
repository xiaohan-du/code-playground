var message = 'Hello world';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
// function
var greeting = function (name) {
    return "Hi " + name;
};
console.log(greeting('ss'));
// number
var setCounter = function (max) {
    if (max === void 0) { max = 100; }
    return max;
};
console.log(setCounter(23));
var increment = function (counter) {
    return counter++;
};
var items = [1, 2, 3, 'hi'];
console.log(items);
// object
var employee = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(employee.firstName);
// array
var scores;
scores = ['Programming', 5, 4];
console.log(scores);
// tuple
var skill = ['programming', 5];
var rgb = [255, 0, 0];
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
// enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
console.log(Month[3]);
var isItSummer = function (month) {
    var isSummer;
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
};
console.log(isItSummer(Month.Apr));
// void
var log = function (message) {
    console.log(message);
};
function logm(message) {
    console.log(message);
}
// never
var raiseError = function (message) {
    throw new Error(message);
};
// union
var add = function (a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    else if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a.concat(b);
    }
    throw new Error('Wrong data type');
};
console.log(add(3, 4));
console.log(add('yes, ', 'no'));
var input;
input = 100;
input = 'yes';
// string literal
var click;
click = 'click';
// click = 'yes' // don't work
// combine with union type
var mouseEvent;
var mE;
// rest parameter
var getTotal = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
};
console.log(getTotal());
console.log(getTotal(3, 5));
console.log(getTotal(3, 5, 7));
// function overloading: if a, b both number, return number; if both string, return string
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(3, 5));
console.log(add1('yes, ', 'no'));
// function overloading with optional parameters
var sum = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
console.log(sum(3, 4, 5));
console.log(sum(2, 9));
// class
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var dave = new Person(123, 'Dave', 'Smith');
console.log(dave.getFullName());
// access modifiers and readonly
var Person1 = /** @class */ (function () {
    // getter and setter
    function Person1(ssn, firstName, lastName, birthDate) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Person1.prototype, "ssn", {
        get: function () {
            return this._ssn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "fullName", {
        // getter without setting up in constructor
        get: function () {
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var John = new Person1(123456, 'John', 'Howie', new Date(1990, 12, 15));
John.firstName = 'Dean';
console.log(John.ssn);
console.log(John.lastName);
console.log(John.firstName);
console.log(John.fullName);
// function parameter as object:
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
var person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));
var getFullName1 = function (person) {
    return person.firstName + " " + person.lastName;
};
console.log(getFullName1(person));
var jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
};
var getFullName2 = function (person) {
    if (person.middleName) {
        return person.firstName + " " + person.middleName + " " + person.lastName;
    }
    return person.firstName + " " + person.lastName;
};
console.log(getFullName2(person));
console.log(getFullName2(jane));
var person2 = {
    ssn: '123',
    firstName: 'Mike',
    lastName: 'Doe'
};
console.log(person2);
var format;
format = function (src, upper) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};
console.log(format('hi', true));
