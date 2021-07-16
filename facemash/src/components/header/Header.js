import React, { useEffect, useState } from 'react'
import './Header.css';
import { Link, NavLink, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useIsLoggedIn } from '../../hooks/custom-hooks';
import { store } from '../../store/store';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/login';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PeopleIcon from '@material-ui/icons/People';
import LogoutButton from '@material-ui/icons/ExitToApp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Menu, MenuItem, Toolbar, AppBar, Typography, Badge } from '@material-ui/core';
const Header = ({ appTitle, isLoggedIn, user = {} }) => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null)
    console.log(store);
    const handleClose = () => setAnchorEl(null)
    const logoutUser = () => {

        dispatch(logout())
        localStorage.removeItem("user")
    }
    return (
        <AppBar>
            <Toolbar>

                <NavLink to="/dashboard" className="brand">
                    <Typography variant="h6" style={{
                        color: 'white'
                    }}>
                        {appTitle}
                    </Typography>
                </NavLink>
                {
                    !isLoggedIn ?
                        <div className="right">
                            <NavLink to="/login" className="link" >Login</NavLink>
                            <NavLink to="/signup" className="link">Sign Up</NavLink>
                        </div>
                        :
                        <div className="right">
                            <IconButton aria-label="notification">
                                <Badge color='secondary' badgeContent={4}>
                                    <PeopleIcon style={{
                                        color: 'white'
                                    }} />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="chat" onClick={() => history.push('/dashboard/messages')}>
                                <ChatBubbleIcon style={{
                                    color: 'white'
                                }} />
                            </IconButton>
                            <IconButton aria-label="notification">
                                <NotificationsIcon style={{
                                    color: 'white'
                                }} />
                            </IconButton>
                            <IconButton aria-label="dropdown" onClick={(e) => setAnchorEl(e.currentTarget)}>
                                <ArrowDropDown style={{
                                    color: 'white'
                                }} />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><PeopleIcon />{user.userName}</MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <LogoutButton />
                                    <Link to="/login" style={{
                                        margin: '8px',
                                        textDecoration: 'none'
                                    }} onClick={logoutUser}>Logout</Link>
                                </MenuItem>
                            </Menu>
                        </div>
                }

            </Toolbar>
        </AppBar>

    )
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user
})
export default connect(mapStateToProps)(Header)