let a = prompt("Nhap gia tri cho a =", 0);
let b = prompt("Nhap gia tri cho b =", 0);


console.log("ban đầu:");
console.log("a =", a);
console.log("b =", b);


let c = a;
a = b;
b = c;

console.log("\n hoán đổi:");
console.log("a =", a);
console.log("b =", b);