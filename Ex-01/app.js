const myFuncEx1 = () => {
    const inputName = document.getElementById('fname')
    const inputUserName = document.getElementById('fusername')
    const result = document.getElementById('result')

    const fisrtValue = inputName.value ? inputName.value : 0
    const secondValue = inputUserName.value ? inputUserName.value : 0

    const resultValue = Number(fisrtValue) + Number(secondValue)
    result.innerHTML = resultValue
}

const myFuncEx2 = () => {
    const inputNumber = document.getElementById('numberCheck')
    const result = document.getElementById('result2')
    let resultValue = '';

    if (inputNumber.value % 2 === 0) {
        resultValue = 'Số chẵn'
    } else {
        resultValue = 'Số lẻ'
    }

    result.innerHTML = resultValue
}

const myFuncEx3 = (event) => {
    const result = document.getElementById('result3')
    const inputValue = new Date(event.target.value).getFullYear()
    const currYear = new Date().getFullYear()
    let resultValue = '';

    if(currYear < inputValue) {
        resultValue = 'Bạn không thể sinh ra trước thời điểm hiện tại.'
    } else {
        if(currYear - inputValue >= 18) {
            resultValue = 'Bạn có thể đi xem phim nhà bà nữ.'
        } else {
            resultValue = 'Bạn chỉ được xem phim Doraemon.'
        }
    }

    result.innerHTML = resultValue
}