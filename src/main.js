
const $arenas = document.querySelector('.arenas')

const player1 = {
  id: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Кинжал',
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  id: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: 'Кинжал',
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

function createPlayer(objPlayer) {
  const $player = createEl('div', 'player'+objPlayer.id) // create tag div and add class player

  const  $progressbar = createEl('div','progressbar')
  $player.appendChild($progressbar)

  const  $life = createEl('div','life')
  $progressbar.appendChild($life)

  const  $name = createEl('div','name')
  $name.innerText = objPlayer.name
  $progressbar.appendChild($name)

  const  $character = createEl('div','character')
  $player.appendChild($character)

  const $img = createEl('img')
  $img.src = objPlayer.img
  $character.appendChild($img)

  return $player
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

player1.attack();
player2.attack();


function createEl(tag, className) {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className)
  }

  return $tag
}

