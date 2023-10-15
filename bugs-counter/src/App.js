import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [cycleCount, setCountCycle] = React.useState(Number(localStorage.getItem('cycles'))||0);
  const [bugsCount, setCountBugs] = React.useState(Number(localStorage.getItem('bugs'))||0);
  const [task, setTaskToInput] = React.useState(localStorage.getItem('task')||'');

  const cycleCountPlus = () => {
    setCountCycle(cycleCount + 1);
    localStorage.setItem('cycles', String(cycleCount + 1));
  };

  const bugsCountPlus = () => {
    setCountBugs(bugsCount + 1);
    localStorage.setItem('bugs', String(bugsCount + 1));
  };

  const setTask = (event) => {
    setTaskToInput(event.target.value);
    localStorage.setItem('task', event.target.value);
  };

  const clearCounts = () => {
    // eslint-disable-next-line
    if (confirm("Уверены что закончили с этой задачей?")){
      localStorage.clear('cycles', 'bugs', 'task');
      localStorage.setItem('cycles', String(0));
      localStorage.setItem('bugs', String(0));
      localStorage.setItem('task', '');
      setCountCycle(0);
      setCountBugs(0);
      setTaskToInput('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>Bugs Counter Helper</code>
        </p>
        <p><a
          className="App-link"
          href="https://www.techtarget.com/searchsoftwarequality/definition/bug#:~:text=In%20computer%20technology%2C%20a%20bug,is%20manufactured%20into%20a%20microprocessor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about bugs
        </a>
        </p>
        <p className="Button-line">
          <div><button onClick={cycleCountPlus} className="Button">Кол-во циклов</button><h2>{cycleCount}</h2></div>
          <div><button onClick={bugsCountPlus} className="Button">Кол-во багов</button><h2>{bugsCount}</h2></div>
        </p>
        <div>
          <p>Ссылка на задачу:</p>
          <input type="url" value={task} onChange={setTask} className="Input"/>
          <div><button onClick={clearCounts} className="Button">Приступить к новой задаче</button></div>
        </div>
      </header>
    </div>
  );
}

export default App;
