# pandemic

#### By Scott Bergler

## Table of contents

**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Planning](#planning)**<br>
**[Installation Instructions](#setup/installation)**<br>
**[Specifications](#specifications)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

## Description


## Setup/Installation
Clone the code from [GitHub](https://github.com/skillitzimberg/pandemic).

## Resources
[ABOUTTEMPLATEJS](./ABOUTTEMPLATE.md)  

## Planning

### Objects

* Game
 - map
 - cities[]
 - citiesCured[];
 - currentPlayer

* Player
 - role
 - turn: 1 action (4 action options)
 - currentCity
 - disease (assigned randomly; true if infected; false once cured)
 - cure (has visited research station)
 - citiesCured count
 - research station building ability (if player has cured infection in enough cities)
    -- how does a  player acquire a cure? Gets to research station.
    -- what does a player know about itself? everything

* Role
- abilities: ease of curing, ease of movement

* Disease
 - infection rate/strength
 - kill rate
  -- does it spread at timed intervals?
  -- does it spread in certain conditions?

* City
 - population (if gets too low, city is wiped out)
 - infected (bool)
 - infected pop.
 - uninfected pop.
 - connections to other cities
 - has research station
  -- Can a city that has been cured be infected again? Yes.

* Turn
 - action
 * move to city (change currentCity)
 * cure city

1. Configuration/dependencies
  * This should include ALL dependencies.
  * It should also include WHERE they are defined and used in the project
  * It could include a short description of what each does for you

2. Specifications:
  * Spec 1: Do a thing:
- [ ] **Expect:**  
Input: some input;  
Output: some output;

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, Json, dotnet.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
