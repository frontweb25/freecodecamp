
const words = [
    {
        original: 'apple',
        translation: 'яблоко'
    },
    {
        original: 'orange',
        translation: 'апельсин'
    },
    {
        original: 'banana',
        translation: 'банан'
    },
    {
        original: 'lemon',
        translation: 'лимон'
    },
]



const resultMesseges = {
    finishSuccses: 'Молодец хорошая работа',
    finishUnSuccses: 'Молодец, Но постарайся лучше',
    right: 'Правильно',
    wrong: 'Неправильно'
}


const setings = {
    correctAnswerProcent: 50
}

const result = {
    currentCountUserAnser: 0
}



if (confirm('Переведи слово, начнем?')) {

    let = userAnse1 = prompt(words[0].original)
    if (userAnse1 === words[0].translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse2 = prompt(words[1].original)
    if (userAnse2 === words[1].translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse3 = prompt(words[2].original)
    if (userAnse3 === words[2].translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse4 = prompt(words[3].original)
    if (userAnse4 === words[3].translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)

    const userCorrentAnwerPercent = result.currentCountUserAnser / words.length * 100

    if (userCorrentAnwerPercent > setings.correctAnswerProcent) {
        alert(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishSuccses}`)
    } else {
        alert(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishUnSuccses}`)
    }
} else (
    alert('Пока')
)

console.log(words.length)
console.log(result.currentCountUserAnser)
