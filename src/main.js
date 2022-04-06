//*********************************
//Lesson 1 Переменные и типы данных
//*********************************

// let firstName
// firstName='Scorpion'
// console.log(firstName)

let firstName = 'Scorpion'
console.log(firstName)

//TypeOf 8 type primitive
console.log(typeof firstName) //1 string


const count = 4
console.log(typeof count) //2 number

const infinity = 5 / 0
const NotANumber = 10 * 'as'
console.log(infinity) // Infinity
console.log(typeof infinity) // number
console.log(NotANumber) // Nan
console.log(typeof NotANumber) // number

const isBoolean = false
console.log(typeof isBoolean) //3 Boolean

const symbol = Symbol()
console.log(typeof symbol) //4 symbol

const bigint = BigInt(3) //5 bigint
console.log(typeof bigint)

let someVariable
console.log(typeof someVariable) //6 undefined - не присвоено

//7 object - ничего или неизвестно это отдельный тип данных
// object используется для совместимости версий JS
let someNull = null
console.log(typeof someNull)

const obj = {}
console.log(typeof obj) //8 object

const arr = []
const fn = function () {}

console.log(typeof arr) // object
console.log(typeof fn) // function

// Динамические типы данных

// let name = 'Zar'
// name = 5
// name = true
// console.log(name)

// String(5)
console.log(typeof String(10)) // string
console.log('Hello' + 'World') // HelloWorld
const hello ='Hello'
const world ='word'
const concat = hello + world
console.log(concat + 5) // HelloWorld5
console.log(concat + true) // HelloWorldtrue
console.log(concat + undefined) // HelloWorldundefined
console.log(concat + function () {}) // HelloWorldfunction () {}
console.log(concat + [1,2,3]) // Helloword1,2,3

console.log(concat + {a:1}) // Helloword[object Object]

// Number('5')
console.log(Number('5')) // 5
console.log(Number('asd')) // NaN
console.log(typeof +'5') // number

console.log(+true) // 1
console.log(+false) // 0
console.log(+null) // 0

// Boolean('asd')
console.log(Boolean('')) // false
console.log(Boolean(' ')) // true

console.log(Boolean(0)) // false
console.log(Boolean(null)) // false

// Преобразование
console.log(!!'asd') // true
console.log('' + 5) // 5 - string
console.log(+'10') // 10 - number
console.log(!!'someString') // true
console.log(true + true) // 2

//*************************************
//Lesson 2 DOM, функции массивы объекты
//*************************************

//Operation
let incrementA = 1
let incrementB = 1

const c = ++incrementA
const d = incrementB++
console.log(incrementA) // 1 + 1 = 2
console.log(incrementB) // 1 + 1 = 2

console.log(c) // 2
console.log(d) // 1

let a = 10
let b = 1
// b = b + a
b += a
console.log(b) // 11
b -= a
console.log(b) // 1
b *= a
console.log(b) // 10
b /= a
console.log(b) // 1
// b = b % a
b %= a // остаток от деления
console.log(b) // 1

// DRY(Don't Repeat Yourself) - не повторяйся
const name = 'Scorpion'
const lastName = 'Blade'
function getMessage(name, lastname) {
    console.log(name + ' '+ lastname +'- Fight...')
}
getMessage('Sonya') // Sonya undefined- Fight...
getMessage(name, lastName) // Scorpion Blade- Fight...

function createFullName(name, lastname, secondname) {
    const result = name + ' ' + secondname +' ' + lastname
return result
}

const fullName = createFullName('Zar', 'Zakharov', 'Konstantinovich')
console.log(fullName) // Zar Konstantinovich Zakharov

//Object
const player1 = {
    name: 'Scorpion',
    hp: 100,
    nameName: true,
    name_name: true,
    100: true,
    $: true,
    _: true,
    // 1name: false,
    // name.name: false,
    '1name может быть чем угодно?': true,
    attack: function () {
        console.log('Fight...')
    }
}
player1.attack()

console.log(player1) // {...}
console.log(player1.name) // '1name может быть чем угодно?'
console.log(player1['hp']) // 100
console.log(player1['1name может быть чем угодно?']) // true

const count1 = 100
console.log(player1[count1]) // true

player1.weapon = 'Кинжал'
console.log(player1)

player1.hp = player1.hp - 20
console.log(player1)

delete player1.$
delete player1._
delete player1.name_name
delete player1.nameName
delete player1['1name может быть чем угодно?']
delete player1['100']

console.log(player1)

// Array
const message = ['Hello', true, 2021]
console.log(message)

console.log(message[0]) // Hello
console.log(message[100]) // undefined

message.push('World')
console.log(message); // [ 'Hello', true, 2021, 'World' ]
const str = message[0] + ' '+ message[3]
console.log(str) // Hello World

//Dom
// const document = {
//     children: [
//         //html
//         {
//             children: [
//                 //head
//                 {
//                   children: []
//                 },
//                 //body
//                 {
//                     children: []
//                 }
//             ]
//         }
//     ]
// }
// console.dir(document)

// const $player1 = document.createElement('div')
// $player1.classList.add('player1')
//
// const  $p = document.createElement('p')
// $p.innerText = 'Scorpion'
// $player1.appendChild($p)
//
// const $img=document.createElement('img')
// $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
// $player1.appendChild($img)
//
// const $root = document.querySelector('.arenas')
// $root.appendChild($player1)

//**********************************************
//Lesson 3 Операторы сравнения, условные 
// конструкции и операторы, логические операторы
//**********************************************

//Операторы сравнения
const a1 =10
const b1 = 5
console.log(a1 > b1) // true
console.log(a1 < b1) // false
console.log(a1 >= b1) // true
console.log(a1 <= b1) // false

console.log(a1 != b1) // true

// Nestrogoe sravnenie s privideniem tipov
console.log(a1 == b1) // false
console.log(false == 0) // true


console.log(false === 0) // false
console.log('F' > '0') // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
console.log(undefined == null) // true
console.log(undefined === null) // false

//Условные конструкции и операторы
// const walkDirection = prompt('Where are we going?')
//
// if (walkDirection === 'left') {
//     console.log('We should go on the ' + walkDirection)
// } else if (walkDirection === 'right') {
//     console.log('We should go on the ' + walkDirection)
// }    else {
//         console.log('We should stray!')
//     }

//Логические операторы
//и или не

console.log('%c&&', 'color: #FFFF00; background-color: #5394EC; padding: 0')
console.log('%c&&', 'color: #FFFF00; background-color: #5394EC; padding: 2px')

console.log(true && false) // false
console.log(true && true) // true

console.log(true && 'This string') // This string
console.log(true && 'This string' && true) // true
console.log(true && null && true) // null

console.log('%c||', 'color: #FFFF00; background-color: #5394EC; padding: 2px')

console.log(false || true) // true
console.log(false || false) // false

console.log('%c!', 'color: #FFFF00; background-color: #5394EC; padding: 2px')

console.log(!true) // false
console.log(!false) // true

console.log(!'string') // false
console.log(!1) // false

console.log(!'') // true

// Тернарный оператор
console.log(true ? 1:2) // 1
console.log(false ? 1:2) // 2

const isTrue = true ? 'yes':'no';
console.log(isTrue) // yes

//Метод Math
console.log(Math.floor(Math.random() * 100)) // целое в меньшую сторону
console.log(Math.ceil(Math.random() * 100)) // целое в большую сторону

//*************************************
//Lesson 4 Context, window && IIFE, 
// this, call, apply && bind, 
// цепочки областей видимости
//*************************************
