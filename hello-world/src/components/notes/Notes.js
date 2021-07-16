import React, { useState } from 'react'
import Note from './note/Note';
/**
 * Notes Heading
 * List oF Notes
 * Input Element Add Button
 */
const Notes = ({prop1='Default Value', prop2}) => {
    const [notes, setNotes] = useState(['Some value'])
    const [inp, setInp] = useState('');
    const person = {
        age: 23,
        desgination: 'Associate'
    }
    const {name: personName = 'Something', age, desgination} = person
    const remove = (e) => {
        setNotes(notes.filter(note => note !== e))
    }
    return (
        <div>
            <h1>Notes APP</h1>
            <p>Name: {personName},Age: {age}, Designation: {desgination}</p>
            <p>Name: {personName},Age: {age}, Designation: {desgination}</p>
            <p>{prop1.toLowerCase()} & {prop2}</p>
            <ul>
                {
                    notes.map(note => <Note note={note} remove={remove} />)
                }
            </ul>
            <input value={inp} onChange={(e) =>setInp(e.target.value)} />
            <button onClick={() => setNotes([...notes, inp])}>Add</button>
        </div>
    )
}
export default Notes;