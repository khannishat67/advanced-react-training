import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logout } from '../store/actions/login';
import { store } from '../store/store';
import './Header.css';
const Header = ({ appTitle, isLoggedIn, user = {} }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    console.log(store);

    const logoutUser = () => {
        
        dispatch(logout())
        localStorage.removeItem("user")
    }
    return (
        <div className="app-header">
            <NavLink activeClassName="active" to="/dashboard" className="brand">{appTitle}
            </NavLink>
            {
                !isLoggedIn ?
                    <div className="right">
                        <NavLink activeClassName="active" to="/login" className="link" >Login</NavLink>
                        <NavLink activeClassName="active" to="/signup" className="link">Sign Up</NavLink>
                    </div>
                    :
                    <div className="right">
                        <span style={{
                            margin: '8px',
                            color: 'white'
                        }}>{user.userName}</span>
                        <Link to="/login" style={{
                            margin: '8px',
                            color: 'white'
                        }} onClick={logoutUser}>Logout</Link>
                    </div>
            }

        </div>
    )
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user
})
export default connect(mapStateToProps)(Header)