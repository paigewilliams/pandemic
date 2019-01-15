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
    for(let i = 0; i < this.cities.length; i++){
      let randomOne = Math.floor(Math.random() * Math.floor(this.cities.length));
      // this.cities[i].cityConnections();
      for(let j = 0; j <= randomOne; j++) {
        let randomTwo = Math.floor(Math.random() * Math.floor(this.cities.length));

        this.cities[i].connectionsToOtherCities.push(this.cityNames[randomTwo]);

      }
      // let cityConnections = () => {
      //   let cityConnectionsByPolulation = parseInt(this.cities[i].population / 100 * 3);
      //   for(let i = 0; i <= cityConnectionsByPolulation; i++) {
      //   }
      // }
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
