function Avatar(Korra) {
    let powerr = 500; // var, cannot be accessed from outside
    const Givpower = function () {
      // var, cannot be accessed from outside
      return Korra * 1000;
    };
    this.Skill = () => {
      // var, cannot be accessed from outside
      return Givpower() + powerr;
    };
    this.totalSkill = () => {
      // instance, can be accessed from outside
      return this.Skill();
    };
  }
  const Ava = new Avatar(5);
  console.log(Ava);
 Ava.powerr = -1000;
  console.log(Ava.totalSkill());