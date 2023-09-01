// Inherit Behaviors from a Supertype

// a supertype called Animal that defined shared behaviours of all animals

function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};

// one way to inherit would be to use the new keyword
let animals = new Animal();

// but this has some complications and to avoid those we can use another way or avoid its disadvantages
let animal = Object.create(Animal.prototype);

// Object.create(obj), creates a new object, and sets obj as the new object prototype

// By setting the prototype of animal to be the prototype of Animal,
// you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat();
animal instanceof Animal;
// The instanceof method here would return true.

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

//  Set the Child's Prototype to an Instance of the Parent

// set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);

// Remember that the prototype is like the "recipe" for creating an object.
// In a way, the recipe for Bird now includes all the key "ingredients" from Animal

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagleOne = new Dog();

// beagle inherits all of Animal's properties, including the eat method.

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// Reset an Inherited Constructor Property

// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duckOne = new Bird();
duck.constructor;

// But duck and all instances of Bird should show that they were constructed by Bird and not Animal.
// To do so, you can manually set the constructor property of Bird to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor;

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

// so to show that all the instances were constructed from Bird and Dog and not animal we do this

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

duck.constructor;
beagle.constructor;

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// Add Methods After Inheritance

// For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects.
// Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function () {
  console.log("I'm flying!");
};

let duckTwo = new Bird();
duckTwo.eat();
duckTwo.fly();

// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
//  Then add a bark() method to the Dog object so that beagle can both eat() and bark().
// The bark() method should print Woof! to the console.

function AnimalTwo() {}
AnimalTwo.prototype.eat = function () {
  console.log('nom nom nom');
};

function DogTwo() {}

// Only change code below this line

DogTwo.prototype = Object.create(AnimalTwo.prototype); //inherit from the animal function
DogTwo.prototype.constructor = DogTwo; // set the constructor to the dog function and not the supertype animal function
DogTwo.prototype.bark = function () {
  console.log('Woof!');
};

let beagleTwo = new Dog();

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// Use a Mixin to Add Common Behavior Between Unrelated Objects

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log('Flying, wooosh!');
  };
};

// The flyMixin takes any object and gives it the fly method.

let bird = {
  name: 'Donald',
  numLegs: 2,
};

let plane = {
  model: '777',
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);

// bird and plane are passed into flyMixin, which then assigns the fly function to each object.
// Now bird and plane can both fly:
bird.fly();
plane.fly(); //The console would display the string Flying, wooosh! twice, once for each .fly() call.

// the mixin allows for the same fly method to be reused by unrelated objects bird and plane.
