// Assignment: Ninja Class II
// Complete the below challenges using the Ninja Class from the previous assignment. You may skip the functionality related to private variables.
// .punch()
// Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.
// const blueNinja = new Ninja("Goemon");
// const redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.
// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"

// Validations: Update .punch() and .kick() so that they only accept Instances of the Ninja class. Hint: You will need to find a way to check the constructor of an instance. 


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
// .punch()
// Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

Ninja.prototype.punch = function(punchee) {
    if (punchee instanceof Ninja) {
        punchee.health -= 5;
        console.log( punchee.name + " was punched by " + this.name + " and lost 5 Health!");
    } else {
        console.log("Not a Ninja")
    }   
    return this;
};

// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.
Ninja.prototype.kick = function(kickee) {
    if (kickee instanceof Ninja) {
        kickee.health -= 15;
        console.log( kickee.name + " was kicked by " + this.name + " and lost 15 Health!");
    } else {
        console.log("Not a Ninja")
    }   
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

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
blueNinja.showStats();
redNinja.showStats();
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.showStats();
redNinja.showStats();

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
redNinja.showStats();

//test validation for punch()
var car = {};
redNinja.punch(car);