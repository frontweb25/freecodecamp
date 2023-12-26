
const dictionaryWords = {

    word1: {
        original: 'apple',
        translation: 'яблоко'
    },
    word2: {
        original: 'orange',
        translation: 'апельсин'
    },
    word3: {
        original: 'banana',
        translation: 'банан'
    },
    word4: {
        original: 'lemon',
        translation: 'лимон'
    }
}



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


let wordsCount = 4



if (confirm('Переведи слово, начнем?')) {

    let = userAnse1 = prompt(dictionaryWords.word1.original)
    if (userAnse1 === dictionaryWords.word1.translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse2 = prompt(dictionaryWords.word2.original)
    if (userAnse2 === dictionaryWords.word2.translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse3 = prompt(dictionaryWords.word3.original)
    if (userAnse3 === dictionaryWords.word3.translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)


    let = userAnse4 = prompt(dictionaryWords.word4.original)
    if (userAnse4 === dictionaryWords.word4.translation) {
        result.currentCountUserAnser++
        alert(resultMesseges.right)
    } else alert(resultMesseges.wrong)

    const userCorrentAnwerPercent = result.currentCountUserAnser / wordsCount * 100

    if (userCorrentAnwerPercent > setings.correctAnswerProcent) {
        alert(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishSuccses}`)
    } else {
        alert(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishUnSuccses}`)
    }
} else (
    alert('Пока')
)

console.log(result.currentCountUserAnser)
