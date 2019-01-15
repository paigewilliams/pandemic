import { Game } from './../src/game';
import { City } from './../src/city';

class Player {
  constructor(city) {
    // this.role = new Role();
    this.turn;
    this.currentCity = city;
    this.disease = false;
    this.cure = false;
    this.citiesCured = 0;
  };

  moveToCity(city) {
    this.currentCity = city;

  };

  citiesCuredIncrease() {
    this.citiesCured++;
  };

}

export { Player };
