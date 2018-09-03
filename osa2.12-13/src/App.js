import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      matches: 0,
      tooMany: true,
      info: []
    }
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  componentWillMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data)
      this.setState({
        matches: response.data
      })
    })
  }

  render() {
    const CountryList = ({countryInfo}) => {
      return (
        <div>
          <ul>
            {countryInfo}
          </ul>
        </div>
      )
    }
    const CountriesToShow =
      this.state.info.filter(country => country.name.toLowerCase()
      .includes(this.state.filter.toLocaleLowerCase()).map(country => <li>{country.name}</li>))
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find your country info</h1>
        </header>
        <div>
          Find countries: <input type="text" onChange={this.handleChange}
                            value={this.state.filter} />
        </div>
        <br/>
        <CountryList countryInfo={CountriesToShow}/>
      </div>
    );
  }
}

export default App;
