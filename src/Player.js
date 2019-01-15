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

  }

  moveToCity(city) {
    this.currentCity = city;

  }

  citiesCuredIncrease() {
    this.citiesCured++;
  }

  // buildResearchStation() {
  //   if(this.citiesCured >= 3){
  //     const city = game.getCity(this.currentCity);
  //     city.hasResearchStation = true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

}

export { Player };
