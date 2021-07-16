import React, { useEffect, useState } from 'react'
export default () => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8080/posts/1')
        .then(res => res.json())
        .then(json => setPost(json)) 
        return () => console.log('Cleanup');
    }, [])
    useEffect(() => {
        setLoading(false);
        return () => console.log('Cleanup post dep effect');
    }, [post])
        return (
            <div>
                Post Component
                {
                    !loading ?
                    <div>
                        <p><b>ID:</b> {post.id}</p>
                        <p><b>Title:</b> {post.title}</p>
                        <p><b>Author:</b> {post.author}</p>
                    </div> : <div>Loading</div>
                } 

            </div>
        )
}