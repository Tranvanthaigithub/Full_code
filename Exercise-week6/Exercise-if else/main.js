function checkNumber(number) {
    let so = parseFloat(prompt("nhập số: "));


    if (so > 0) {
        console.log("Số này là số dương.");
    } else if (so < 0) {
        console.log("Số này là số âm.");
    } else {
        console.log("Số này bằng không.");
    }
}
let solution = checkNumber() 
// document.write("nhập số :");
// document.write("x =", solution);


