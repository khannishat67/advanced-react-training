import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../constants'
import './ViewPosts.css'
import { Typography, Paper, IconButton, Snackbar, Fade } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close'

const Post = ({ post, addLike, onPostDelete }) => {
    const [exists, setExists] = useState(true);
    const deletePost = () => {
        setExists(false);
        axiosClient.delete(`http://localhost:8080/posts/${post.id}`)
            .then(res => onPostDelete(post))
    }
    return (
        <React.Fragment>
            <Fade in={exists} exit={true}>
                <Paper className="post-container">
                    <div className="author">
                        <p>{post.author}</p><IconButton onClick={deletePost} ><DeleteIcon /></IconButton>
                    </div>
                    <p className="status">{post.status}</p>
                    <div>
                        <IconButton onClick={addLike}><ThumbUpIcon /></IconButton><span>{post.likes} likes</span>
                    </div>
                </Paper>
            </Fade>
        </React.Fragment>
    )
}
const ViewPosts = () => {
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        axiosClient.get('http://localhost:8080/posts')
            .then(res => setPosts(res.data));

    }, [])
    const onPostDelete = (post) => {
        setOpen(true)
        setPosts(posts.filter(p => p.id !== post.id));
    }
    const addLike = (post) => {
        fetch(`http://localhost:8080/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...post,
                likes: post.likes + 1
            })
        }).then(res => res.json())
            .then(res => {
                const newArray = posts.map(post => {
                    if (post.id === res.id) {
                        return {
                            ...res
                        }
                    }
                    return post
                });
                setPosts(newArray);
            })
    }
    return (
        <div>
            <Typography variant="h4">News Feed</Typography>
            {
                posts.map(post => <Post post={post} addLike={() => addLike(post)} onPostDelete={onPostDelete} />)
            }
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                message="Post Deleted"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default ViewPosts;