import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import { axiosClient } from '../constants';

const Login = () => {

const userContext = useContext(UserContext)

    useEffect(() => {
        if (userContext.isLoggedIn) {
            history.push('/dashboard');
        }
    }, [])
    const history = useHistory();
    const [id, setId] = useState('');
    const loginUser = (e) => {

        axiosClient.get(`/users/${id}`).then(res => {
            if (res && res.data) {
                userContext.login(res.data)
                history.push("/dashboard");
            }
        })
    }

    return (<div>
        Login Page
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={loginUser}>Login</button>
    </div>)
}

export default Login;