const myFuncEx1 = () => {
    const inputName = document.getElementById('fname')
    const inputScore = document.getElementById('fscore').value
    const result = document.getElementById('result')
    let message = ''

    if(inputScore >= 0 && inputScore <= 100) {
        if(inputScore > 90) {
            message = 'Excelence'
        } else if (inputScore > 80) {
            message = 'Very Good'
        } else if (inputScore > 60) {
            message = 'Fair'
        } else if (inputScore > 50) {
            message = 'Medium'
        } else {
            message = 'Fail'
        }
    } else {
        message = 'Score must between 0 and 100'
    }
    result.innerHTML = inputName.value + "'s grade is <b>" + message + "</b>"
}

const myFuncEx2 = () => {
    const inputS1 = parseInt(document.getElementById('s1').value)
    const inputS2 = parseInt(document.getElementById('s2').value)
    const hk = parseInt(document.getElementById('year').value)
    const summary = document.getElementById('sum')
    let result

    if(hk === 1) {
        result = ((inputS1 + (inputS2 )) / 2)
    } else if (hk === 2) {
        result = ((inputS1 + (inputS2 * 2 )) / 3)
    } else if (hk === 3) {  
        result = ((inputS1 + (inputS2 * 3 )) / 4)
    } else if (hk === 4) {  
        result = ((inputS1 + (inputS2 * 4 )) / 5)
    }
    summary.value = result

    const kq = document.getElementById('kq')

    if (result >= 9) {
        kq.innerHTML = 'Học sinh xuất sắc'
        kq.style.color = 'Yellow'
    } else if (result >= 8) {
        kq.innerHTML = 'Học sinh giỏi'
        kq.style.color = 'red'
    } else if (result >= 6) {
        kq.innerHTML = 'Học sinh khá'
        kq.style.color = 'green'
    } else if (result >= 5) {
        kq.innerHTML = 'Học sinh trung bình'
        kq.style.color = 'orange'
    }  else {
        kq.innerHTML = 'Học sinh yếu'
        kq.style.color = 'green'
    }
}

const myFuncEx3 = () => {
    const dateSelect = parseInt(document.getElementById('date').value)


    let resultValue
    if(dateSelect === 1) {
        resultValue = 'Hôm nay là Chủ nhật';
    } else if (dateSelect === 2) {
        resultValue = 'Hôm nay là Thứ 2';
    } else if (dateSelect === 3) {
        resultValue = 'Hôm nay là Thứ 3';
    } else if (dateSelect === 4) {
        resultValue = 'Hôm nay là Thứ 4';
    } else if (dateSelect === 5) {
        resultValue = 'Hôm nay là Thứ 5';
    } else if (dateSelect === 6) {
        resultValue = 'Hôm nay là Thứ 6';
    } else if (dateSelect === 7) {
        resultValue = 'Hôm nay là Thứ 7';
    } else {
        resultValue = 'Giá trị chỉ chạy từ 1 đến 7, vui lòng nhập lại.';
    }

    document.getElementById('result3').innerHTML = resultValue
}

const handleCancel = () => {
    const inputS1 = document.getElementById('s1')
    const inputS2 = document.getElementById('s2')
    const hk = document.getElementById('year')
    const summary = document.getElementById('sum')
    inputS1.value = ''
    inputS2.value = ''
    hk.value = 1
    summary.value = ''
}