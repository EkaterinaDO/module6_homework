
const getPowNumber = () => {

    let number = +prompt("Введите число: ")
    let pow = +prompt("Введите степень: ")
    
    if (pow < 1){
    return alert(`Степень ${pow} не поддерживается`)
    } return alert(`Ваш ответ: ${number ** pow}`)
    }
    
    getPowNumber();