// Rewrite the following code in a way that shows the effect that hoisting has on the code:

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);


// class hoisting:

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

console.log(catImage.file);
pudding.walk();


// another way:

var Pet;
var Image;
var catImage;
var pudding;

Pet = function(name, image) {
  this.name = name;
  this.image =  image;
};

// omitted code...
