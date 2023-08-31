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
