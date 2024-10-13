import React from 'react';
import { formatter } from '../util/investment';
const TableComponent = ({ annualData }) => {

    return (
        <>
            <div id="result" >
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {annualData.map(({ year, investmentValue, interest, totalInterest, investedCapital }) => (
                            <tr key={year}>
                                <td>{year}</td>
                                <td>{formatter.format(investmentValue)}</td>
                                <td>{formatter.format(interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(investedCapital)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default TableComponent;
