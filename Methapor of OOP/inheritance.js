// this is super class (Tonraq and Senna is Korra's Parents)
class Parents {
    constructor(name, eyes, skin) {
        this.name = name;
        this.eyes = eyes;
        this.skin = skin;
    }
    // this is method from superclass
    introduce(){
        console.log(`This is example of inheritance :`);
    }

}

// this child-class or sub-class(Korra)
class Korra extends Parents {
    constructor(name, eyes, skin, power) {
        super(name, eyes, skin)
        this.power = power;
    }

    // this method inherits from parents
    introduce(){
        // sign by code blow there are super methods from parents
        super.introduce();
        console.log(`Korra Inherits ${this.eyes} of her mother and the ${this.skin} color of her father. She also have her own characteristics, she has power as an ${this.power} `);
    }

}
let Avatar = new Korra("Korra", "Blue", "Brown", "Avatar of 3 elements");
Avatar.introduce()