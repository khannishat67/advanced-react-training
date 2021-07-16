import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import { TextField } from './components/CustomInput';
type AppComponentProps = {
  appName?: string
}
function App({appName='Some Default Heading'}: AppComponentProps) {
  const [state, setState] = useState<number>(10);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {appName} - Count - {state}
        </p>
        <button onClick={() => setState(state + 1)}>Increment</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dashboard heading={'Some heading'}/>
        <TextField label={<span style={{color: 'green'}}>Some Label</span>} value={state} onChange={({target}) => setState(Number.parseInt(target.value))} />
      </header>
    </div>
  );
}

export default App;
