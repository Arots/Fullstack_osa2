import React, { Component } from 'react';
import logo from './../logo.svg';
import './../index.css';
import AddPerson from './AddPerson';
import DisplayNumbers from './DisplayNumbers';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: 1,
          numero: "0400 0212"},
        { name: 'Timoteus Teme',
          id: 2,
          numero: "112 911 Whats your emergency?"
        },
        { name: 'Martti Tienari',id: 3, numero: '020-1236666' },
        { name: 'Arto Järvinen',id: 4, numero: '090-123996' },
        { name: 'Lea Kutvonen',id: 5, numero: '018-1234886' }
      ],
      newName: '',
      numero: '',
      rajaus: '',
    }
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  handleNumberChange = (event) => {
    this.setState({
      numero: event.target.value
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
      id: this.state.persons.length +1,
      numero: this.state.numero
    }
    console.log(uusiObjekti)
    
    if (!this.state.persons.map(persons => persons.name).includes(this.state.newName)) {
      const persons = this.state.persons.concat(uusiObjekti)

      this.setState({
        persons: persons,
        newName: '',
        numero: ''
      })
    }
  }
 
  render() {

    const showAll = 
      this.state.rajaus ?
        this.state.persons.filter(persons => persons.name.toLocaleLowerCase().
          includes(this.state.rajaus.toLocaleLowerCase()) === true) :
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
        <Filter onChange={this.handleFiltering} value={this.state.rajaus} />
        <AddPerson persons={this.state.persons} onSubmit={this.uusiNimi} 
        handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange}
        nameValue={this.state.newName} numberValue={this.state.numero}  />
        <DisplayNumbers list={showAll} />
      </div>
      </div>
    );
  }
}

export default App;
