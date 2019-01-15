import { City } from './../src/city';

class Game {
  constructor(){
    this.cities = [];
    this.cityNames = ["Portland", "Atlanta", "Babol", "Ahmedabad", "Tokyo", "Moscow", "Makassar", "Shenyang", "Birmingham", "Bogota"];
    for(let i = 0; i < this.cityNames.length; i++){
      let city = new City(this.cityNames[i]);
      this.cities.push(city);
    }
  };

  setCityConnections() {
    for(let i = 0; i < this.cities.length; i++) {
      this.cities[i].connectionsToOtherCities.push(this.cities[i].name);
    }
  };

  getCity(city) {
    for(let i = 0; i < this.cities.length; i++) {
      if(this.cities[i].name === city) {
        return this.cities[i];
      }
      // return false;
    }
  }

  getRandomCity() {
    setInterval(() => {
      let healthyCities = [];
      for (let i = 0; i < this.cities.length; i++) {
        if (this.cities[i].infectedPopulation >= 0 && this.cities[i].infectedPopulation <= 15) {
          healthyCities.push(this.cities[i]);
        }
      }
      let randomInt = Math.floor(Math.random() * Math.floor(healthyCities.length));
      let randomCity = this.getCity(healthyCities[randomInt].name);
      randomCity.infectCity();
    }, 30000);
  };

  cureCity(city){
    let foundCity = this.getCity(city);
    foundCity.infectedPopulation = 0;
    return foundCity;
  };
}

export { Game };
