
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

const arrayOfincorrectWords = []

const resultMesseges = {
    finishSuccses: 'Молодец хорошая работа',
    finishUnSuccses: 'Молодец, Но постарайся лучше',
}


const setings = {
    correctAnswerProcent: 50
}

const result = {
    currentCountUserAnser: 0
}



if (confirm('Переведи слово, начнем?')) {

    for (let i = 0; i < words.length; i++) {
        let = userAnsewer = prompt(words[i].original)
        if (userAnsewer === words[i].translation) {
            result.currentCountUserAnser++
        } else {
            arrayOfincorrectWords.push(userAnsewer)
        }
    }
    if (arrayOfincorrectWords.length >= 1) {
        document.write(`список не правильных слов ${"<br>"} ${arrayOfincorrectWords} ${"<br>"}`)
    }


    const userCorrentAnwerPercent = result.currentCountUserAnser / words.length * 100

    if (userCorrentAnwerPercent > setings.correctAnswerProcent) {
        document.write(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishSuccses}`)
    } else {
        document.write(`правильных ответов ${result.currentCountUserAnser}! ${resultMesseges.finishUnSuccses}`)
    }
} else (
    alert('Пока')
)

console.log(words.length)
console.log(result.currentCountUserAnser)
