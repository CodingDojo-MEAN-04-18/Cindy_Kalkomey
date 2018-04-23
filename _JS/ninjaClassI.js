// Assignment: Ninja Class
// Create a new class called Ninja with the following attributes:
//     name
//     health
//     speed (private)
//     strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.
// The Ninja class should have the following methods:
//     sayName() - This should log that Ninja's name to the console.
//     showStats() - This should show the Ninja's Strength and Speed, as well as their health.
//     drinkSake() - This should add +10 Health to the Ninja
// Example Outputs:
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

// Define the class
function Ninja(name, health=100) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = health;

    // 'Getter' functions to help us read private variables
    this.getSpeed = function() {
        return speed;
    };
    this.getStrength = function() {
        return strength;
    };
}

// Attach class methods using .prototype
Ninja.prototype.sayName = function() {
    console.log("Hello! My ninja name is " + this.name );
    return this;
};
Ninja.prototype.showStats = function() {
    privStrength = this.getStrength();
    privSpeed = this.getSpeed(); 
    console.log("Name: " + this.name + ", Health: " + this.health + ", Strength: " + privStrength + ", Speed: "+ privSpeed );
    return this;
};
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};

// Create new instance
const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
// -> "My ninja name is Hyabusa!"

ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

//chain methods to drink sake and see the change in health
ninja1.drinkSake().showStats();
// -> "Name: Hayabusa, Health: 110, Speed: 3, Strength: 3"