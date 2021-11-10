import Puppy from './../src/js/puppy.js';

describe('Puppy', () => {
  let newPuppy;

  beforeEach(() => {
    newPuppy = new Puppy("Milo", 10, 10, 0);
  });

  test('should correctly create a puppy object with name, cuteness points, energy points, and affection points', () => {
    expect(newPuppy.name).toEqual("Milo");
    expect(newPuppy.cutenessPoints).toEqual(10);
    expect(newPuppy.energyPoints).toEqual(10);
    expect(newPuppy.affectionPoints).toEqual(0);
  });

  test('should subtract 2 from the cutenessPoints value', () => {
    newPuppy.puppyScratch();
    expect(newPuppy.cutenessPoints).toEqual(8);
  });

  test('should add 3 to the energyPoints value', () => {
    newPuppy.eatTreat();
    expect(newPuppy.energyPoints).toEqual(13);
  });
  
  test('should add 3 to the cutenessPoints value', () => {
    newPuppy.puppyEyes();
    expect(newPuppy.cutenessPoints).toEqual(13)
  });
  
  test('should add a psudo random number between 1 and up to and including 4 to the affectionPoints value', () => {
    newPuppy.affectionAction();
    expect(newPuppy.affectionPoints).toBeLessThanOrEqual(4);
    expect(newPuppy.affectionPoints).toBeGreaterThanOrEqual(1);
  });

  test('should subtract 2 from the engergyPoints value', () => {
    newPuppy.playWithToy();
    expect(newPuppy.energyPoints).toEqual(8);
  });
});