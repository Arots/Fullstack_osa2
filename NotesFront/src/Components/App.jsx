import React, { Component } from 'react';
import Note from './Note.jsx';
import noteService from './../services/notes'
import Notification from './Notification'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      value: "",
      showAll: true,
      error: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    noteService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ notes: response })
      })
  }

  addNote = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
    const noteObject = {
      content: this.state.value,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }

    noteService
      .create(noteObject)
      .then(newNote => {
      console.log(newNote)
      this.setState({
        value: "",
        notes: this.state.notes.concat(newNote) 
      })
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

  toggleImportanceOf = (id) => {
    return () => {
      console.log(`importance of ${id} needs to be toggled`)
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = {...note, important: !note.important}

      noteService
        .update(id, changedNote)
        .then(changedNote => {
          const notes = this.state.notes.filter(n => n.id !== id)
          this.setState({
            notes: notes.concat(changedNote)
          })
        })
        .catch(error => {
          this.setState({
            error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
            notes: this.state.notes.filter(note => note.id !== id)
          })
          setTimeout(() => {
            this.setState({error: null})
          }, 5000)
        })
    }
  }

  render() {
    console.log('render')
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important)

    const label = this.state.showAll ? 'important only' : 'all'

    return (
      <div>
        <h1>Muistiinpanot</h1>
        <Notification message={this.state.error}/>
        <div>
          <button onClick={this.toggleVisible}>
            Show {label}
          </button>
        </div>
        <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} 
          toggleImportance={this.toggleImportanceOf(note.id)} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input type="text" className="input"
            placeholder="uusi muistiinpano"
            value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">Tallenna</button>
        </form>
      </div>
    )
  }

}

export default App;
