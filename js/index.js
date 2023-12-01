
const word1 = 'apple'
const word2 = 'orange'
const word3 = 'banana'
const word4 = 'lemon'



const correctAnswe1 = 'яблоко'
const correctAnswer2 = 'апельсин'
const correctAnswer3 = 'банан'
const correctAnswer4 = 'лимон'

const finishSuccsesMessage = 'Молодец хорошая работа'
const finishUnSuccsesMessage = 'Молодец, Но постарайся лучше'

let currentCountUserAnser = 0
let wordsCount = 4



if (confirm('Переведи слово, начнем?')) {

    let = userAnse1 = prompt(word1)
    if (userAnse1 === correctAnswe1) {
        currentCountUserAnser++
    }
    let = userAnse2 = prompt(word2)
    if (userAnse2 === correctAnswer2) {
        currentCountUserAnser++
    }
    let = userAnse3 = prompt(word3)
    if (userAnse3 === correctAnswer3) {
        currentCountUserAnser++
    }

    let = userAnse4 = prompt(word4)
    if (userAnse4 === correctAnswer4) {
        currentCountUserAnser++
    }

    const userCorrentAnwerPercent = currentCountUserAnser / wordsCount * 100
    const persent = 50
    if (userCorrentAnwerPercent > persent) {
        alert(`правильных ответов ${currentCountUserAnser}! ${finishSuccsesMessage}`)
    } else {
        alert(`правильных ответов ${currentCountUserAnser}! ${finishUnSuccsesMessage}`)
    }
} else (
    alert('Пока')
)

console.log(currentCountUserAnser)
