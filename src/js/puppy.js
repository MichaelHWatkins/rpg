export default class Puppy {
  
  constructor(name, cutenessPoints, energyPoints, affectionPoints) {
    this.name = name;
    this.cutenessPoints = 10;
    this.energyPoints = 10;
    this.affectionPoints = 0; 
  }

  puppyScratch() {
    this.cutenessPoints -= 2;
  }

  eatTreat() {
    this.energyPoints += 3;
  }

  puppyEyes() {
    this.cutenessPoints += 3;
  }

  affectionAction() {
    this.affectionPoints += Math.floor(Math.random() * 4 ) + 1;
  }
}