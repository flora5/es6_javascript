

function Car(make){
	this.make = make;
	this.currentSpeed = 25;

	this.printCurrentSpeed = function(){
		console.log(this.make + 'is going' + this.currentSpeed + 'mph');
	} 
}

// Instantiate a new car

var newCar = new Car('Kia');
newCar.printCurrentSpeed();

// class key word

class Car {
	constructor(make){
		this.make = make;
		this.currentSpeed = 25;
	}

	printCurrentSpeed(){
		console.log(this.make + )
	}
}

class RaceCar extends Car{
	constructor(make, topSpeed){//inheritance
		super(make);// call the parent constructor with super
		this.topSpeed = topSpeed;
	}
	goFast(){
		this.currentSpeed = this.topSpeed;
	}
}

let stang = new RaceCar('Mustang', 150);
stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();