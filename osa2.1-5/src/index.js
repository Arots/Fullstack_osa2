import React from 'react';
import ReactDOM from 'react-dom';
import './utils/styles/index.css';
import App from './Components/App';

const kurssit = [
    {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },
            {
                nimi: 'Tässä kesti todella kauan ymmärtää map-funktio, ehkä olen tyhmä?',
                tehtavia: 322,
                id: 4
            }
        ]
    },
    {
        nimi: 'Node.js',
        id: 2,
        osat: [
          {
            nimi: 'Routing',
            tehtavia: 3,
            id: 1
          },
          {
            nimi: 'Middlewaret',
            tehtavia: 7,
            id: 2
          }
        ]
      }

]

ReactDOM.render(<App kurssit={kurssit} />, document.getElementById('root'));