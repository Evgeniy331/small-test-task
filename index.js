var Animal, Dog;

function Animal(name) {
	this.name = name;
	return this;
}

Animal.prototype.getName = function() {
	return this.name;
}

Dog = function (name) {
	Animal.apply(this, arguments);
	return this;
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.bark =  function() {
	return "Dog " + this.name + " is barking"; 
}


//Example of usage:
var dog = new Dog ('Aban');

console.log( dog.getName () === 'Aban');

console.log(dog.bark () === 'Dog Aban is barking'); 