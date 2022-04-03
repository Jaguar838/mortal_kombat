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
