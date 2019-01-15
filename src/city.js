import { Game } from './../src/game';
import { Player } from './../src/player';

class City {
  constructor(name) {
    this.name = name;
    this.population = parseInt(Math.random() * 100);
    this.infectedPopulation = parseInt(Math.random() * 100);
    this.healthyPopulation = 100 - this.infectedPopulation;
    // stretch goal: have a random array of connected cities that is not the current city
    // this.connectionsToOtherCities = [];
    this.hasResearchStation = false;
  }

  infectCity() {
    if(this.healthyPopulation <= 100 && this.healthyPopulation >= 85 ) {
      this.infectedPopulation = parseInt(Math.random() * 100);
    } else {
      return false;
    }
  };


  buildResearchStation() {
    this.hasResearchStation = true;
  };

  // killPeople() {
  //
  // }

}

export { City };
