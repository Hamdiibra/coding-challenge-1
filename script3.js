function calculateTax(income) {
    if (income <= 288000) {
        return 0;
    } else if (income <= 388000) {
        return (income - 288000) * 0.25;
    } else {
        return (100000 * 0.25) + (income - 388000) * 0.30;
    }
}

function calculateNHIF(grossSalary) {
    if (grossSalary < 6000) {
        return 150;
    } else if (grossSalary < 8000) {
        return 300;
    } else if (grossSalary < 11000) {
        return 400;
    } else if (grossSalary < 15000) {
        return 500;
    } else {
        return 1800; // Example for higher salaries
    }
}

function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 200); // Assuming a cap of KES 200
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const totalDeductions = payee + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Function to get user input and display results
function main() {
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    const results = calculateNetSalary(basicSalary, benefits);

    alert(`
        Salary Breakdown:
        Gross Salary: KES ${results.grossSalary.toFixed(2)}
        PAYE Tax: KES ${results.payee.toFixed(2)}
        NHIF Deductions: KES ${results.nhif.toFixed(2)}
        NSSF Deductions: KES ${results.nssf.toFixed(2)}
        Net Salary: KES ${results.netSalary.toFixed(2)}
    `);
}

// Run the main function
main();
