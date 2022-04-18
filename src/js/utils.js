/**
 * Ф-я создает элемент HTML
 * @param {String} tag
 * @param {String} className
 * @param {String or Array String} content
 * @returns {HTMLElement}
 */
export const createEl = (tag = 'div', className, content) => {
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
export const getRandom = (n) => {
    return n ? Math.ceil(Math.random() * n) : 20
}

/**
 * Ф-я текущего времени
 * @returns {string} hh:mm:ss
 */
export const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const generateTimeString = (time) => {
        return time < 10 ? `0${time}` : time
    }
    return `${generateTimeString(hours)}:${generateTimeString(minutes)}:${generateTimeString(seconds)}`;
}