import Puppy from './../src/js/puppy.js';

describe('Puppy', () => {

  test('should correctly create a puppy object with name, cuteness points, energy points, and affection points', () => {
    const newPuppy = new Puppy("Milo", 10, 10, 0);
    expect(newPuppy.name).toEqual("Milo");
    expect(newPuppy.cutenessPoints).toEqual(10);
    expect(newPuppy.energyPoints).toEqual(10);
    expect(newPuppy.affectionPoints).toEqual(0)
  });
});