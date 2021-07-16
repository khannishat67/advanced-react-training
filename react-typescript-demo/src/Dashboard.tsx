import React from 'react'
type DashboardProps = {
    heading: string
}
type DashboardState = {
    counter: number
}
export default class Dashboard extends React.Component<DashboardProps, DashboardState>{
    state: DashboardState = {
        // optional second annotation for better type inference
        counter: 0,
      };
    render() {
        return (
            <div>
                This is dashboard with heading: {this.props.heading} {this.state.counter}
                <button onClick={() => this.setState({counter: this.state.counter-1})}>Decrement</button>
            </div>
        )
    }
}