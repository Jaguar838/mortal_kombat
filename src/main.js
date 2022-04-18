const $arenas = document.querySelector('.arenas')
const $buttonFight = document.querySelector('.button')
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

const ATTACK = ['head', 'body', 'foot'];

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const LOGS = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
}

/**
 * Ф-я генерирует лог чата игры
 * @param {string} type
 * @param player1
 * @param player2
 * @param {number} [damage]
 */
function generateLogs(type, player1, player2, damage) {
    const text = type.includes('start', 'draw')
        ? LOGS[type]
        : LOGS[type][getRandom(LOGS[type].length - 1)];
    const formattedTime = getTime()
    // console.log(formattedTime)
    let message = ''
    switch (type) {
        case 'start':
            message = text
                .replace('[time]', formattedTime)
                .replace('[player1]', player1.name)
                .replace('[player2]', player2.name)
            break
        case 'end':
            message = `${formattedTime} - ${text}`
                .replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name)
            break
        case 'hit':
            message = `${formattedTime} - ${text} -${damage} [${player2.hp}/100]`
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name)
            break
        case 'defence':
            message = `${formattedTime} - ${text} -${damage} [${player1.hp}/100]`
                .replace('[playerDefence]', player1.name)
                .replace('[playerKick]', player2.name)
            break
        case 'draw':
            message = `${formattedTime} - ${text}`;
            break;
        //         [time] [text] [-player.hp] [hp/100]
    }
    $chat.insertAdjacentHTML('afterbegin', `<p>${message}<p>`);
}


const player1 = {
    id: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Кинжал',
    changeHP,
    elHP,
    renderHP
};

const player2 = {
    id: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: 'Кинжал',
    changeHP,
    elHP,
    renderHP
};

/**
 * Ф-я уменьшает hp игрока на величину damage
 * @param {number} damage
 */
function changeHP(damage) {
    this.hp -= damage
    if (this.hp <= 0) {
        this.hp = 0
    }
}

/**
 * Ф-я возвращает div.life игрока
 * @returns {Element}
 */
function elHP() {
    return document.querySelector('.player' + this.id + ' .life')
}

/**
 * Рендерит div.life игрока
 */
function renderHP() {
    this.elHP().style.width = this.hp + '%'
    this.elHP().style.background = getLifeBarColor(this.hp);
}

/**
 * Ф-я изменяет цвет индикатора div.life игрока
 * @param {number} hp
 * @returns {string} colorBarLife
 */
function getLifeBarColor(hp) {
    console.log('###: ', !hp)
    switch (!!hp) {
        case hp >= 75:
            return 'green'
        case hp >= 50 && hp <= 74:
            return 'MediumSeaGreen'
        case hp >= 25 && hp <= 49:
            return 'tomato'
        default:
            return 'orange'
    }
}

/**
 * Возвращает победителя игры или ничья
 * @param {string} [name]
 */
function playerWins(name) {
    const winnerName = name ? `${name} wins` : 'draw'
    const $winsTitle = createEl('div', 'winsTitle', winnerName)
    $arenas.appendChild($winsTitle)
}

/**
 * Ф-я создает игрока на arenas HTML
 * @param objPlayer
 * @returns {HTMLElement}
 */
function createPlayer(objPlayer) {
    const $life = createEl('div', 'life')
    const $name = createEl('div', 'name', objPlayer.name)
    const $progressbar = createEl('div', 'progressbar', [$life, $name])
    const $img = createEl('img')

    $img.src = objPlayer.img
    const $character = createEl('div', 'character', [$img])

    return createEl('div', 'player' + objPlayer.id, [$progressbar, $character])
}

/**
 * Ф-я создает элемент HTML
 * @param {String} tag
 * @param {String} className
 * @param {String or Array String} content
 * @returns {HTMLElement}
 */
function createEl(tag = 'div', className, content) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    if (typeof content === 'string') {
        $tag.innerText = content
    }
    if (Array.isArray(content)) {
        content.forEach(item => $tag.appendChild(item))
    }
    return $tag
}

/**
 * Случайное число 1... n
 * @param {number} [n]
 * @returns {number|number}
 */
function getRandom(n) {
    return n ? Math.ceil(Math.random() * n) : 20
}

/**
 * Ф-я текущего времени
 * @returns {string} hh:mm:ss
 */
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const generateTimeString = (time) => {
        return time < 10 ? `0${time}` : time
    }
    return `${generateTimeString(hours)}:${generateTimeString(minutes)}:${generateTimeString(seconds)}`;
}

//Ф-я создает кнопку перезагрузки
function createReloadButton() {
    const $reloadButton = createEl('button', 'button', 'Restart')
    const $reloadWrap = createEl('div', 'reloadWrap', [$reloadButton])

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })
    $arenas.appendChild($reloadWrap)
}

/**
 * Ф-я атаки игрока
 * @param {Element} [$formFight]
 * @returns {{hit: string, defence: string, value: number}}
 */
function playerAttack($formFight) {
    const attack = {
        value: 0,
        hit: '',
        defence: ''
    }
    if ($formFight) {
        for (let item of $formFight) {
            if (item.checked && item.name === 'hit') {
                attack.value = getRandom(HIT[item.value])
                attack.hit = item.value
            }
            if (item.checked && item.name === 'defence') {
                attack.defence = item.value
            }
            // сброс radio-button
            item.checked = false
        }
    }
    return attack
}

/**
 * Ф-я атаки противника(ПК)
 * @returns {{hit: (string), defence: (string), value: number}}
 */
function enemyAttack() {
    const length = ATTACK.length
    let hit = ATTACK[getRandom(length) - 1]
    let defence = ATTACK[getRandom(length) - 1]
    // console.log('###: hit',hit)
    // console.log('###: defence',defence)
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

//  определяем победителя
function showResult() {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        playerWins(player2.name)
        generateLogs('end', player2, player1)
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        playerWins(player1.name)
        generateLogs('end', player1, player2)
    } else if (player1.hp === 0 && player2.hp === 0) {
        playerWins()
        generateLogs('draw', player1, player2)
    }
}

// создаем игроков
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs('start', player1, player2);
// логика игры
$formFight.addEventListener('submit', function (e) {
    e.preventDefault()

    const player = playerAttack($formFight)
    const enemy = enemyAttack()

    console.log('###: p', player)
    console.log('###: e', enemy)
    let damagePlayer1 = 0
    let damagePlayer2 = 0
    if (player.hit !== enemy.defence) {
        damagePlayer2 = player.value
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player1, player2, damagePlayer2)
    } else {
        generateLogs('defence', player1, player2, damagePlayer2)
    }

    if (enemy.hit !== player.defence) {
        damagePlayer1 = enemy.value
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit', player2, player1, damagePlayer1)
    } else {
        generateLogs('defence', player2, player1, damagePlayer1)
    }

// отключаем кнопку после game over
    if (player1.hp === 0 || player2.hp === 0) {
        $buttonFight.disabled = true
        createReloadButton()
    }

// Результат игры
    showResult()
})