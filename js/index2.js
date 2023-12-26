
{
    document.write('Start', "<br>")

    const balanseMembers = 800

    const productPiseString = prompt('Сколько стоит товар?')
    const productPriceNumber = Number(productPiseString)


    if (isNaN(productPriceNumber)) {
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