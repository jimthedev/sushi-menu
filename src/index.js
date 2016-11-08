
console.log(this);
this.name = 'Sushi Go'; // Global, window.


/* Ways that 'this' gets set:

- Global scope (in browser window, in node: global)
- Object
- new / Constructor
- apply / call / bind
*/

function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var sushiGo = {
  name: 'Sushi Go!',
  menu: {
    beverages: {
      describe: function describeBeverage() {
        for(beverage in this) {
          if (!isFunction(this[beverage])) {
            console.log(beverage);
          };
        }
      },
      jumai: {
        describe: function() {
          console.log(this); // <<< ?
        },
        price: 10,
        oz: 6
      },
      nigori: {
        price: 8,
        oz: 4
      },
      sogu: {
        price: 5,
        oz: 3
      }
    },
    rolls: {
      california: {
        price: 16
      },
      aac: {
        price: 5
      },
      spider: {
        price: 16
      },
      spicyDragon: {
        price: 14
      },
      lasVegas: {
        price: 22
      },
      spicyTuna: {
        price: 14
      }
    },
    nigiri: {
      salmon: {
        price: 20
      },
      halibut: {
        price: 18
      },
      walleye: {
        price: 12
      }
    },
    desserts: {
      mochi: {
        price: 7
      },
      tempuraIceCream: {
        price: 6
      }
    }
  }
};

function menuSections(restaurant) {
  // ...
  var sections = [];
  // for (key in array)
  for(key in restaurant.menu) {
    sections.push(key);
  }
  return sections;
}

function restaurantName(restaurant) {
  return restaurant.name;
}

// console.log(menuSections(sushiGo)); // ['beverages', 'rolls', 'nigiri', 'desserts']
// console.log(restaurantName(sushiGo));
// sushiGo.sayName();
// sushiGo.menu.beverages.jumai.describe();
// sushiGo.menu.beverages.describe();



//
// function greeting() {
//   if( this instanceof Dog) {
//     console.log('woof', this);
//   } else {
//     console.log('hello ' + this.name);
//   }
// }
//
// // Characters, archetypes
// function Person() {
// }
//
// function Dog() {
// }
//
// function Apple() {
// }
//
//
// // Define the behavior of these objects in the world
// // abilities
// Person.prototype.name = 'homo sapien';
// Person.prototype.greet = greeting;
// Dog.prototype.greet = greeting;
//
// // Create specific instances of the object that exist in the world
// var bob = new Person();
//
// // Tell the specific instance to perform a certain behavior
//
// bob.greet();
//
// var fluffy = new Dog();
// fluffy.greet();
//
// var apple = new Apple();
//
// console.log();






function Hero() {

}
Hero.prototype.getHealth = function() {
  console.log(this.health);
}

function Sidekick() {

}

function Villain() {

}

function NPC() {

}

function LovedOne() {

}

function Law() {
}

function AmbiguousAlien() {
}

// Create characters
var ajaxHenderson = new Hero();
ajaxHenderson.firstName = "Ajax";
ajaxHenderson.lastName = "Henderson";

var windexSmith = new Villain();
windexSmith.firstName = "Windex";
windexSmith.lastName = "Smith";

var lysolJames = new LovedOne();
lysolJames.firstName = "Lysol";
lysolJames.lastName = "James";

var pinesolSamson = new Law();
pinesolSamson.firstName = "Pinesol";
pinesolSamson.lastName = "Samson";

// Game 1
var currentlyAlive = [
  ajaxHenderson,
  windexSmith,
  lysolJames,
  pinesolSamson
].map(function(character) {
  console.log(character.prototype);
  var healthyCharacter = Object.assign(new character.constructor(), character); // copy all of the properties from character to some new object, then return that object.
  healthyCharacter['health'] = 100 // set the health on the character
  return healthyCharacter; // return the character, who now has health of 100.
}).sort(function(a, b) {
  return a.lastName > b.lastName;
});

var swifferDuster = new Sidekick();
var formula409 = new AmbiguousAlien();

// Game 2
var halfDead = [
  ajaxHenderson,
  windexSmith,
  swifferDuster,
  formula409
].map(function(character) {
  console.log(character.prototype);
  var healthyCharacter = Object.assign(new character.constructor(), character); // copy all of the properties from character to some new object, then return that object.
  healthyCharacter['health'] = 50 // set the health on the character
  return healthyCharacter; // return the character, who now has health of 100.
}).sort(function(a, b) {
  return a.lastName < b.lastName;
});

console.log(currentlyAlive[0].getHealth());
console.log(halfDead[1].getHealth());


function printSpeed(flagColor, raceTrack) {
  console.log('track:', raceTrack);
  console.log('flag color', flagColor);
  console.log('printing speed: ', this.speed);
}

var car = {
  speed: 50,
  fuelLevel: 25
}

// The car is in a race where there is a yellow flag flying.
// It is going 20mph.

// car will be set to 'this' inside of printSpeed
// printSpeed.apply(car, ['yellow', 'Talledega']);
//
// //
// printSpeed.call(car, 'green', 'Daytona');



var marysKitchen = {
  potatoes: 4,
  onions: 3,
  garlic: 2,
  carrots: 5,
  chops: 2
}

var josesKitchen = {
  potatoes: 5,
  onions: 4,
  garlic: 3,
  carrots: 7,
  chops: 8
}


function makeStew(liquid, seasoning) {
  console.log('Using 1 of each item in kitchen');
  console.log(this);
}


var marysRecipe = makeStew.bind(marysKitchen, ['broth', 'herbs']);

var josesRecipe = makeStew.bind(josesKitchen, ['broth', 'rub']);

// NEITHER RECIPE HAS ACTUALLY BEEN COOKED YET.
marysRecipe();

josesRecipe(); // Cooks Jose's recipe, use his kitchen.
