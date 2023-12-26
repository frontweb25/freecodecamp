

const word1 = {
    original: 'apple',
    translation: 'яблоко'
}
const word2 = {
    original: 'orange',
    translation: 'апельсин'
}
const word3 = {
    original: 'banana',
    translation: 'банан'
}
const word4 = {
    original: 'lemon',
    translation: 'лимон'
}




const finishSuccsesMessage = 'Молодец хорошая работа'
const finishUnSuccsesMessage = 'Молодец, Но постарайся лучше'

let currentCountUserAnser = 0
let wordsCount = 4



if (confirm('Переведи слово, начнем?')) {

    let = userAnse1 = prompt(word1.original)
    if (userAnse1 === word1.translation) {
        currentCountUserAnser++
    }
    let = userAnse2 = prompt(word2.original)
    if (userAnse2 === word2.translation) {
        currentCountUserAnser++
    }
    let = userAnse3 = prompt(word3.original)
    if (userAnse3 === word3.translation) {
        currentCountUserAnser++
    }

    let = userAnse4 = prompt(word4.original)
    if (userAnse4 === word4.translation) {
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
