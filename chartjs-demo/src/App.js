import { useEffect, useState } from 'react';
import './App.css';
import Loadable from 'react-loadable';
const LazyComponent = Loadable({
  loader: () => import('./Lazy'),
  loading: (props) => {
    if (props.pastDelay) {
      return <div>Loading</div>
    }
    return null
  },
  delay: 300, // 0.3 seconds

})
function App() {
  useEffect(() => {

  }, [])
  useEffect(() => {
    // const observable = of('ORDER_PLACED', 'ORDER_ACCEPTED', 'ORDER_SHIPPED', 'ORDER_DELIVERED')

    // const subscription1 = observable.pipe(map(eventName =>
    // ({
    //   status: eventName,
    //   time: new Date()
    // })
    // ),
    //   map(res => ({

    //     ...res,
    //     action: 'COMPLETED'
    //   })
    //   ), tap(data => console.log('Inside Tap')))
    //   .subscribe(data => console.log(data), undefined, () => console.log('Order Complete'));
      
    // const intObservable = interval(1000);
    // intObservable.subscribe(val => console.log(val));
    // const value$ = new ReplaySubject(30);
    // value$.subscribe(val => console.log('Sub 1',val))
    // value$.subscribe(val => console.log('Sub 2',val))
    // value$.next(1);
    // value$.next(2);
    // console.log(value$.value);
    // value$.subscribe(val => console.log('Sub 3',val))
    // value$.next(10);
    // console.log(value$.value);
    // value$.next(102);
    // console.log(value$.value);
    // const val1 = of(1);
    // const val2 = of(2);
    // const val3 = of(3);
    // const val4 = of(4);

    // forkJoin(val1, val2,val3,val4).subscribe(val => console.log(val))
    // const player1 = interval(1000);
    // const player2 = interval(2000);
    // const subject = new Subject();
    // subject.subscribe(val => console.log('Sub 1',val));
    // subject.subscribe(val => console.log('Sub 2',val));
    // subject.subscribe(val => console.log('Sub 3',val));
    // subject.next(1);
    // merge(player1,player2).subscribe(value => console.log(value))
}, []);
const [viewed, setViewed] = useState(true);
const [val, setVal] = useState(0);
return (
  <div className="App">
    <LazyComponent />
  </div>
);
}

export default App;


/**
 *
 * Producer -> Consumer
 * Publisher -> Subscriber
 *           -> Subscriber
 * Order -> Save data -> Send SMS -> Send Email
 * Order   Placed / Order cancelled      -> Subscriber Email
 *              -> subcriber SMS
 *              -> Save data
 */