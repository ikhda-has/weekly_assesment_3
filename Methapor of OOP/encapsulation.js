function Avatar(Korra) {
    const powerr = 1000;
    this.Givpower = function () {
      return Korra * 1000;
    };
    this.Skill = function () {
      return this.Givpower() + powerr;
    };
  }
  
  const Ava = new Avatar(5);
  Ava.powerr = 1000;
  console.log("Korra Have Power :");
  console.log(Ava.Skill());