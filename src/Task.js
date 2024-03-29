import logo from './logo3.svg';
import './Task.css';
import React, {useState} from "react";
import {Calculation} from "./Calculation";
import {Counter} from "./Counter";

export function Task() {
    const [calculationKey, setcalculationKey] = useState(0);
    const [calculationKey2, setcalculationKey2] = useState(0);

    const [task, setTaskToInput] = useState(localStorage.getItem('task') || '');

    const setTask = (event) => {
        setTaskToInput(event.target.value);
        localStorage.setItem('task', event.target.value);
    };

    const clearWork = () => {
        // eslint-disable-next-line
        if (confirm("Уверены что закончили с этой задачей?")) {
            localStorage.clear();
            localStorage.setItem('cycles', String(0));
            localStorage.setItem('bugs', String(0));
            localStorage.setItem('task', '');
            localStorage.setItem('taskSize', '');
            localStorage.setItem('caseAmount', String(0));
            localStorage.setItem('timeAmount', String(0));
            setTaskToInput('');
            setcalculationKey(calculationKey + 1);
            setcalculationKey2(calculationKey2 + 1);
        }
    }

    return (
        <div className="App">
            <div className="App-header">
                <div className="Calculation-div"><Calculation key={calculationKey}/></div>

                <div className="Task-box">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Bugs Counter Helper</p>

                    <p><a
                        className="App-link"
                        href="https://www.techtarget.com/searchsoftwarequality/definition/bug#:~:text=In%20computer%20technology%2C%20a%20bug,is%20manufactured%20into%20a%20microprocessor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Узнай больше о багах
                    </a></p>

                    <input type="url" value={task} onChange={setTask} placeholder="Ссылка на задачу" className="Input"/>
                    <div>
                        <button onClick={clearWork} className="Button">Приступить к новой задаче</button>
                    </div>

                </div>

                <div className="Calculation-div"><Counter key={calculationKey2}/></div>

            </div>
        </div>
    );
}