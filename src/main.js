//*********************************
//Lesson 1 Переменные и типы данных
//*********************************

// Boolean — этот тип полезная штука в любом языке программирования;
// Number - этот тип используется в JavaScript для числовых значений;
// Undefined - применяют для сущностей, которые не имеют присвоенного значения;
// String - этот тип используется для строковых данных.

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
console.log(player1['hp1']) // 100
console.log(player1['1name может быть чем угодно?']) // true

const count1 = 100
console.log(player1[count1]) // true

player1.weapon = 'Кинжал'
console.log(player1)

player1.hp1 = player1.hp1 - 20
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
// console.log(window)
// window.console.log('hi')
console.log('hi-hi')
var a2 = 5 // попадают в объект window, тем самым засоряя его
// let, const видны только в своей области локальной видимости
// функции, объявленные без ключевого слова тоже попадают в глобальный объект window
function sayHi() {
    console.log('Hi')
}

// IIFE функция запускаемая сразу после объявления
(function () {
    console.log('Hi')
})()

//this ключевое слово
// function greet() {
//     return 'Hi, my name is ' + this;
// }
//
// console.log(greet()) //Hi, my name is [object global]
// console.log(this)

function greet(greet) {
    return greet + ', my name is ' + this.name;
}

const player2 = {
    name: 'Scorpion',
    greet: greet,
}

const enemy = {
    name: 'Sub-Zero',
    greet: greet,
}

console.log(player2.greet('Hi')) //Hi, my name is Scorpion
console.log(enemy.greet()) //Hello, my name is Sub-Zero

//Принудительное привязывание контекста
// call
console.log(enemy.greet.call(player2, 'Hello')) //Hello,, my name is Scorpion
// apply
console.log(enemy.greet.call(player2, ['Hello'])) //Hello,, my name is Scorpion
// bind

// Область видимости переменной - это часть программы, где эта переменная определена
// Переменные деляться на глобальные и локальные
// Глобальные переменные - это переменные объявленные вне каких либо функций и без ключевых слов let, const
// Цепочки областей видимости создают вложенные функции
// ключевое слово var, переменные могут оказаться пустыми(undefined) до их объявления
var i = 5

function fn1() {
    var i = 10
    console.log(i)

    function moreFunc() {
        var i // интерпитатор сначала объявляет переменную без значения (undefined)
        console.log(i)
        i = 15
        console.log(i)
    }

    moreFunc()
    console.log(i)
}

// Хорошей практикой являеться объявление переменных в начале функции, что-бы смысл этой функции было легче понять при чтении кода
fn1() // 10 undefined 15 10

// ключевое слово let, не могут оказаться пустыми(undefined) до их объявления
// let, const они имеют локальную область видимости в любых фигурных скобках, кроме литералов объектов
let j = 5

// function fn2() {
//     let j = 10
//     console.log(j)
//     function moreFunc() {
//        console.log(j) // before initialization
//        let j = 15
//         console.log(j)
//     }
//     moreFunc()
//     console.log(j)
// }
//
// fn2() // 10 before initialization

{
    let j = 10
    console.log(j) //10
}
console.log(j) //5
// var не используют из-за неоднозначности его поведения при всплытии, к-е может сыграть
// с тобой злую шутку!

//*************************************
//Lesson 5 Циклы и работа с формы из JS
//*************************************

//  Циклы автоматизируют большинство наших задач
for (let counter = 0; counter < 10; counter = counter + 1) {
    console.log('Переменная counter:', counter)
}

let result = ''
for (let i = 0; i < 10; i++) {
    result += i + ' '
}
console.log(result) //0 1 2 3 4 5 6 7 8 9

result = ''
for (let i = 0; i < 10; i++) {
    if (i === 9) {
        break
    }
    if (i % 2 === 0) {
        continue
    }
    result += i + ' '
}
console.log(result) //1 3 5 7

function getOnlyOddNumbers(counter) {
    let result = ''
    for (let i = 0; i < counter; i++) {
        if (i % 2 === 0) {
            continue
        }
        result += i + ' '
    }
    return result
}

console.log(getOnlyOddNumbers(20)) //1 3 5 7 9 11 13 15 17 19

//*********************************************
//Lesson 6 Работа с датой, условные конструкции
//*********************************************

const direction = 'top'
if (direction === 'top') {
    console.log('Look at the top') //Look at the top
} else if (direction === '') {
    console.log('Look at the bottom')
} else if (direction === 'left') {
    console.log('Look at the left')
} else if (direction === 'right') {
    console.log('Look at the right')
} else {
    console.log('Look ahead')
}

function whereLook(direction) {
    switch (direction) {
        case 'top':
            const name = 'Zar'
            return name + ' Look at the top'
        case 'bottom':
            return 'Look at the bottom'
        case 'left':
            return 'Look at the left'
        case 'right':
            return 'Look at the right'
        default:
            return 'Look ahead'
    }
}

console.log(whereLook('left')) //Look at the left
console.log(whereLook('top')) //Look at the top
console.log(whereLook('bottom')) //Look at the bottom
console.log(whereLook())// Look ahead
// Работа с датой
const date = new Date()
console.dir(date) //2022-04-14T09:18:50.161

console.log(date.getDate()) // 14
console.log(date.getMonth()) // 3

console.log(date.getHours()) // 12
console.log(date.getMinutes()) // 23

console.log(new Date('1988-12-24')) //1988-12-24T00:00:00.000
console.log(date.getHours()) // 12
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()) //12:26:27

//********************************************************
//Lesson 7 Функции, модули,  деструктуризация
//********************************************************
//Деструктуризация позволяет распаковать массивы или объекты в кучу переменных

// Деструктуризация полей объекта
// const player3 = {
//     names: 'Zar',
//     type: 'sensei',
//     weapon: ['JS', 'Layout HTML'],
//     hp: {
//     current: 1000,
//         total: 800,
//     }
// }
//
// const {weapon, names, type} = player3
//
// console.log(names, type, weapon) // Zar undefined [ 'JS', 'Layout HTML' ]
// const { hp: { current, total }, weapon, names, type= 'type isn\'t defined'} = player3
// console.log(names, type, weapon) // Zar type isn't defined [ 'JS', 'Layout HTML' ]
// console.log(hp) // {current: 1000, total: 800 }
// 1000, 800 сам объект hp вывести уже не получиться,
// он деструктуризирован, если нужен именно объек то его не нада деструктуризировать
// console.log(current, total) // 1000, 800

// Деструктуризация полей объекта, которые имеют одинаковые наименования
// const player3 = {
//     names: 'Zar',
//
//     weapon: ['JS', 'Layout HTML'],
//     hp: {
//         current: 1000,
//         total: 800,
//     }
// }
//
// const player4 = {
//     names: 'Zar',
//
//     weapon: ['JS', 'Layout HTML'],
//     hp: {
//         current: 1000,
//         total: 800,
//     }
// }
//
// const {names, ...rest } = player3
// const {names: namePlayer4, ...restPlayer4 } = player4
//
// console.log(names, rest) //Zar { weapon: [ 'JS', 'Layout HTML' ], hp: { current: 1000, total: 800 } }
// console.log(namePlayer4, restPlayer4) //Zar { weapon: [ 'JS', 'Layout HTML' ], hp: { current: 1000, total: 800 } }

// Деструктуризация массива
const player3 = {
    names: 'Zar',
    type: 'sensei',
    weapon: ['JS', 'Layout HTML', 'React'],
    hp: {
        current: 1000,
        total: 800,
    }
}

const {names, weapon: [one, two, three], ...rest} = player3

console.log(names, one, three, rest) //Zar JS React { type: 'sensei', hp: { current: 1000, total: 800 } }

// Наследование от объекта прототипа
const character = {
    name: 'Scorpion',
    hp: 100,
    weapon: ['hands'],
    type: 'fighters',
}

character.whoop = function () {
    console.log(`${this.name} let's fight!`)
}

console.log(character.name) // Scorpion
console.log(character.whoop()) // Scorpion let's fight!
// console.log(character.kick()) // undefined error

Object.prototype.kick = function () {
    console.log('Kick me Again')
}

console.log(character.kick()) // Kick me Again

const kitana = Object.create(character)
console.log(kitana.name) // Scorpion
kitana.name = 'Kitana';
console.log(kitana.name) // Kitana
console.log(kitana.kick()) // Kick me Again

Object.prototype.toString = function () {
    return 'Это объект!...'
}
console.log(character.toString()) // Это объект!...
console.log(kitana.whoop()) // Kitana let's fight!
const str1 = new String('This is string!')
console.log(str1) // [String: 'This is string!']

// Function Declaration при объявлении
// поднимает функцию вверх лексического окружения
// и она доступна в любом его месте
// console.log(sum(2,4)) // 6
// function sum(a,b) {
//     return a + b
// }
//
// console.log(sum(2,4)) // 6

// Function Expression будет доступна только после её объявления
//console.log(sum(2,4)) // ошибка
// const sum =function (a=0,b=0) {
//     return a + b
// }
//
// console.log(sum(2,4)) // 6
//
// const  calc = sum;
// console.log(calc(3,4)) //7
// console.log(sum(3,4)) //7
// console.log(sum()) //0

//Anonymous Functions
// function () {
//     return 'String'
// }
// document.addEventListener('click', function () {
//     return 'Some'
// })

// Self-Invoking Function || IIFE
// const f = {
//     name: 'Zar',
// }
// (function () {
//     console.log(this)
// })()
//     (function(x){
//         console.log(x);
//     })("Hello, World!");
// Arrow Function

const sum = (a, b) => a + b
console.log(sum(3, 4)) // 7
function getRandom(n) {
    return n ? Math.ceil(Math.random() * n) : 20
}

console.log(getRandom()) //20
const random = (n) => Math.ceil(Math.random() * n)
console.log(random(100)) //97

// Стрелочная ф-я не имеет своего констекста
const obj1 = {
    name: 'Zar',
    fn: function () {
        console.log(this)
    }
}

const obj2 = {
    name: 'Zar Zakharov',
    fn: () => {
        console.log(this)
    }
}

const obj3 = {
    name: 'Zar Zakharov',
    fn: function () {
        const a1 = () => console.log(this)
    }
}

obj1.fn() //{ name: 'Zar', fn: [Function: fn] }
obj2.fn() //{window}
obj3.fn() //{ name: 'Zar', fn: [Function: fn] }

const copy1 = obj1.fn // { window }
const copy2 = obj2.fn.bind(obj2) // { window }
const copy3 = obj3.fn.bind(obj3) //{ name: 'Zar', fn: [Function: fn] }

copy1() // { window }
copy2() // { window }
copy3() //{ name: 'Zar', fn: [Function: fn] }

//************************************
//Lesson 8 Класс и как с ним работать
//************************************