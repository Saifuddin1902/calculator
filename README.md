# Investment Calculator

A simple investment calculator built with React that allows users to calculate the growth of their investments over time based on their initial investment, annual contributions, expected return rate, and investment duration. The calculator provides a detailed breakdown of the investment's performance year by year.

## Features

- Input fields for:
  - Initial Investment
  - Annual Investment
  - Expected Return (as a percentage)
  - Duration (in years)
- Automatic calculation of annual investment data based on user input
- Dynamic table displaying:
  - Year
  - Investment Value
  - Interest Earned in the Year
  - Total Interest Earned
  - Total Invested Capital

## Technologies Used

- **React**: For building the user interface
- **JavaScript**: For logic and calculations
- **HTML/CSS**: For structuring and styling the application

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/investment-calculator.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd investment-calculator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

## Usage

1. Enter the initial investment amount in the "Initial Investment" field.
2. Enter the annual investment amount in the "Annual Investment" field.
3. Enter the expected annual return rate (as a percentage) in the "Expected Return" field.
4. Enter the duration of the investment in years in the "Duration" field.
5. The table will automatically update to show the investment data for each year based on the inputs.

## Example

| Year | Investment Value | Interest (Year) | Total Interest | Invested Capital |
|------|------------------|------------------|----------------|------------------|
| 1    | $1,050           | $50              | $50            | $1,050           |
| 2    | $2,100           | $100             | $150           | $2,100           |
| ...  | ...              | ...              | ...            | ...              |

