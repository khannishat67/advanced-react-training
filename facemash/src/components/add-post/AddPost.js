import React, { useEffect, useRef, useState } from 'react'
import { useAuthorName } from '../../hooks/custom-hooks';
import './AddPost.css';
import { Button, TextField, Snackbar, IconButton, makeStyles, styled } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #ff00ff 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  })
const AddPost = ({ onPostAdd }) => {
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false)
    const author = useAuthorName()
    const classes=useStyles();
    const addStatus = () => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status,
                author: author,
                likes: 0
            })
        }).then(res => {
            setStatus('');
            setOpen(true)
            onPostAdd && onPostAdd('Post is created', 'success');
        })
        // Promise will return data once
    }
    const handleClose = () => setOpen(false)
    return (
        <div className="add-post-container">
            <TextField className="field" variant="outlined" multiline={true} label="What's on your mind" value={status} onChange={(e) => setStatus(e.target.value)} />
            <div>
                <StyledButton onClick={addStatus}>Post</StyledButton>
                <StyledButton onClick={addStatus}>Post</StyledButton>
                <StyledButton onClick={addStatus}>Post</StyledButton>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                message="Post Added"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default AddPost; // Default