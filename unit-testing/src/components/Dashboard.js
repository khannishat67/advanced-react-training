import axios from 'axios';
import React, { useState } from 'react'
const Dashboard = (props) => {
    const [state, setState] = useState('Value')
    const toggle = () => setState('other value')
    const [visible, setVisible] = useState(false);
    const [apiData, setApiData] = useState({});
    return (
        <div>This is some text to be tested
            <span>{props.username}</span>
            <span>{state}</span>
            <button onClick={toggle}>Toggle</button>
            <label for="st">State value</label>
            <input id="st" value={state} onChange={({target})=> setState(target.value)} />

            <button onClick={() => setVisible(!visible)}>visible</button>
            {
                visible && <div>Content visible</div>
            }

            <div>
                {apiData.name}
            </div>
            <button onClick={() => {
                axios.post('./someurl').then(res => res.data).then(data => setApiData(data))
            }}>Fetch</button>
        </div>
    )
}

export default Dashboard;