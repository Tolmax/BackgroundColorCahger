import './index.css'; // добавьте импорт главного файла стилей 

const button = document.getElementById('btn')
const color = document.querySelector('.color')
const body = document.querySelector('.body')
const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F'
]
// console.log('Hello world')

button.addEventListener('click', () => {
    const hexColor = generateHex()
    color.textContent = hexColor
    body.style.backgroundColor = hexColor
})

function getRandomNmber() {
   return Math.floor(Math.random() * hex.length)
}

function generateHex() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        let math = Math.floor(Math.random() * hex.length)
        hexColor = hexColor + hex[math]
    }
    return hexColor
}

// function generateHex() {
//     let hexColor = '#'
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNmber()]
//     }
//     return hexColor
// }
