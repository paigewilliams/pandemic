import { Game } from './../src/game';
import { Player } from './../src/player';
import { City } from './../src/city';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const newGame = new Game();
  newGame.cityNames.forEach(function(name) {
    $('#startingCity').append(`<option value='${name}'>${name}</option>`);
  });

  $('#playGame').submit(function(event) {
    event.preventDefault();
    const startingCity = $('#startingCity').val();
    const newPlayer = new Player(startingCity);
    const atlantaCDC = newGame.getCity('Atlanta');
    atlantaCDC.buildResearchStation();
    newGame.getRandomCity();
    newGame.cities.forEach(function(city) {
      $('#cities').append(`<li>Name: ${city.name}; Population: ${city.population}; Infected Pop: ${city.infectedPopulation}%;  Research Station: ${city.hasResearchStation}</li>`);
    });
  });

});
