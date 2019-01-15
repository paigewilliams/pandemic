import { Player } from './../src/player';

describe('Player', function() {
  it('constructor should return a new player', function() {
    let newPlayer = new Player('Atlanta');
    expect(newPlayer.currentCity).toEqual('Atlanta');
    newPlayer.moveToCity('Portland');
    expect(newPlayer.currentCity).toEqual('Portland');
  });


});
