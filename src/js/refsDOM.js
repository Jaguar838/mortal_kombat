import {createEl} from "./utils.js";

export const $arenas = document.querySelector('.arenas')
export const $buttonFight = document.querySelector('.button')
export const $formFight = document.querySelector('.control')
export const $chat = document.querySelector('.chat')

//Ф-я создает кнопку перезагрузки
export function createReloadButton() {
    const $reloadButton = createEl('button', 'button', 'Restart')
    const $reloadWrap = createEl('div', 'reloadWrap', [$reloadButton])

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })
    $arenas.appendChild($reloadWrap)
}