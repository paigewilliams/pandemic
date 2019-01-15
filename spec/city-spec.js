import { Game } from './../src/game';
import { Player } from './../src/player';
import { City } from './../src/city';

describe('City', function() {
  let game;
  let city;

  beforeEach(function() {
   game = new Game();
  })

  it('this.population, this.infectedPopulation and this.healthyPopulation should be a random number', function() {
    city = new City("Orlando");
    expect(city.population).toBeTruthy(0);
    expect(city.infectedPopulation).toBeTruthy(0);
    expect(city.healthyPopulation).toBeTruthy(0);
  });

  it('cityConnections() should test if city has connections', function(){
    debugger;
    game.setCityConnections()
    expect(game.cities[0].connectionsToOtherCities.length).toBeGreaterThan(0);
  })
});
