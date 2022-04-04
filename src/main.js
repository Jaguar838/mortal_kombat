const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "Кинжал",
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: "Кинжал",
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

player1.attack();
player2.attack();

createPlayer("player1", "SCORPION", 50);
createPlayer("player2", "KITANA", 80);
