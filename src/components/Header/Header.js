import { Button } from '@mui/material';
import React from 'react'
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../firebase'
import { login, logout, selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTeamClick = () => {
        history.push("/team");
    }

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoUrl
                }))
            })
            .catch(error => alert(error.message))
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className="header">
            <div className="header__left" onClick={() => history.push("/")} >
                <h2>MARKETPLACE</h2>
            </div >

            <div className="header__right">
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleTeamClick}>Team</MenuItem>

                    {!user ? (
                        // <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
                        <MenuItem onClick={signIn}>Login</MenuItem>

                    ) : (
                        // <Button variant="contained" color="primary" onClick={signOut}>Logout</Button>
                        <MenuItem onClick={signOut}>Logout</MenuItem>

                    )
                    }
                </Menu>

            </div>
        </div >
    )
}

export default Header
