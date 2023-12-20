
{
    document.write('Start', "<br>")

    const balanseMembers = 100

    const productPiseString = prompt('how mutch does price cost?')
    const productPriceNumber = +productPiseString

    if (!productPriceNumber) {
        document.write('Введите коректное число')
    } else {
        if (productPriceNumber <= balanseMembers) {
            const remainingMoney = (balanseMembers - productPriceNumber)
            document.write('Товар добавлен в корзину')
            document.write(`${"<br>"} Ваш баланс ${remainingMoney}р.`)
        } else {
            document.write(`Недостаточно средств, товар стоит ${productPriceNumber}р.`)
            document.write(`${"<br>"}Ваш баланс ${balanseMembers}р.`)
        }
    }


    document.write("<br>", 'End')
}