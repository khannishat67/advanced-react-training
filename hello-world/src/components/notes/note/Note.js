import React, { useEffect } from 'react'
export default ({note, remove})=> {
    useEffect(() => {
        
        return () => {
            console.log('Inside useEffect cleanup');
        }
    }, []) 
        return (
            <li>
                {note}
                <button onClick={()=>remove(note)}>Remove</button>
            </li>
        )

}