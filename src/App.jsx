import { useMemo, useState } from "react";
import Header from "./components/Header"
import InputComponent from "./components/InputComponent";
import TableComponent from "./components/TableComponent";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(100);
  const [duration, setDuration] = useState(10);

  const inputFields = [
    { label: "Initial Investment", value: initialInvestment, onChange: setInitialInvestment },
    { label: "Annual Investment", value: annualInvestment, onChange: setAnnualInvestment },
    { label: "Expected Return", value: expectedReturn, onChange: setExpectedReturn },
    { label: "Duration", value: duration, onChange: setDuration }
  ]
  const annualData = useMemo(() => {
    return calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration })
  }, [initialInvestment, annualInvestment, expectedReturn, duration])
  return (
    <div id="app-container">
      <Header></Header>
      <div id="user-input">
        {inputFields.map(({ label, value, onChange }) => (
          <InputComponent
            key={label}
            label={label}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        ))}
      </div>
      <div className="center">
        <TableComponent annualData={annualData}></TableComponent>
      </div>
    </div>
  )
}

export default App
