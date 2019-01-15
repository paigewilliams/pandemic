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
    expect(game.getCity('Portland').name).toEqual(portland.name);
    expect(game.getCity('Atlanta').name).not.toEqual(portland.name);
  });

  it('infectCity() should create an infected population to a city', function() {
    game.getRandomCity();
    expect(game.cities[0].healthyPopulation).not.toEqual(0);
  });

  it('getRandomCity() should return a random city', function() {
    game.getRandomCity();
    expect(game.cities[0].healthyPopulation).toEqual(6);
  });

});
