import { City } from './../src/city';

class Game {
  constructor(){
    this.cities = [];
    this.cityNames = ["Portland", "Atlanta", "Babol", "Ahmedabad", "Tokyo", "Moscow", "Makassar", "Shenyang", "Birmingham", "Bogota"];
    for(let i = 0; i < this.cityNames.length; i++){
      let city = new City(this.cityNames[i]);
      this.cities.push(city);
    }
  }

  setCityConnections() {

    for(let i = 0; i < this.cities.length; i++) {

      this.cities[i].connectionsToOtherCities.push(this.cities[i].name);
    }
  }
  
  getCity(city) {
    for(let i = 0; i <= this.cities.length; i++) {
      if(this.cities[i].name === city) {
        return this.cities[i];
      } else {
        return false;
      }
    }
  }




}

export { Game };
