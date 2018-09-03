import React from 'react';
import KurssiComp from './KurssiComp';

const App = ({kurssit}) => {

  return (
    <div>
      {kurssit.map(kurssi => <KurssiComp kurssi={kurssi} key={kurssi.id}/>)}
    </div>
  )
}


export default App;
