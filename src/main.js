import { Game } from './../src/game';
import { Player } from './../src/player';
import { City } from './../src/city';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let newPlayer;
let newGame;

function reloadCities() {
  $('#cities').empty();
  $('#currentCity').html(newPlayer.currentCity);
  $('#citiesCured').html(newPlayer.citiesCured);
  newGame.cities.forEach(function(city) {
    $('#cities').append(`<li id='${city.name}'>Name: ${city.name}; Population: ${city.population}; Infected Pop: ${city.infectedPopulation}%;  Research Station: ${city.hasResearchStation}</li>`);
  });
}

function cityClickListener() {
  $('ul#cities').on("click", "li", function() {
    newPlayer.moveToCity(this.id);
    console.log(newPlayer.currentCity);
    reloadCities();
  })
}

$(document).ready(function() {
  newGame = new Game();

  let request = new XMLHttpRequest();
  const url = `http://api.giphy.com/v1/gifs/search?q=space-stars&api_key=iS9al73WrT1WiMW1UUKf1LTY1OEXPCSQ`;

  request.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();

  const getElements = function(response) {
    let temp = response.data[1].embed_url;
    console.log(response.data);
    $('.gif').append(`<iframe src="${temp}" width="480" height="327" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
  }


  newGame.cityNames.forEach(function(name) {
    $('#startingCity').append(`<option value='${name}'>${name}</option>`);
  });

  $('#playGame').submit(function(event) {
    event.preventDefault();
    const startingCity = $('#startingCity').val();
    newPlayer = new Player(startingCity);
    const atlantaCDC = newGame.getCity('Atlanta');
    atlantaCDC.buildResearchStation();
    newGame.getRandomCity();

    newGame.cities.forEach(function(city) {
      $('#cities').append(`<li id='${city.name}'>Name: ${city.name}; Population: ${city.population}; Infected Pop: ${city.infectedPopulation}%;  Research Station: ${city.hasResearchStation}</li>`);
    });

    $('#currentCity').html(newPlayer.currentCity);
    $('#citiesCured').html(newPlayer.citiesCured);
  });
    cityClickListener();
});
