function solveEquation() {
    let a = parseFloat(prompt("Enter the value of a: "));
    let b = parseFloat(prompt("Enter the value of b: "));
    
    if (a === 0) {
        if (b === 0) {
            return "Infinite solutions (all real numbers)";
        } else {
            return "No solution (undefined)";
        }
    } else {
        return -b / a;
    }
}

let solution = solveEquation();

console.log("Solution for ax + b = 0:");
console.log("x =", solution);
