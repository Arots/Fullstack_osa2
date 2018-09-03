import React, { Component } from 'react';
import Note from './Note.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: props.notes,
      value: "",
      showAll: true
    }
  }

  addNote = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
    const noteObject = {
      content: this.state.value,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: this.state.notes.length +1
    }
    const notes = this.state.notes.concat(noteObject)

    this.setState({
      notes: notes,
      value: "" 
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll})
  }

  render() {
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important)

    const label = this.state.showAll ? 'important only' : 'all'

    return (
      <div>
        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            Show {label}
          </button>
        </div>
        <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input type="text" 
            placeholder="uusi muistiinpano" 
            value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">Tallenna</button>
        </form>
      </div>
    )
  }

}

export default App;
