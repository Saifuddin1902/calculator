// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }) {
	const annualData = [];
	let investmentValue = initialInvestment;
	let totalInterest = 0; // Initialize total interest

	for (let i = 0; i < duration; i++) {
		const interestEarnedInYear = investmentValue * (expectedReturn / 100);
		investmentValue += interestEarnedInYear + annualInvestment;
		totalInterest += interestEarnedInYear; // Update total interest

		annualData.push({
			year: i + 1, // Year identifier
			investmentValue: investmentValue, // Investment value at end of year
			interest: interestEarnedInYear, // The amount of interest earned in this year
			totalInterest: totalInterest, // Total interest earned so far
			investedCapital: initialInvestment + annualInvestment * (i + 1), // Total invested capital
		});
	}

	return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});
