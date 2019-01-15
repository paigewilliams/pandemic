import { Game } from './../src/game';
import { Player } from './../src/player';
import { City } from './../src/city';

describe('Game', function(){
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should create an array of city objects', function(){
    expect(game.cities.length).toEqual(10);
    expect(game.cities[1].name).toEqual("Atlanta");
  });

  it('getCity(city) should return the correct city object', function() {
    const portland = new City('Portland');
    expect(game.getCity('Portland')).toEqual(portland);
    expect(game.getCity('Atlanta')).not.toEqual(portland);
  });



});
