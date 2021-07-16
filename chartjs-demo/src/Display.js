import React, { useEffect, useState } from 'react';
// subscriber = observer
const getName = (user) => `${user.name.title} ${user.name.first} ${user.name.last}`
const Display = () => {
    const [data, setData] = useState([])
    const [val, setVal] = useState(0);
    useEffect(() => {
        // const user$ = fromFetch('https://randomuser.me/api/')
        //     .pipe(
        //         switchMap(res => {
        //             if (res.ok) {
        //                 return res.json()
        //             } else {
        //                 return of({ error: true, message: `Error ${res.status}` });
        //             }
        //         }),
        //         map(res => res.results)
        //     ).map();
        // const subscription = user$.subscribe(val => setData(val))
        // return () => subscription.unsubscribe()
    }, [])

    return (
        <div>(
            Displayed - 
            <ul>
                {data.map((user,idx) => <li key={idx}>{getName(user)}</li>)}
            </ul>
        </div>
    )
}
export default Display