const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
    id: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Кинжал',
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    attack: attack
};

const player2 = {
    id: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: 'Кинжал',
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    attack: attack
};

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

$randomButton.addEventListener('click', function () {
    console.log('###: Click Random Button')

    player1.changeHP(getRandom(20))
    player2.changeHP(getRandom(20))

    player1.renderHP()
    player2.renderHP()

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true
        $arenas.appendChild(createReloadButton())

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

function attack() {
    console.log(this.name + ' Fight...');
}

function changeHP(damage) {
    this.hp -= damage
    if (this.hp <= 0) {
        this.hp = 0
    }
}

function elHP() {
    return document.querySelector('.player' + this.id + ' .life')
}

function renderHP() {
    this.elHP().style.width = this.hp + '%'
}

function playerWins(name) {
    const $winsTitle = createEl('div', 'winsTitle')
    if (name) {
        $winsTitle.innerText = name + ' wins'
    } else {
        $winsTitle.innerText = 'draw'
    }

    return $winsTitle
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

function createReloadButton() {
    const $reloadWrap = createEl('div', 'reloadWrap')
    const $reloadButton = createEl('button', 'button')
    $reloadButton.innerText = 'Restart'
    $reloadWrap.appendChild($reloadButton)
    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })
    return $reloadWrap
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

