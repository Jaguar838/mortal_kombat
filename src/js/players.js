import {ATTACK, HIT, LOGS} from "./constants.js";
import {createEl, getRandom, getTime} from "./utils.js";
import {$arenas, $chat} from "./refsDOM.js";

/**
 * Ф-я генерирует лог чата игры
 * @param {string} type
 * @param player1
 * @param player2
 * @param {number} [damage]
 */
export function generateLogs(type, player1, player2, damage) {
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


export const player1 = {
    id: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Кинжал',
    changeHP,
    elHP,
    renderHP
};

export const player2 = {
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
export function createPlayer(objPlayer) {
    const $life = createEl('div', 'life')
    const $name = createEl('div', 'name', objPlayer.name)
    const $progressbar = createEl('div', 'progressbar', [$life, $name])
    const $img = createEl('img')

    $img.src = objPlayer.img
    const $character = createEl('div', 'character', [$img])

    return createEl('div', 'player' + objPlayer.id, [$progressbar, $character])
}

/**
 * Ф-я атаки игрока
 * @param {Element} [$formFight]
 * @returns {{hit: string, defence: string, value: number}}
 */
export function playerAttack($formFight) {
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
export function enemyAttack() {
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
export function showResult() {
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