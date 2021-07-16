import React, { useEffect } from 'react'
export default () => {
    useEffect(() => {
        console.log('Dashboard component mounted');
        
    }, [])
    return (
        <div>Dashboard</div>
    )
}