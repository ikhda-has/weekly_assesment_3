class Avatar {
    constructor(name) {
      this.name = name;
    }
    // greet parent
    // this method is called when the child class does not have method
    greet() {
      return `Hello ${this.name}, good morning`;
    }
  }
  
  class Korra extends Avatar {
    constructor(name, power) {
      super(name);
      this.power = power;
    }
    // method of greet child
      greet() {
        return `Hello, good morning ${this.name}`;
      }
    // method of skill child
    skill(){
        return `${this.name} is ${this.power}`
    }
  }
  
  const Ava = new Korra("Korra", "Avatar of 3 elements");
  console.log(Ava.greet());
  console.log(Ava.skill());
