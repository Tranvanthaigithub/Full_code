// Tính tổng(calculateSum)
function calculateSum(n) {
   
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


let Total = calculateSum(50);

// In ra màn hình
document.write("Tổng của 50 số nguyên bằng:", Total);