import React, { Component } from 'react';
import logo from './../logo.svg';
import './../index.css';
import AddPerson from './AddPerson';
import DisplayNumbers from './DisplayNumbers';
import Filter from './Filter';
import numberService from './..//services/numbers';
import DisplayMessage from './DisplayMessage';
import Confirm from 'react-confirm-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      number: '',
      rajaus: '',
      message: null
    }
  }

  

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  handleNumberChange = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  handleFiltering = (event) => {
    this.setState({
      rajaus: event.target.value
    })
  }

  uusiNimi = (event) => {
    event.preventDefault()
    const uusiObjekti = {
      name: this.state.newName,
      number: this.state.number
    }
    console.log(uusiObjekti)
    if (!this.state.persons.map(persons => persons.name).includes(this.state.newName)) {
      numberService
        .create(uusiObjekti)
        .then(newNumber => {
          this.setState({
            persons: this.state.persons.concat(newNumber),
            newName: '',
            number: '',
            message: `Henkilö ${newNumber.name} lisätty`
          })
          setTimeout(() => {
            this.setState({message: null})
          }, 4000)
        })

    } else {
      if (window.confirm(`Kuulehan sie! ${this.state.newName} on jo luettelos, 
      korvataankos vanha numero uudella?`)) 
      {
        const findPerson = this.state.persons.find(person => person.name === this.state.newName)
        const changedNumber = {...findPerson, number: this.state.number}

        numberService
          .update(findPerson.id, changedNumber)
          .then(newPerson => {
            const persons = this.state.persons.filter(n => n.id !== findPerson.id)
            this.setState({
              persons: persons.concat(newPerson),
              newName: '',
              number: '',
              message: `Henkilön ${newPerson.name} numero muutettu`
            })
            setTimeout(() => {
              this.setState({message: null})
            }, 4000)
          })
          .catch(error => {
            this.setState({
              persons: this.state.persons.concat(findPerson)
            })
          })
      }
    }
  }

  componentDidMount() {
    console.log('did mount')
    numberService
      .getAll()
      .then(persons => {
        this.setState({persons})
      })
  }

  removeName = (id) => {
    return () => {
      const personToRemove = this.state.persons.find(person => person.id === id)
      numberService
        .remove(id)
        .then(persons => {
          this.setState({
            message: `Henkilö ${personToRemove.name} poistettu`,
            persons: this.state.persons.filter(person => person.id !== id)
            
          })
          setTimeout(() => {
            this.setState({message: null})
          }, 4000)
        })
    }
  }
 
  render() {

    const showAll = 
      this.state.rajaus ?
        this.state.persons.filter(persons => 
          persons.name.toLowerCase().includes(
            this.state.rajaus.toLowerCase()) === true) :
        this.state.persons
        


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Savon Puhelinpalvelu</h1>
          <div><b>Ei myö mihtään fonektaa tarvitha!</b></div>
        </header>
        <div>
        <h2>Puhelinluettelo</h2>
        <DisplayMessage message={this.state.message} />
        <Filter onChange={this.handleFiltering} value={this.state.rajaus} />
        <AddPerson persons={this.state.persons} onSubmit={this.uusiNimi} 
        handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange}
        nameValue={this.state.newName} numberValue={this.state.number} id={this.state.persons.id}  />
        <DisplayNumbers list={showAll} eventHandler={this.removeName} />
      </div>
      </div>
    );
  }
}

export default App;
