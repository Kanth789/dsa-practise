function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    function convertLessThanThousand(n) {
        if (n === 0) {
            return '';
        } else if (n < 10) {
            return ones[n];
        } else if (n < 20) {
            return teens[n - 10];
        } else if (n < 100) {
            return tens[Math.floor(n / 10)] + ' ' + convertLessThanThousand(n % 10);
        } else {
            return ones[Math.floor(n / 100)] + ' hundred ' + convertLessThanThousand(n % 100);
        }
    }
    
    if (num === 0) {
        return 'zero';
    }
    
    const billions = Math.floor(num / 1000000000);
    const millions = Math.floor((num % 1000000000) / 1000000);
    const thousands = Math.floor((num % 1000000) / 1000);
    const remainder = num % 1000;
    
    let result = '';
    
    if (billions > 0) {
        result += convertLessThanThousand(billions) + ' billion ';
    }
    
    if (millions > 0) {
        result += convertLessThanThousand(millions) + ' million ';
    }
    
    if (thousands > 0) {
        result += convertLessThanThousand(thousands) + ' thousand ';
    }
    
    if (remainder > 0) {
        result += convertLessThanThousand(remainder);
    }
    
    return result.trim();
}

// Test cases
console.log(numberToWords(7824)); // Output: seven thousand eight hundred twenty four
console.log(numberToWords(370));  // Output: three hundred seventy
