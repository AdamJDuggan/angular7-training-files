
// JS-ES5 fundamentals
//variables, arrays, objects and functions


console.log('Angular');
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Variables
//in JS you have 5 simple types of primative values: number, string, boolean, null, undefined
//case sensitive language. Always stick to lowercase except Class names.
var city = "Brighton";
//Weakly typed language. Now use Typescript whcih would not allow this change.
city = -45;
console.log('city');
var project = null; //null. Not yet.
var town; //undefined

//test if the var file exists
if(typeof == "undefined"){
  console.log("Variable FILM does not exist");
}

//SCOPE
//ES5 globally scoped variable. Avoid global scope.
//Window is the global name space in a browser.
var film = "Taxi Driver";

//copy by value: strings and numbers
//make seperate independant copies when you assign them to diff values.

//Block scope
for (var j = 0; j < 10; j++){
  console.log(j);
}
//this will still work but shouldnt!
console.log(j);

// //HOISTING: browser has a just-in-time compiler (JIT). It moves
// variables and funciton declarations top top of containing scope.
//Good practice to write functions and vars at top.



// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Arrays
var basket = [];
basket.push('bread');
basket.push('beans');

//this does not work with IE
var trolley = Object.assign([], basket);
trolley.pop();



// singleton-like
var films = ['jaws'];
var movies = ['jaws'];

// two pointers to same (which we want to avoid);
var films = ['jaws'];
var movies = films;

// avoid assumptions about positions meaning things
var person =

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Objects
//objects are mutable. You can change their state.
var summer = {
  city: 'vancouver',
  year: 2020;
};

var winter = {
  city: 'orlando',
  year: 2021
};

summer.hotel = "Stanley";
console.log(summer);

//nested array.
summer.friend = {name: 'jack', age: 64};

delete.summer.friend.age;

//I want to create a sentance that write out info about a holiday.
function describe(h){
  var sentance = "I am going to " +
  h.city + " in " + h.year;
  console.log(sentance);
}
describe(summer);


//an array containing two Objects. Very useful. Good structure to work with.
var holidays = [summer, winter];

//creates a useful table in console
console.table(holidays);

//describr each holiday. Run describe on each object
holidays.forEach(describe);

summer.getFriend = function(){
  return this.friend.name + "is" + this.friend.age + "years old";
}

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Functions

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var double = (x => x *2);

//will asign result to last answer of n (ie 16 if last console.log of doubleBad(8))
function doubleBad(n){
  result = n*2;
  return result;
}
//will work ok
function doubleBad(n){
  var result = n*2;
  return result;
}
