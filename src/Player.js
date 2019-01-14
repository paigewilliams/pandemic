class Player {
  constructor() {
    this.role = new Role();
    this.turn;
    this.currentCity;
    this.disease = false;
    this.cure = false;
    this.citiesCured = 0;

  }

  getMessage() {
    return this.message;
  }
}

export { Player };
