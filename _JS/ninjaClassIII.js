// Assignment: Ninja Class III
// Part I: Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following attributes:
//     name
//     health
//     speed
//     strength
// Speed and strength should be 3 by default. Health should be 100 by default. Do not worry about private variables.
// The Ninja class should have the following methods:
//     sayName() - This should log that Ninja's name to the console.
//     showStats() - This should show the Ninja's Strength and Speed, as well as their health.
//     drinkSake() - This should add +10 Health to the Ninja

// New ES6 way
// parent Ninja class
class Ninja{
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log("Hello! My ninja name is " + this.name );
    }
    showStats() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Strength: " + this.strength + ", Speed: "+ this.speed );
        }
    drinkSake() {
        this.health += 10;
    }
}
// Create new instance
const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
// -> "My ninja name is Hyabusa!"

ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

//chain methods to drink sake and see the change in health
ninja1.drinkSake();
ninja1.showStats();
// -> "Name: Hayabusa, Health: 110, Speed: 3, Strength: 3"


// Part II - Sensei Class: Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


// child Sensei class
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, strength, speed);
        this.wisdom = wisdom;
    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        super.drinkSake();
        console.log("When estimating a project effort, always double the effort you think it will take.");
    }
}

// create instance of child class, have it speak wisdom and show its stats
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "<wise saying here>"
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"