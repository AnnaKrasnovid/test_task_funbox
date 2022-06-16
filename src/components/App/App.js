import React from 'react';
import './App.css';
import Lead from '../Lead/Lead';
//import dataCards from '../../utils/dataCards';

function App() {
//const [cards, setCards] = React.useState([dataCards])

  return (
    <main className='page'>
      <Lead /*cards={cards}*/ />
    </main>
  );
}

export default App;
