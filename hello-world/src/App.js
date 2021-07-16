import React, { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/notes/Notes'
import Post from './components/posts/Post'
class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('In Constructor');
    this.toLower = this.toLower.bind(this);
    this.toUpper = this.toUpper.bind(this);
    this.state = {
      title: 'Component TItle',
      subtitle: 'Subtitle'
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Inside getDerivedStateFromProps');
    return state;
  }
  componentDidMount() {
    console.log('Mounted NoteComponent');
  }
  componentDidUpdate() {
    console.log('Update NoteComponent');
    // fetch when title changes
    // fetch when subtitle changes
  }
  toLower() {
    this.setState({
      title: this.state.title.toLowerCase()
    }, ()=> {
      // fetch
    })
  }
  toUpper() {
    this.setState({
      title: this.state.title.toUpperCase()
    })
  }
  render() {
    console.log('Component rendered')
    return (
      <div>
        <h1>Hello World {this.state.title}</h1>
        <button onClick={this.toLower}>To Lowercase</button>
        <button onClick={this.toUpper}>To Uppper</button>
      </div>
    )
  }
}
const ArrowNoteComponent = ({ i = 20 }) => { // Object Destructuring
  const [title, setTitle] = useState('Component Tile')
  const [subtitle, setSubtitle] = useState('Component subtitle')
  useEffect(() => {
    console.log('Inside Use Effect');
  }, [title, subtitle])  // Merges componentDidMount and componentDidUpdate
  const toLower = () => {
    setTitle(title.toLowerCase())
  }
  const toUpper = () => {
    setTitle(title.toUpperCase())
  }
  const toLowerSub = () => {
    setSubtitle(subtitle.toLowerCase())
  }
  const toUpperSub = () => {
    setSubtitle(subtitle.toUpperCase())
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button onClick={toLower}>To Lowercase</button>
      <button onClick={toUpper}>To Uppper</button>
      <h2>{subtitle}</h2>
      <button onClick={toLowerSub}>To Lowercase</button>
      <button onClick={toUpperSub}>To Uppper</button>
    </React.Fragment>
  )
}

function App() {
  const someValue = 40
  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;
