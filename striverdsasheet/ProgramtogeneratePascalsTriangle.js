function printPascalsTriangle(rows) {
    // Iterate through each row
    for (let i = 0; i < rows; i++) {
        let row = '';
        // Each row has i+1 numbers
        for (let j = 0; j <= i; j++) {
            // Calculate the binomial coefficient using the formula n! / (r! * (n - r)!)
            console.log(i,j,"i,j")
            let coefficient = factorial(i) / (factorial(j) * factorial(i - j));
            // Add the coefficient to the row
            console.log(coefficient,"coefficient")

            row += coefficient + ' ';
        }
        // Print the row
        console.log(row)
    }
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Call the function with the desired number of rows
printPascalsTriangle(5); // Change the argument to adjust the number of rows in Pascal's triangle

