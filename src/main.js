const $arenas = document.querySelector('.arenas')

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Кинжал',
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: 'Кинжал',
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

function createPlayer(playerNumber, objPlayer) {
  const $player = document.createElement('div') // create tag div
  $player.classList.add(playerNumber) // add class player

  const  $progressbar = document.createElement('div')
  $progressbar.classList.add('progressbar')
  $player.appendChild($progressbar)

  const  $life = document.createElement('div')
  $life.classList.add('life')
  $progressbar.appendChild($life)

  const  $name = document.createElement('div')
  $name.classList.add('name')
  $name.innerText = objPlayer.name
  $progressbar.appendChild($name)

  const  $character = document.createElement('div')
  $character.classList.add('character')
  $player.appendChild($character)

  const $img = document.createElement('img')
  $img.src = objPlayer.img
  $character.appendChild($img)

  $arenas.appendChild($player)
}

createPlayer('player1', player1);
createPlayer('player2', player2);

player1.attack();
player2.attack();


// <div class='player1'>
//     <div class='progressbar'>
//         <div class='life'></div>
//         <div class='name'>SCORPION</div>
//     </div>
//     <div class='character'>
//         <img src='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif' />
//     </div>
// </div>