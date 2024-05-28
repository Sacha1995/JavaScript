// Create a javascript file which shows an example of the following key javascript syntax
// 1.In a series of variables store:
// a.        A string
// b.        A number
// c.        A Boolean

let name = "Sacha"; //a string
let age = 29; //number
let female = true; //boolean

// 2. Add two numbers
let pricePlane = 300;
let priceHotel = 200;
let priceHoliday = pricePlane + priceHotel;

console.log(priceHoliday);

priceHoliday += 100; //price of taxes
console.log(priceHoliday);

// 3. Concatenate two string
let animal = "dog";

console.log(`My favourite animal is a ${animal}!`);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(firstName + ` ` + lastName);

// 4. Create an IF statement which checks if a variable matches another variable, if so it should console log a message and if not a different message
let priceDress = 19;

if (priceDress < 30) {
  console.log(`Let's buy it!`);
} else {
  console.log(`It is too expensive...`);
}

// 5. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails
if (priceDress < 10) {
  console.log(`The quality is probably bad`);
} else if (priceDress < 20) {
  console.log(`What a deal!`);
} else if (priceDress < 40) {
  console.log(`Let's buy it!`);
} else {
  console.log(`It is too expensive...`);
}

// 6. Extend one of the IF statements to check if two things are true, if so show a message (think &&)
let lightGreen = true;
let carStopped = false;

if (lightGreen && carStopped) {
  console.log(`You can cross the street`);
} else {
  console.log(`You have to wait`);
}

// 7. Create a FOR loop that shows a message 10 times
for (var i = 0; i < 10; i++) {
  console.log(i + ` sheep`);
}

// 8. Create a switch statement that acts similar to the IF statement at q4 to q6
let favouriteFlavour = "sweet";

switch (favouriteFlavour) {
  case "sweet":
    console.log(`Here is a donut`);
    break;
  case "sour":
    console.log(`Here is a lemon`);
    break;
  case "salty":
    console.log(`Here is a pretzel`);
    break;
  default:
    console.log(`Everyone likes straweberries`);
    break;
}
