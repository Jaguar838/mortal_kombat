import {$arenas, $formFight, $buttonFight, createReloadButton} from "./js/refsDOM.js";
import {player1, player2, createPlayer, playerAttack, enemyAttack, generateLogs, showResult} from "./js/players.js";

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