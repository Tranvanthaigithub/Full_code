document.getElementById('btn_check').onclick = function() {

    const number = parseInt(document.getElementById('number').value);
    checkEvenOdd(number);

}

function checkEvenOdd(number) {
    let  showcheck;
    if (isNaN(number)) {

         showcheck = ' Vui lòng nhập giá trị là 1 số ';

    }    else if (number % 2 === 0) {
         showcheck = number + ' Đây là 1 số chẵn ';
    } else {
         showcheck = number + ' Đây là 1 số lẽ ';
    }

    document.getElementById('Showcheck').textContent =  showcheck;
}
