import './Counter.css';
import React, { useState }  from "react";

function Counter() {

    const [cycleCount, setCountCycle] = useState(Number(localStorage.getItem('cycles'))||0);
    const [bugsCount, setCountBugs] = useState(Number(localStorage.getItem('bugs'))||0);

    const cycleCountPlus = () => {
        setCountCycle(cycleCount + 1);
        localStorage.setItem('cycles', String(cycleCount + 1));
    };

    const bugsCountPlus = () => {
        setCountBugs(bugsCount + 1);
        localStorage.setItem('bugs', String(bugsCount + 1));
    };

    return(

        <div className="Button-line">
            <div className="Cycles-counters">
                <div>
                    <button onClick={cycleCountPlus} className="Button">Добавить цикл</button>
                    <h2>{cycleCount}</h2>
                </div>
                <div><button onClick={bugsCountPlus} className="Button">Добавить баг</button><h2>{bugsCount}</h2></div>
            </div>
        </div>

    );
}

export default Counter;