// document.getElementById('name').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         search();
//     }   
// });

// function search() {
//     const searchInput = document.getElementById('name').value.toLowerCase();
//     const data = JSON.parse(localStorage.getItem("ArraySinhVien"));
//     const table = document.getElementById("tbl");

//     table.innerHTML = ''; 

//     const headerRow = table.insertRow(); 
//     const headers = ["STT", "Name", "Age", "Class", "Gender"];
//     headers.forEach(function(header) {
//         const th = document.createElement('th');
//         th.textContent = header;
//         headerRow.appendChild(th);
//     });

//     if (data) {
//         let stt = 0;
//         data.forEach(function(student) {
//             if (student.name.toLowerCase().includes(searchInput)) {
//                 const newRow = table.insertRow();
//                 const sttCell = newRow.insertCell(0);
//                 const nameCell = newRow.insertCell(1);
//                 const ageCell = newRow.insertCell(2);
//                 const classCell = newRow.insertCell(3);
//                 const genderCell = newRow.insertCell(4);

//                 sttCell.textContent = ++stt;
//                 nameCell.textContent = student.name;
//                 ageCell.textContent = student.age;
//                 classCell.textContent = student.className;
//                 genderCell.textContent = student.gennder;
//             }
//         });
//     }
// }

// let data = JSON.parse(localStorage.getItem("ArraySinhVien"));



// console.log(data);

document.getElementById('btn_check'), onclick = function () {
    //Khi người dùng không nhập thông tin hay để trống thì hiện thông báo ( vui lòng nhập thông tin)
    // Lấy thông tin nhập vào từ user
    let keySearch = document.getElementById("name").value;

    // Kiểm tra thông tin người dùng nhập vào
    if (keySearch !== "" && keySearch !== null && keySearch !== undefined) {
        // Lấy dữ liệu được lưu từ localstorage
        let data = JSON.parse(localStorage.getItem("ArraySinhVien"));
        // hiển thị thông tin
        if (data !== "" && data !== null && data !== undefined) {
            // Tìm kiếm thông tin người dùng đã nhập trong data
            let inforSV = data.find(function (item) {
                return item.name === keySearch;
            });
            if (inforSV) {
                let html = `
                     <tr>
                        <td id="stt">1</td>
                        <td id="name">${inforSV.name}</td>
                        <td id="age">${inforSV.age}</td>
                        <td id="class">${inforSV.className}</td>
                        <td id="gender">${inforSV.gennder}</td>
                    </tr>
                    `;
                document.querySelector("#tblInforSV tbody").innerHTML = html;
            } else {
                let html = `
                         <tr>
                            <td colspan="5" style="text-align: center;">Không tồn tại thông tin học sinh tên "${keySearch}"</td>
                        </tr>
                        `;
                document.querySelector("#tblInforSV tbody").innerHTML = html;
            }
            // console.log(inforSV);
            // for (let i = 0; i < data.length; i++) {
            //     const element = data[i];
            //     if (element.name === keySearch) {
            //         // hiển thị thôn tin ra table
            //         let html = `
            //          <tr>
            //             <td id="stt">1</td>
            //             <td id="name">${element.name}</td>
            //             <td id="age">${element.age}</td>
            //             <td id="class">${element.className}</td>
            //             <td id="gender">${element.gennder}</td>
            //         </tr>
            //         `;
            //         document.querySelector("#tblInforSV tbody").innerHTML = html;
            //         break;
            //     } else {
            //         let html = `
            //          <tr>
            //             <td colspan="5" style="text-align: center;">Không tồn tại thông tin học sinh tên "${keySearch}"</td>
            //         </tr>
            //         `;
            //         document.querySelector("#tblInforSV tbody").innerHTML = html;
            //     }

            // }
        }
    } else {
        alert("Vui lòng nhập tên học viên cần tìm");
    }
}