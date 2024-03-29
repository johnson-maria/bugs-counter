import './Calculation.css';
import React, { useState, useEffect }  from "react";

export function Calculation() {
    const [taskSize, setTaskSize] = useState(localStorage.getItem('taskSize')||0);
    const [caseAmount, setCaseAmountToInput] = useState(Number(localStorage.getItem('caseAmount'))||0);
    const [timeAmount, setTimeAmountToInput] = useState(Number(localStorage.getItem('timeAmount'))||0);

    useEffect(() => {
        document.title = `Size: ${taskSize}`;
    }, [taskSize]);

    const calculate = () => {
        let result = caseAmount * timeAmount * 2 / 60 / 8;
        let calculatedTaskSize;

        if (result < 1) {
            calculatedTaskSize = 'XXS';
        } else if (result>=1 && result < 2) {
            calculatedTaskSize = 'XS';
        } else if (result>=2 && result < 3) {
            calculatedTaskSize = 'S';
        } else if (result >=3 && result < 5) {
            calculatedTaskSize = 'M';
        } else if (result >= 5 && result < 10) {
            calculatedTaskSize = 'L';
        } else if (result >= 10  && result < 11) {
            calculatedTaskSize = 'XL';
        } else {
            calculatedTaskSize = 'XXL';
        }

        setTaskSize(calculatedTaskSize);
        localStorage.setItem('taskSize', calculatedTaskSize);
    }

    const setCaseAmount = (event) => {
        setCaseAmountToInput(event.target.value);
        localStorage.setItem('caseAmount', event.target.value);
    };

    const setTimeAmount = (event) => {
        setTimeAmountToInput(event.target.value);
        localStorage.setItem('timeAmount', event.target.value);
    };

    return(
        <div className="Calculation">
            <input type="text" value={caseAmount||''} onChange={setCaseAmount} placeholder="Количество кейсов, шт" className="Input-amount"/><br/>
            <input type="text" value={timeAmount||''} onChange={setTimeAmount} placeholder="Примерное время на кейс, мин" className="Input-amount"/><br/>
            <div><button onClick={calculate} className="Button">Рассчитать размер задачи</button><h2>{taskSize}</h2></div>
        </div>
    );
}