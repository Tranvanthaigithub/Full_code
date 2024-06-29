var arrSinhvien = [];
// bắt sự kiện cho submit
document.getElementById('submit').onclick = function () {
    // lấy thông tin tại phần đăng kí tên 
    var name = document.getElementById('txtName').value;
    // lấy thông tin tại phần đăng kí tuổi
    var age = document.getElementById('txtAge').value;
    // lấy thông tin tại phần đăng kí lớp
    var className = document.getElementById('cbbClassName').value;
    // lấy thông tin tại phần đăng kí nam/nữ
    var gennder = document.querySelector('input[name="gender"]:checked').value;
    // Kiểm tra dữ liệu Name, Age dã nhập hay chưa
    if (name && age) {
        // Lưu dữ liệu vào.... 
        arrSinhvien.push({
            name: ten,
            age: tuoi,
            className: lop,
            gennder: gennder
        });
        // Hiển thị thông báo ra màn hình : Đăng ký thành công !
        document.getElementById('lbStatusSubmit').innerText = "Đăng ký thành công";
        localStorage.setItem("ArraySinhVien", JSON.stringify(arrSinhvien));
    } else {
        // Không hợp lệ thì.... hiểu thị : cảnh báo lên kh hợp lệ và kết thúc chương trình
        alert("Vui lòng nhập đủ tên và tuổi !");
    }
}

// bắt sự kiện cho reset
document.getElementById('reset').onclick = function () {
    // reset các dữ liệu nhập vào phần đăng kí 
    // xóa tên 
    document.getElementById('txtName').value = '';
    // xóa tuổi 
    document.getElementById('txtAge').value = '';
    // xóa lớp 
    document.getElementById('cbbClassName').value = '';
    // xóa nam/nữ
    document.querySelector('input[name="gender"]').checked = true;
}
