document.getElementById('check').onclick = function() {
  
    const number = document.getElementById('number').value;
    
  
    const num = parseFloat(number);
    
    
    let so;

    // Kiểm tra xem num là số dương, âm hay bằng không
    if (isNaN(num)) {
        so = 'Vui lòng nhập một số hợp lệ.';
    } else if (num > 0) {   
        so = num + ' là số dương';
    } else if (num < 0) {
        so = num + ' là số âm';
    } else {
        so = num + ' bằng không';
    }

    // Hiển thị kết quả ra màn hình
    document.getElementById('So').textContent = so;
};