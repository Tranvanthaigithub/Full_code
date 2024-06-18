function solveQuadratic() {

    let a = parseFloat(prompt("Enter the value of a: "));
    let b = parseFloat(prompt("Enter the value of b: "));
    let c = parseFloat(prompt("Enter the value of c: "));
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return "No real roots (imaginary)";
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return "One real root: " + root;
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return "Two real roots: " + root1 + " and " + root2;
    }
}

let solution = solveQuadratic();

console.log("Solution for ax^2 + bx + c = 0:");
console.log(solution);