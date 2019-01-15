import { Game } from './../src/game';
import { City } from './../src/city';
import { Player } from './../src/player';

describe('Player', function() {
  let game;
  let newPlayer;

  beforeEach(function() {
    game = new Game();
    newPlayer = new Player('Atlanta');
  })

  it('constructor should return a new player', function() {

    expect(newPlayer.currentCity).toEqual('Atlanta');
    newPlayer.moveToCity('Portland');
    expect(newPlayer.currentCity).toEqual('Portland');
  });

  it('cureCity() should change infectedPopulation to 0', function() {

    newPlayer.citiesCuredIncrease();
    const playerCurrentCity = newPlayer.currentCity
    let currentCity = game.cureCity(playerCurrentCity);
    expect(currentCity.infectedPopulation).toEqual(0);
  })


});
