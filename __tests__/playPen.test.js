import createPlayPen from './../src/js/playPen.js';

describe('playPen', () => {
  let playPen = createPlayPen()
  test('should create the playPen map with 4 key value pairs', () => {
    expect(playPen.get(1)).toEqual("Go to Playpen Gate");
    expect(playPen.get(2)).toEqual("Inspect the shiny thing in the corner");
    expect(playPen.get(3)).toEqual("Roll over on your back and show your tummy");
    expect(playPen.get(4)).toEqual("cars");
  });
});