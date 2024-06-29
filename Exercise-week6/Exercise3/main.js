document.getElementById('btn_check').onclick = function() {
    
const n = parseInt(document.getElementById('number').value);

Total(n);

}

function Total(n){
    let sum = 0;
    for (let N = 1; N <= n; N++){
        sum += N;
    }
    document.getElementById('start').textContent = 'Tổng các số từ 1 đến ' + n + ' là: ' + sum;


}

