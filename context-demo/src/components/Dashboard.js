import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import _ from 'lodash';
const Dashboard = () => {
    const userContext = useContext(UserContext)
    const history = useHistory();
    useEffect(() => {
        //_.chunk
        const chunks = _.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
        console.log(chunks);


        // _.concat
        const arr = [1, 2, 3, 4, 5, 6]
        const arr2 = [10, 11, 12]
        // 1,2,3,4,5,6,10,11,12
        const arr3 = _.concat(arr, arr2)
        console.log(arr3);

        /**
         * set A = 1,2,3,4
         * set b = 1,6,7,8,9
         * aUb = 1,2,3,4,6,7,8,9
         * a^b = 1
         * 
         * a-b = 2,3,4
         */
        const a = [1, 2, 3, 4, 5]
        const b = [1, 3, 6, 7, 8]
        const union = _.union(a, b)
        console.log('union', union);
        const intersect = _.intersection(a, b)
        console.log('intersection', intersect);
        const a_b = _.difference(a, b)
        console.log('a-b', a_b);
        const b_a = _.difference(b, a)
        console.log('b-a', b_a);

        const filler = Array(3)
        _.fill(filler, 100)
        console.log(filler);
        const users = [
            {
                'user': 'barney', 'active': false, children: [
                    { 'user': 'fred', 'active': false },
                ]
            },
            {
                'user': 'pebbles', 'active': true, children: [
                    { 'user': 'pebbles', 'active': true },
                    { 'user': 'pebbles', 'active': true }

                ]
            },
        ];
        const index = users.findIndex(user => user.active)
        console.log(index);
        const unflattenned = [1,2,[3,4],[5,[6,6.5]],7,8] 
        console.log(_.flattenDeep(unflattenned));

        const chars = ['n','i','s','h','a','t']
        console.log(chars.join());
    }, [])
    useEffect(() => {
        if (!userContext.isLoggedIn) {
            history.push('/login');
        }
    }, [userContext])
    return (
        <React.Fragment>
            <div>Logged In <button onClick={() => userContext.logout()}>Logout</button></div>
        </React.Fragment>
    )
}
export default Dashboard