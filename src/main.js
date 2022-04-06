const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

$randomButton.addEventListener('click', function () {
    console.log('###: Click Random Button')
    changeHP(player1)
    changeHP(player2)

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name))
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name))
    } else if (player1.hp ===0 && player2.hp===0) {
        $arenas.appendChild(playerWins())
    }
})

player1.attack();
player2.attack();


function changeHP(objPlayer) {
    const $playerLife = document.querySelector('.player' + objPlayer.id + ' .life')
    objPlayer.hp -= getRandom(20)

    if (objPlayer.hp <= 0) {
        objPlayer.hp = 0
    }
    console.log('###: ', objPlayer.hp)
    $playerLife.style.width = objPlayer.hp + '%'
}

function playerWins(name) {
    const $loseTitle = createEl('div', 'loseTitle')
    if (name) {
        $loseTitle.innerText = name + ' wins'
    } else {
        $loseTitle.innerText = 'draw'
    }

    return $loseTitle
}

function createPlayer(objPlayer) {
    const $player = createEl('div', 'player' + objPlayer.id) // create tag div and add class player

    const $progressbar = createEl('div', 'progressbar')
    $player.appendChild($progressbar)

    const $life = createEl('div', 'life')
    $progressbar.appendChild($life)

    const $name = createEl('div', 'name')
    $name.innerText = objPlayer.name
    $progressbar.appendChild($name)

    const $character = createEl('div', 'character')
    $player.appendChild($character)

    const $img = createEl('img')
    $img.src = objPlayer.img
    $character.appendChild($img)

    return $player
}

function createEl(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }

    return $tag
}

function getRandom(n) {
    return Math.ceil(Math.random() * n)
}

